import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { publishedPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/blog", "/contact", "/book-now", "/privacy-policy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...publishedPosts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 })),
  ];
}
