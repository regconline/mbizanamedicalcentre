import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={clsx("flex items-center gap-3", className)} aria-label="Mbizana Medical Centre — home">
      <Image src="/logos/mbizana-mark.svg" alt="" width={48} height={48} priority className="h-11 w-11 sm:h-12 sm:w-12" />
      <span className="leading-none">
        <span className={clsx("block font-heading text-[1.35rem] font-extrabold tracking-tight", light ? "text-white" : "text-red")}>
          MBIZANA
        </span>
        <span className={clsx("mt-1 block font-heading text-[0.7rem] font-bold tracking-[0.2em]", light ? "text-white/80" : "text-blue")}>
          MEDICAL CENTRE
        </span>
      </span>
    </Link>
  );
}
