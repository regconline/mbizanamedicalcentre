"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X, CalendarCheck } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "./Logo";
import { nav, site, links } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line bg-white/90 shadow-soft backdrop-blur-md" : "bg-white",
      )}
    >
      <div className={clsx("container-x flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-20")}>
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={clsx(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active(n.href) ? "text-navy" : "text-ink/70 hover:text-navy",
              )}
            >
              {n.label}
              {active(n.href) && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-red" />}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={links.tel} className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue">
            <Phone className="h-4 w-4" aria-hidden /> {site.phone.display}
          </a>
          <Link href="/book-now" className="btn btn-primary min-h-11 px-5">
            <CalendarCheck className="h-4 w-4" aria-hidden /> Book Now
          </Link>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-x-0 bottom-0 top-[inherit] z-40 origin-top bg-white transition-all duration-300 lg:hidden",
          scrolled ? "top-16" : "top-20",
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex h-full flex-col gap-1 overflow-y-auto py-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                "rounded-xl px-4 py-4 font-heading text-lg font-semibold",
                active(n.href) ? "bg-bg text-navy" : "text-ink/80",
              )}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-auto grid gap-3 pt-6">
            <Link href="/book-now" className="btn btn-primary w-full">
              <CalendarCheck className="h-4 w-4" aria-hidden /> Book Now
            </Link>
            <a href={links.tel} className="btn btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden /> Call {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
