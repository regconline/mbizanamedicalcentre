import Link from "next/link";
import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Hours } from "./Shared";
import { nav, site, links } from "@/lib/site";
import { publishedServices } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="h-1 bg-gradient-to-r from-red via-blue to-navy" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 font-heading font-semibold">{site.doctor.name}</p>
          <p className="text-sm text-white/70">{site.doctor.qualifications}</p>
          <p className="text-sm text-white/70">Practice No: {site.doctor.practiceNumber}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href={links.tel} className="flex items-center gap-3 hover:text-white text-white/85"><Phone className="h-4 w-4 text-red" aria-hidden /> {site.phone.display}</a></li>
            <li><a href={links.email} className="flex items-center gap-3 break-all text-white/85 hover:text-white"><Mail className="h-4 w-4 shrink-0 text-red" aria-hidden /> {site.email}</a></li>
            <li><a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/85 hover:text-white"><MessageCircle className="h-4 w-4 text-wa" aria-hidden /> WhatsApp the practice</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
            <li><Link href="/book-now" className="hover:text-white">Book Now</Link></li>
          </ul>
          <h2 className="mt-8 font-heading text-sm font-bold uppercase tracking-widest text-white">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {publishedServices.slice(0, 6).map((s) => <li key={s.slug}><Link href={`/services#${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Operating hours</h2>
          <div className="mt-5"><Hours dark /></div>
          <p className="mt-4 text-xs text-white/50">Public holidays may differ — please call ahead.</p>
        </div>
        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Location</h2>
          <address className="mt-5 flex gap-3 text-sm not-italic leading-6 text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" aria-hidden />
            <span>{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</span>
          </address>
          <a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light mt-6 min-h-11">
            <Navigation className="h-4 w-4" aria-hidden /> Get Directions
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy (POPIA)</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <a href={site.navitas.staffLoginUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Practice Staff Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
