import Image from "next/image";
import Link from "next/link";
import { bullEmblem } from "@/data/images";

export function Emblem({ className = "h-11 w-11" }) {
  return <Image src={bullEmblem} className={className} alt="ajrak-logo" sizes="96px" />;
}

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Ajrak Impex International - Home">
      <Emblem className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[360deg]" />
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-wide ${light ? "text-white" : "text-navy-800"}`}>
          AJRAK IMPEX
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.25em] ${light ? "text-white/70" : "text-maroon-700"}`}>
          International
        </span>
      </span>
    </Link>
  );
}
