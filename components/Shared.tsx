import Link from "next/link";
import { CalendarCheck, ChevronRight, Clock, MapPin, MessageCircle, Navigation, Phone, ExternalLink } from "lucide-react";
import { site, links } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Hours({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="space-y-2 text-sm">
      {site.hours.map((h) => (
        <li key={h.day} className="flex justify-between gap-6">
          <span className={dark ? "text-white/70" : "text-muted"}>{h.day}</span>
          <span className={dark ? "font-medium text-white" : "font-medium text-ink"}>
            {h.open ? `${h.open} – ${h.close}` : "Closed"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  eyebrow, title, intro, crumbs,
}: { eyebrow: string; title: string; intro?: string; crumbs: { href: string; label: string }[] }) {
  const all = [{ href: "/", label: "Home" }, ...crumbs];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${site.url}${c.href}` })),
  };
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-blue/30" />
      <div aria-hidden className="absolute -bottom-24 right-40 h-48 w-48 rounded-full border-[18px] border-red/40" />
      <div className="container-x relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/60">
          {all.map((c, i) => (
            <span key={c.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
              {i < all.length - 1 ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
        <h1 className="animate-fade-up max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {intro && <p className="animate-fade-up mt-5 max-w-2xl text-lg leading-8 text-white/80">{intro}</p>}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </section>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-bg ${className}`}>
      <iframe
        title="Map showing Mbizana Medical Centre, Thompson Avenue, Mbizana"
        src={links.mapEmbed}
        className="h-full min-h-[320px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function LocationBlock() {
  return (
    <section className="bg-bg py-20 sm:py-24" aria-labelledby="loc-h">
      <div className="container-x grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">Find us</p>
          <h2 id="loc-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Visit the practice</h2>
          <p className="mt-4 text-muted">We are on Thompson Avenue in Mabhanoyini, behind Spar — easy to reach from Mbizana town centre.</p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden />
              <address className="not-italic leading-7">{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden />
              <a href={links.tel} className="font-semibold text-navy hover:text-blue">{site.phone.display}</a>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden />
              <div className="w-full max-w-xs"><Hours /></div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              <Navigation className="h-4 w-4" aria-hidden /> Get Directions
            </a>
            <a href={links.openInMaps} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <ExternalLink className="h-4 w-4" aria-hidden /> Open in Google Maps
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-3" delay={0.1}>
          <MapEmbed className="h-full min-h-[380px]" />
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center text-white sm:px-12">
          <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[36px] border-blue/30" />
          <div aria-hidden className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full border-[26px] border-red/35" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Need to Make an Appointment?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">Call, send us a WhatsApp message or book online — whichever suits you best.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={links.tel} className="btn bg-white text-navy hover:-translate-y-0.5"><Phone className="h-4 w-4" aria-hidden /> Call the Practice</a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn bg-wa text-white hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Us</a>
              <Link href="/book-now" className="btn btn-primary"><CalendarCheck className="h-4 w-4" aria-hidden /> Book Online</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EmergencyNote() {
  return (
    <p className="rounded-xl border border-red/20 bg-red/5 px-4 py-3 text-sm text-ink/80">
      <strong className="text-red">Medical emergency?</strong> Do not use this form or WhatsApp. Call <a href="tel:10177" className="font-semibold underline">10177</a> (ambulance) or <a href="tel:112" className="font-semibold underline">112</a> from a cell phone, or go to your nearest hospital emergency unit.
    </p>
  );
}
