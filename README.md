# Mbizana Medical Centre — Website

Website for Mbizana Medical Centre (Dr Sabelo Nogemane), Mbizana, Eastern Cape.
Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, React Hook Form and Zod. No database: content lives in the repo.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in values as they become available
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Editing content (no database)

| What | Where |
|---|---|
| Phone, email, address, hours, doctor bio, qualifications, Navitas links | `lib/site.ts` (most values can be overridden with environment variables in Vercel) |
| Services (add / edit / hide with `published`) | `content/services.ts` |
| Blog posts and categories (`published`, `reviewed`) | `content/blog.ts` |
| Logo | `public/logos/mbizana-mark.svg` |
| Doctor photograph | add to `public/images/`, then set `DOCTOR_PHOTO_URL=/images/doctor.jpg` |

Push to GitHub and Vercel redeploys automatically.

**Medical content:** every article must be approved by Dr Nogemane. Unreviewed articles show a "pending medical review" notice. Set `reviewed: true` once approved.

## Navitas booking

1. Get the practice's booking widget / booking page link from Navitas.
2. Set `NEXT_PUBLIC_NAVITAS_EMBED_URL` (embedded widget) and/or `NEXT_PUBLIC_NAVITAS_BOOKING_URL` (button), plus `NEXT_PUBLIC_NAVITAS_PORTAL_URL` if patient portal access is available.
3. Redeploy and test a real booking on desktop and mobile.

Until these are set, `/book-now` shows a working fallback (call / WhatsApp). The interactive booking demo is clearly labelled and never sends or stores data.

## Contact form

`/api/contact` validates input on the server (Zod), checks a honeypot and minimum fill time, rate-limits each IP, and emails the enquiry through Resend.
Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (from a verified domain). If email isn't configured, the form offers WhatsApp and email instead, so messages are never lost silently.

## Before launch

- Confirm the practice email (`drnogemane@gmail.com` vs `drsnogemane@gmail.com`), street spelling, and operating hours.
- Check that the Google Maps directions resolve to the practice.
- Get the doctor's approved biography and photograph.
- Connect the custom domain in Vercel and set `NEXT_PUBLIC_SITE_URL`.
