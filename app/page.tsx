import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck, HandHeart, MapPinned, MousePointerClick, Phone, ShieldPlus, Stethoscope } from "lucide-react";
import { site, links } from "@/lib/site";
import { publishedServices } from "@/content/services";
import { publishedPosts } from "@/content/blog";
import { Reveal } from "@/components/Reveal";
import { ContactCTA, LocationBlock } from "@/components/Shared";
import { Credential, DoctorPortrait, PostCard, ServiceCard } from "@/components/Cards";

const why = [
  { icon: HandHeart, title: "Patient-focused care", text: "Time to listen, explain and plan your care with you." },
  { icon: MapPinned, title: "Convenient local location", text: "Right here in Mbizana, behind Spar on Thompson Avenue." },
  { icon: Stethoscope, title: "Professional medical practice", text: "A registered general practice led by Dr Sabelo Nogemane." },
  { icon: MousePointerClick, title: "Accessible booking", text: "Book online, call or send a WhatsApp — whatever is easiest." },
  { icon: ShieldPlus, title: "Commitment to wellbeing", text: "Care that respects your dignity, privacy and long-term health." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div aria-hidden className="absolute -right-40 top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-blue/15 to-navy/10 lg:block" />
        <div aria-hidden className="absolute -right-24 top-10 hidden h-[36rem] w-[36rem] rounded-full border-[3px] border-red/20 lg:block" />
        <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">Ugqira GP · Mbizana, Eastern Cape</p>
            <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl">
              Your Health.<br /><span className="text-red">Our Priority.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Welcome to Mbizana Medical Centre, where your health and wellbeing matter. We are committed to providing professional, compassionate medical care to individuals and families in the Mbizana community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-now" className="btn btn-primary w-full sm:w-auto"><CalendarCheck className="h-4 w-4" aria-hidden /> Book an Appointment</Link>
              <Link href="/contact" className="btn btn-outline w-full sm:w-auto">Contact Our Practice</Link>
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <p className="font-heading text-lg font-bold text-navy">{site.doctor.name}</p>
              <p className="text-sm text-muted">{site.name}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.doctor.qualifications.split(",").map((q) => <Credential key={q}>{q.trim()}</Credential>)}
                <Credential>Pr. No {site.doctor.practiceNumber}</Credential>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <DoctorPortrait className="aspect-[4/5] w-full shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]" />
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lift sm:left-auto sm:right-6 sm:w-80">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red/10 text-red"><Phone className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">Call the practice</p>
                <a href={links.tel} className="font-heading text-lg font-bold text-navy hover:text-blue">{site.phone.display}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <Image src="/images/practice-entrance.webp" alt="Entrance of Mbizana Medical Centre with the practice sign above the door" width={846} height={1128} sizes="(min-width:1024px) 40vw, 90vw" className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover shadow-lift" />
              <div className="absolute -right-2 top-8 hidden rounded-2xl bg-navy px-5 py-4 text-white shadow-lift sm:block lg:-right-6">
                <p className="text-xs uppercase tracking-widest text-white/70">Open</p>
                <p className="font-heading font-bold">Mon – Sat</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Welcome to Mbizana Medical Centre</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Our practice exists to make professional healthcare accessible to the people of Mbizana and the surrounding communities. From everyday illness to the ongoing management of chronic conditions, we take the time to understand your needs and treat you with care and respect.
            </p>
            <p className="mt-4 leading-7 text-muted">
              Every patient is seen as a whole person — not just a set of symptoms — and every consultation is handled with confidentiality and dignity.
            </p>
            <Link href="/about" className="btn btn-navy mt-8">Read More <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-bg py-20 sm:py-28" aria-labelledby="svc-h">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we offer</p>
            <h2 id="svc-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Our Medical Services</h2>
            <p className="mt-4 text-muted">Comprehensive general practice care for individuals and families.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publishedServices.slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}><ServiceCard s={s} /></Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn btn-outline">View all services <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="py-20 sm:py-28" aria-labelledby="doc-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2"><DoctorPortrait className="mx-auto aspect-square w-full max-w-md shadow-lift" /></Reveal>
          <Reveal className="lg:col-span-3" delay={0.1}>
            <p className="eyebrow">Meet your doctor</p>
            <h2 id="doc-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">{site.doctor.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.doctor.qualifications.split(",").map((q) => <Credential key={q}>{q.trim()}</Credential>)}
              <Credential>Practice No. {site.doctor.practiceNumber}</Credential>
            </div>
            <p className="mt-6 text-lg leading-8 text-muted">{site.doctor.bio}</p>
            <Link href="/about#doctor" className="btn btn-navy mt-8">Meet Dr Nogemane <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </Reveal>
        </div>
      </section>

      {/* BOOK */}
      <section className="px-5 sm:px-8">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-[#0b4f9f] px-6 py-16 text-white sm:px-14">
          <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[48px] border-blue/40" />
          <div aria-hidden className="absolute bottom-0 right-1/3 h-1 w-40 bg-red" />
          <div className="relative grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Your Health Journey Starts Here.</h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">Book your appointment with Mbizana Medical Centre using our online booking system.</p>
            </div>
            <div className="lg:text-right">
              <Link href="/book-now" className="btn w-full bg-white text-navy hover:-translate-y-0.5 sm:w-auto"><CalendarCheck className="h-4 w-4" aria-hidden /> Book Now</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY */}
      <section className="py-20 sm:py-28" aria-labelledby="why-h">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Care you can trust, close to home</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05} className="bg-white p-7">
                <w.icon className="h-7 w-7 text-red" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-5 font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationBlock />

      {/* BLOG */}
      <section className="py-20 sm:py-28" aria-labelledby="blog-h">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Health education</p>
              <h2 id="blog-h" className="mt-3 text-3xl font-extrabold sm:text-4xl">Latest Health Articles</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-blue hover:text-navy">All articles <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {publishedPosts.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 0.08} className="relative"><PostCard post={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
