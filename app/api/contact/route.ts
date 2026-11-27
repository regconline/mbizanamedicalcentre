import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { site } from "@/lib/site";

/**
 * Contact form handler.
 * - Server-side Zod validation, honeypot + minimum fill time, per-IP rate limit.
 * - Optional Cloudflare Turnstile (set TURNSTILE_SECRET_KEY + NEXT_PUBLIC_TURNSTILE_SITE_KEY).
 * - Delivers the enquiry by email through Resend (RESEND_API_KEY, CONTACT_FROM_EMAIL).
 * Nothing is logged except non-personal error codes (POPIA).
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const data = parsed.data;

  // Bots: honeypot filled or submitted faster than a human could type
  if (data.company || (data.startedAt && Date.now() - data.startedAt < 3000)) {
    return NextResponse.json({ ok: true });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = (body as { turnstileToken?: string }).turnstileToken;
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: turnstileSecret, response: token ?? "", remoteip: ip }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return NextResponse.json({ ok: false, error: "captcha" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Mbizana Medical Centre <onboarding@resend.dev>";
  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(data.fullName)}<br/>
    <strong>Email:</strong> ${esc(data.email)}<br/>
    <strong>Phone:</strong> ${esc(data.phone)}<br/>
    <strong>Subject:</strong> ${esc(data.subject)}</p>
    <p>${esc(data.message).replace(/\n/g, "<br/>")}</p>
    <hr/><p style="color:#667085;font-size:12px">Sent from the ${site.name} website contact form. The sender accepted the POPIA privacy notice.</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: data.email, subject: `Website enquiry: ${data.subject}`, html }),
  });

  if (!res.ok) {
    console.error("contact_email_failed", res.status);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
