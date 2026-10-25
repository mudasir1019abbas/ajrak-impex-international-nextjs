"use client";

import { useState } from "react";
import ImageBox from "@/components/ImageBox";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/UI";
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {products.map((product, index) => (
          <Reveal key={`${product.category}-${product.title}`} delay={(index % 3) * 70} direction="zoom">
            <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageBox
                  src={product.image}
                  alt={product.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon-700 shadow-sm">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h3 className="font-bold text-navy-800">{product.title}</h3>
                <Button href="/contact" variant="outline" className="shrink-0 px-3 py-2 text-xs">
                  Enquire <Arrow className="h-3.5 w-3.5" />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
