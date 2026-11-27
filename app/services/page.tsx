import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Info } from "lucide-react";
import { publishedServices } from "@/content/services";
import { PageHero, ContactCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Medical Services — GP in Bizana",
  description: "General consultations, women's, men's and child health, minor surgeries, chronic disease management, PDPs, medical surveillance, IV therapy and pathology at Mbizana Medical Centre.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Our Medical Services" intro="General practice care for individuals and families in Mbizana. Contact the practice if you are unsure which appointment you need." crumbs={[{ href: "/services", label: "Services" }]} />
      <section className="bg-bg py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publishedServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <article id={s.slug} className="card group flex h-full scroll-mt-28 flex-col p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-bg text-blue transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h2 className="mt-6 text-xl font-bold">{s.title}</h2>
                <p className="mt-2 font-medium text-ink/80">{s.summary}</p>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{s.details}</p>
                <Link href="/book-now" className="btn btn-outline mt-6 min-h-11 self-start">
                  <CalendarCheck className="h-4 w-4" aria-hidden /> Book an appointment
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-10">
          <p className="flex items-start gap-3 rounded-xl bg-white p-5 text-sm text-muted ring-1 ring-line">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
            Service availability may vary. Fees are discussed with the practice directly. The information on this page is general and does not replace a consultation with the doctor.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
