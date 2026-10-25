"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Globe, MapPin } from "@/components/Icons";
import { PageHero } from "@/components/UI";

const stats = [
  {
    value: 2,
    label: "Office locations",
    detail: "Karachi & Khairpur",
    icon: MapPin,
  },
  {
    value: 5,
    label: "Product categories",
    detail: "Fashion, accessories, gadgets, sports & snacks",
    icon: Globe,
  },
  {
    value: 3,
    label: "Ways to grow",
    detail: "Trade, product backing & partnership",
    icon: Award,
  },
];

function CountUp({ value }) {
  const ref = useRef(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame;
    const animate = () => {
      const startTime = performance.now();
      const duration = 1100;
      setCount(0);

      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.round(value * progress));
        if (progress < 1) frame = requestAnimationFrame(update);
      };

      frame = requestAnimationFrame(update);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          animate();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} aria-label={String(value)}>
      {count}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="ajrak-pattern py-12 text-slate-700 sm:py-14" aria-labelledby="impact-stats-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero 
          title="Ajrak Impex at a glance"
          text="A clear start to global trade"
        />
        <div className="grid gap-3 md:grid-cols-3">
          {stats.map(({ value, label, detail, icon: Icon }) => (
            <article
              key={label}
              className="rounded-xl bg-white/90 px-5 py-6 text-center shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-6"
            >
              <Icon className="mx-auto h-7 w-7 text-maroon-700" />
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
                <CountUp value={value} />
              </p>
              <h3 className="mt-2 font-bold text-navy-800">{label}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
