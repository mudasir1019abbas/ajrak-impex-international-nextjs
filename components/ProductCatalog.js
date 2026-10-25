"use client";

import { useState } from "react";
import Link from "next/link";
import ImageBox from "@/components/ImageBox";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export default function ProductCatalog({ categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categoryNames = ["All", ...categories.map((category) => category.title)];
  const products = categories
    .filter((category) => activeCategory === "All" || category.title === activeCategory)
    .flatMap((category) =>
      category.products.map((product) => ({ ...product, category: category.title }))
    );

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter products by category">
        {categoryNames.map((category) => {
          const selected = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon-700 focus-visible:ring-offset-2 ${
                selected
                  ? "border-maroon-700 bg-maroon-700 text-white shadow-sm"
                  : "border-slate-200 bg-white text-navy-800 hover:border-maroon-700 hover:text-maroon-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mb-5 text-center text-sm text-slate-500" aria-live="polite">
        Showing {products.length} {products.length === 1 ? "product" : "products"}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
      </p>

      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" aria-live="polite">
        {products.map((product, index) => (
          <Reveal key={`${product.category}-${product.title}`} delay={(index % 5) * 50} direction="zoom">
            <article className="group h-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageBox
                  src={product.image}
                  alt={product.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-maroon-700 shadow-sm">
                  {product.category}
                </span>
              </div>
              <div className="p-3.5">
                <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-navy-800">{product.title}</h3>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-maroon-700 transition hover:text-maroon-800"
                >
                  Enquire <Arrow className="h-3 w-3" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
