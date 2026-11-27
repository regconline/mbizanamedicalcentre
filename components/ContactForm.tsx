"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail, MessageCircle, Send, XCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { site, links } from "@/lib/site";

type Status = "idle" | "success" | "error" | "fallback";

const field =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20 aria-[invalid=true]:border-red";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackText, setFallbackText] = useState("");
  const startedAt = useRef(Date.now());
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        reset();
        startedAt.current = Date.now();
      } else if (json.error === "not_configured" || json.error === "send_failed") {
        setFallbackText(`Hello Mbizana Medical Centre,\n\n${data.message}\n\n${data.fullName} — ${data.phone}`);
        setStatus("fallback");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600" aria-hidden />
        <h3 className="mt-5 text-2xl font-bold">Thank you — message sent</h3>
        <p className="mt-2 max-w-sm text-muted">The practice has received your enquiry and will get back to you during operating hours.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-6">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5 p-6 sm:p-8">
      {status === "error" && (
        <p role="alert" className="flex gap-2 rounded-xl bg-red/5 p-4 text-sm text-red"><XCircle className="h-4 w-4 shrink-0" aria-hidden /> Something went wrong. Please try again, or call {site.phone.display}.</p>
      )}
      {status === "fallback" && (
        <div role="alert" className="rounded-xl bg-blue/5 p-4 text-sm text-ink/80">
          <p>Our online form is temporarily unavailable. Please send your message directly:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="btn min-h-10 bg-wa px-4 text-white" href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(fallbackText)}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp</a>
            <a className="btn btn-outline min-h-10 px-4" href={`${links.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(fallbackText)}`}><Mail className="h-4 w-4" aria-hidden /> Email</a>
          </div>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">Full name *
          <input {...register("fullName")} autoComplete="name" aria-invalid={!!errors.fullName} className={field} />
          {errors.fullName && <span className="mt-1 block text-xs text-red">{errors.fullName.message}</span>}
        </label>
        <label className="block text-sm font-medium">Email address *
          <input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} className={field} />
          {errors.email && <span className="mt-1 block text-xs text-red">{errors.email.message}</span>}
        </label>
        <label className="block text-sm font-medium">Contact number *
          <input {...register("phone")} type="tel" autoComplete="tel" aria-invalid={!!errors.phone} className={field} />
          {errors.phone && <span className="mt-1 block text-xs text-red">{errors.phone.message}</span>}
        </label>
        <label className="block text-sm font-medium">Subject *
          <input {...register("subject")} aria-invalid={!!errors.subject} className={field} />
          {errors.subject && <span className="mt-1 block text-xs text-red">{errors.subject.message}</span>}
        </label>
      </div>
      <label className="block text-sm font-medium">Message *
        <textarea {...register("message")} rows={5} aria-invalid={!!errors.message} className={field} />
        <span className="mt-1 block text-xs text-muted">Please do not include medical history, ID numbers or other sensitive information.</span>
        {errors.message && <span className="mt-1 block text-xs text-red">{errors.message.message}</span>}
      </label>
      <input {...register("company")} tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
      <label className="flex items-start gap-3 text-sm text-ink/80">
        <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 accent-[#073477]" />
        <span>I consent to Mbizana Medical Centre processing my details to respond to this enquiry, as described in the <Link href="/privacy-policy" className="font-medium text-blue underline">privacy policy</Link> (POPIA). *</span>
      </label>
      {errors.consent && <span className="-mt-3 block text-xs text-red">{errors.consent.message}</span>}
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…</> : <><Send className="h-4 w-4" aria-hidden /> Send message</>}
      </button>
    </form>
  );
}
