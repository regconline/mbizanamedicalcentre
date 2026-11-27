"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { clsx } from "clsx";
import type { Category, Post } from "@/content/blog";
import { PostCard } from "./Cards";

export function BlogBrowser({ posts, categories }: { posts: Post[]; categories: Category[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const used = categories.filter((c) => posts.some((p) => p.category === c.slug));

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!term || p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term)),
    );
  }, [posts, q, cat]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {[{ slug: "all", name: "All articles" }, ...used].map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCat(c.slug)}
              aria-pressed={cat === c.slug}
              className={clsx(
                "min-h-10 rounded-full px-4 text-sm font-medium transition",
                cat === c.slug ? "bg-navy text-white" : "bg-white text-ink/75 ring-1 ring-line hover:text-navy",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search articles</span>
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
            className="h-11 w-full rounded-full border border-line bg-white pl-11 pr-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
        </label>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <PostCard key={p.slug} post={p} />)}
      </div>
      {filtered.length === 0 && <p className="mt-10 text-center text-muted">No articles match your search.</p>}
    </>
  );
}
