import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, EyeOff, HandHeart, Landmark, Scale, Users } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero, ContactCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { Credential, DoctorPortrait } from "@/components/Cards";

export const metadata: Metadata = {
  title: "About Us — Dr Sabelo Nogemane",
  description: "About Mbizana Medical Centre and Dr Sabelo Nogemane, MBChB (UKZN), Dip HIV Man (CMSA) — a general practice serving Mbizana (Bizana), Eastern Cape.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: HandHeart, title: "Compassion", text: "We listen carefully and care for every patient with kindness and patience." },
  { icon: Scale, title: "Patient dignity", text: "Every person is treated with respect, whatever their background or circumstances." },
  { icon: Landmark, title: "Professionalism", text: "Care delivered responsibly and ethically, in line with professional standards." },
  { icon: EyeOff, title: "Confidentiality", text: "Your health information stays private and is shared only as the law allows." },
  { icon: Users, title: "Community healthcare", text: "A local practice committed to the health of Mbizana and its families." },
];

export default function About() {
  const physicianLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.doctor.name,
    description: site.doctor.bio,
    hasCredential: site.doctor.qualifications.split(",").map((q) => ({ "@type": "EducationalOccupationalCredential", name: q.trim() })),
    worksFor: { "@id": `${site.url}/#clinic` },
    telephone: site.phone.international,
  };
  return (
    <>
      <PageHero eyebrow="About us" title="A local practice built on care and trust" intro="Mbizana Medical Centre is a general practice in Mbizana, Eastern Cape, providing professional and compassionate healthcare to individuals and families." crumbs={[{ href: "/about", label: "About Us" }]} />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our practice</p>
            <h2 className="mt-3 text-3xl font-extrabold">Healthcare for the Mbizana community</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-8 text-muted">
            <p>Located on Thompson Avenue in Mabhanoyini, behind Spar, Mbizana Medical Centre is a welcoming, accessible place to receive medical care close to home.</p>
            <p>Our purpose is simple: to give every patient professional medical care, delivered with respect and clear communication — so that you understand your health and feel confident in your treatment.</p>
          </Reveal>
        </div>
      </section>

      <section id="doctor" className="scroll-mt-24 bg-bg py-20 sm:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 lg:sticky lg:top-28"><DoctorPortrait className="aspect-[4/5] w-full shadow-lift" /></Reveal>
          <Reveal className="lg:col-span-3" delay={0.1}>
            <p className="eyebrow">Meet your doctor</p>
            <h2 className="mt-3 text-4xl font-extrabold">{site.doctor.name}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {site.doctor.qualifications.split(",").map((q) => <Credential key={q}>{q.trim()}</Credential>)}
              <Credential>Practice No. {site.doctor.practiceNumber}</Credential>
            </div>
            <div className="card mt-8 p-8">
              <h3 className="text-xl font-bold">Professional profile</h3>
              <p className="mt-4 text-lg leading-8 text-muted">{site.doctor.bio}</p>
              <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Qualifications</dt><dd className="mt-1 font-medium">{site.doctor.qualifications}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Practice number</dt><dd className="mt-1 font-medium">{site.doctor.practiceNumber}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Practice</dt><dd className="mt-1 font-medium">{site.name}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Location</dt><dd className="mt-1 font-medium">Mbizana, Eastern Cape</dd></div>
              </dl>
            </div>
            <Link href="/book-now" className="btn btn-primary mt-8"><CalendarCheck className="h-4 w-4" aria-hidden /> Book with Dr Nogemane</Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Our approach</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Our approach to healthcare</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-red/10 text-red"><v.icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mt-5 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianLd) }} />
    </>
  );
}
