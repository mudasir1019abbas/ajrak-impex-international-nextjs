"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const profiles = [
  {
    role: "Leadership",
    image: "photo-1560250097-0b93528c311a",
    description: "Illustrative portrait. Company leadership sets direction and supports responsible growth.",
  },
  {
    role: "Legal & Compliance",
    image: "photo-1573496359142-b8d87734a5a2",
    description: "Illustrative portrait. Legal and compliance work helps keep agreements and trade processes clear.",
  },
  {
    role: "Customer Support",
    image: "photo-1580489944761-15a19d654956",
    description: "Illustrative portrait. Customer support helps people understand their options and next steps.",
  },
  {
    role: "Sourcing & Procurement",
    image: "photo-1500648767791-00dcc994a43e",
    description: "Illustrative portrait. Sourcing explores products and coordinates with suppliers.",
  },
  {
    role: "Logistics & Operations",
    image: "photo-1519085360753-af0119f7cbe7",
    description: "Illustrative portrait. Operations supports order processes and shipping coordination.",
  },
];

function CarouselArrow({ direction }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 ${direction === "previous" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function TeamCarousel() {
  const trackRef = useRef(null);
  const [expandedProfile, setExpandedProfile] = useState(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector("[data-team-card]");
    if (!track || !firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    track.scrollBy({ left: direction * (cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="ajrak-pattern py-14" aria-labelledby="team-carousel-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-maroon-700">Illustrative portraits</p>
            <h2 id="team-carousel-title" className="mt-2 text-2xl font-extrabold text-navy-800 sm:text-3xl">
              The people behind the process
            </h2>
            <p className="mt-2 text-sm text-slate-600">Sample portraits only; images do not depict Ajrak Impex employees.</p>
          </div>          
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scrollbar-hide scroll-smooth touch-pan-x pb-4"
          role="region"
          aria-label="Team role portraits"
          tabIndex={0}
        >
          {profiles.map((profile, index) => {
            const expanded = expandedProfile === index;

            return (
              <article
                key={profile.role}
                data-team-card
                className="group relative min-w-0 shrink-0 basis-[60%] snap-start overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 sm:basis-[34%] lg:basis-[23%]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedProfile(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-label={`${expanded ? "Hide" : "Show"} description for ${profile.role}`}
                  className="relative block h-[clamp(11.75rem,35vw,14rem)] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                >
                  <Image
                    src={`https://images.unsplash.com/${profile.image}?auto=format&fit=crop&w=480&h=448&q=75`}
                    alt={`Illustrative sample portrait for ${profile.role}`}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 34vw, 60vw"
                    className="object-contains transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <span
                    className={`absolute inset-0 flex items-end bg-gradient-to-t from-navy-900/95 via-navy-900/55 to-transparent p-6 text-left transition-opacity duration-300 motion-reduce:transition-none ${
                      expanded ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                    }`}
                  >
                    <span className="text-sm leading-6 text-white">{profile.description}</span>
                  </span>
                </button>
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <h3 className="font-bold text-navy-800">{profile.role}</h3>
                    <p className="mt-1 text-xs text-slate-500">Illustrative role profile</p>
                  </div>
                  
              </div>
              </article>
            );
          })}
         
        </div>
         <div className="flex gap-20 justify-center">
            {["previous", "next"].map((direction) => (
              <button
                key={direction}
                type="button"
                onClick={() => scroll(direction === "previous" ? -1 : 1)}
                aria-label={`${direction === "previous" ? "Previous" : "Next"} team profiles`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-800 text-navy-800 transition hover:bg-navy-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon-700"
              >
                <CarouselArrow direction={direction} />
              </button>
            ))}
          </div>
      </div>
    </section>
  );
}
