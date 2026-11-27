import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, CalendarDays, Clock, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { categoryName, publishedPosts, readingTime } from "@/content/blog";
import { site } from "@/lib/site";
import { PostCard, PostVisual, fmt } from "@/components/Cards";
import { ContactCTA } from "@/components/Shared";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const related = publishedPosts.filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(publishedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);
  const share = [
    { label: "Share on WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
    { label: "Share on Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Share on LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt,
      datePublished: post.date, author: { "@type": "Organization", name: site.name }, publisher: { "@id": `${site.url}/#clinic` }, mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <article>
        <header className="bg-bg">
          <div className="container-x max-w-4xl py-14 sm:py-20">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-navy"><ArrowLeft className="h-4 w-4" aria-hidden /> All articles</Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-red">{categoryName(post.category)}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted">
              <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" aria-hidden /><time dateTime={post.date}>{fmt(post.date)}</time></span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden />{readingTime(post)} min read</span>
            </div>
          </div>
        </header>
        <div className="container-x max-w-4xl">
          <PostVisual post={post} className="-mt-2 aspect-[21/8] rounded-3xl" />
        </div>
        <div className="container-x grid max-w-4xl gap-10 py-14 lg:grid-cols-[1fr_auto]">
          <div className="prose-article max-w-2xl">
            {!post.reviewed && (
              <p className="mb-8 flex gap-3 rounded-xl border border-blue/20 bg-blue/5 p-4 text-sm text-ink/80">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                This article is pending medical review by {site.doctor.name}.
              </p>
            )}
            {post.body.map((b, i) =>
              b.h ? <h2 key={i}>{b.h}</h2> : b.list ? <ul key={i}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul> : <p key={i}>{b.p}</p>,
            )}
            <p className="mt-10 rounded-xl bg-bg p-5 text-sm leading-6 text-muted">
              This article is general health information. It does not provide a diagnosis and does not replace professional medical advice. Please consult a doctor about your own health.
            </p>
          </div>
          <aside className="lg:w-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted lg:sr-only">Share</p>
            <div className="flex gap-2 lg:sticky lg:top-28 lg:flex-col">
              {share.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full bg-bg text-navy transition hover:bg-navy hover:text-white">
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </article>
      <section className="bg-bg py-16 sm:py-20" aria-labelledby="rel-h">
        <div className="container-x">
          <h2 id="rel-h" className="text-2xl font-extrabold">Related articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </div>
      </section>
      <ContactCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
