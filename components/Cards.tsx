import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, Clock } from "lucide-react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";
import { type Post, categoryName, readingTime } from "@/content/blog";
import type { Service } from "@/content/services";

const fmt = (d: string) => new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

/** Shows the doctor's photo when DOCTOR_PHOTO_URL is set; otherwise a branded portrait placeholder. */
export function DoctorPortrait({ className = "" }: { className?: string }) {
  if (site.doctor.photo) {
    return (
      <div className={`relative overflow-hidden rounded-[2rem] bg-bg ${className}`}>
        <Image src={site.doctor.photo} alt={`${site.doctor.name}, ${site.name}`} fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" priority />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-[#0a4a9c] ${className}`} role="img" aria-label={`Portrait placeholder for ${site.doctor.name}`}>
      <div aria-hidden className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[40px] border-blue/40" />
      <div aria-hidden className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border-[28px] border-red/30" />
      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">
        <div className="grid h-28 w-28 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur">
          <Image src="/logos/mbizana-mark.svg" alt="" width={72} height={72} />
        </div>
        <p className="mt-6 font-heading text-2xl font-extrabold">{site.doctor.name}</p>
        <p className="mt-1 text-sm text-white/75">{site.doctor.qualifications}</p>
      </div>
    </div>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <div id={s.slug} className="card group flex h-full scroll-mt-28 flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-bg text-blue transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{s.summary}</p>
      <Link href={`/services#${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        <span className="sr-only">about {s.title}</span>
      </Link>
    </div>
  );
}

export function PostVisual({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-bg to-[#dce8f6] ${className}`} aria-hidden>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[22px] border-blue/15" />
      <div className="absolute -bottom-12 left-6 h-28 w-28 rounded-full border-[14px] border-red/10" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-navy shadow-soft">
          <Icon name={post.icon} className="h-7 w-7" strokeWidth={1.6} />
        </span>
      </div>
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <PostVisual post={post} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span className="font-semibold uppercase tracking-wider text-blue">{categoryName(post.category)}</span>
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" aria-hidden /><time dateTime={post.date}>{fmt(post.date)}</time></span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden />{readingTime(post)} min</span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden /></span>
      </div>
    </article>
  );
}

export function Credential({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-soft ring-1 ring-line">
      <BadgeCheck className="h-3.5 w-3.5 text-blue" aria-hidden /> {children}
    </span>
  );
}

export { fmt };
