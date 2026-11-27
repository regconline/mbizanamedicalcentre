import type { Metadata } from "next";
import { PageHero } from "@/components/Shared";
import { BlogBrowser } from "@/components/BlogBrowser";
import { categories, publishedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Health Blog & Education",
  description: "Health education articles from Mbizana Medical Centre — check-ups, blood pressure, HIV testing, diabetes, preventive care and healthy living.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <PageHero eyebrow="Health education" title="Health Articles" intro="Practical, trustworthy health information for you and your family. Articles are general information and do not replace a consultation." crumbs={[{ href: "/blog", label: "Blog" }]} />
      <section className="bg-bg py-16 sm:py-20">
        <div className="container-x">
          <BlogBrowser posts={publishedPosts} categories={categories} />
        </div>
      </section>
    </>
  );
}
