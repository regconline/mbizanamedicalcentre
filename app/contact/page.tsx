import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, ExternalLink } from "lucide-react";
import { site, links } from "@/lib/site";
import { PageHero, Hours, MapEmbed, EmergencyNote } from "@/components/Shared";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Medical Centre in Mbizana",
  description: "Contact Mbizana Medical Centre: 069 754 7363, ERF 322 Thompson Avenue, Mabhanoyini (behind Spar), Mbizana, Eastern Cape. WhatsApp, email and directions.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const items = [
    { icon: Phone, label: "Telephone", value: site.phone.international, href: links.tel },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone.display, href: links.whatsapp, ext: true },
    { icon: Mail, label: "Email", value: site.email, href: links.email },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" intro="Call, WhatsApp or send us a message. For appointments you can also book online." crumbs={[{ href: "/contact", label: "Contact" }]} />
      <section className="bg-bg py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="card p-7">
              <h2 className="text-xl font-bold">{site.name}</h2>
              <p className="text-sm text-muted">{site.doctor.name} · {site.doctor.qualifications}</p>
              <ul className="mt-6 space-y-5">
                {items.map((i) => (
                  <li key={i.label} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bg text-red"><i.icon className="h-5 w-5" aria-hidden /></span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{i.label}</p>
                      <a href={i.href} {...(i.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-all font-semibold text-navy hover:text-blue">{i.value}</a>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bg text-red"><MapPin className="h-5 w-5" aria-hidden /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Address</p>
                    <address className="not-italic font-medium leading-6">{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card p-7">
              <h2 className="flex items-center gap-2 text-lg font-bold"><Clock className="h-5 w-5 text-red" aria-hidden /> Operating hours</h2>
              <div className="mt-5"><Hours /></div>
            </div>
          </div>
          <div className="space-y-6 lg:col-span-3">
            <div>
              <h2 className="text-2xl font-extrabold">Send us a message</h2>
              <p className="mt-2 text-muted">For general enquiries only. We respond during operating hours.</p>
            </div>
            <EmergencyNote />
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-extrabold">Find the practice</h2>
            <div className="flex flex-wrap gap-3">
              <a href={links.directions} target="_blank" rel="noopener noreferrer" className="btn btn-navy"><Navigation className="h-4 w-4" aria-hidden /> Get Directions</a>
              <a href={links.openInMaps} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><ExternalLink className="h-4 w-4" aria-hidden /> Open in Google Maps</a>
            </div>
          </div>
          <MapEmbed className="mt-8 h-[420px]" />
        </div>
      </section>
    </>
  );
}
