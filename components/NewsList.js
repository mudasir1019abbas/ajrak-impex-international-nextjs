"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow } from "@/components/Icons";

// `articles` are summaries (slug, title, date, tag, text) passed from the server page.
export default function NewsList({ articles: newsArticles }) {
  const tags = ["All", ...new Set(newsArticles.map((article) => article.tag))];
  const [tag, setTag] = useState("All");
  const shown = tag === "All" ? newsArticles : newsArticles.filter((article) => article.tag === tag);
  return (
    <>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]">
              <div>
                {shown.length > 0 && (
                  <article className="border-b-2 border-navy-800 pb-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded-full bg-maroon-50 px-3 py-1 font-semibold text-maroon-700">{shown[0].tag}</span>
                      <time className="text-slate-500">{shown[0].date}</time>
                    </div>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
                      <Link href={`/news/${shown[0].slug}`} className="transition-colors hover:text-maroon-700">
                        {shown[0].title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-600">{shown[0].text}</p>
                    <Link href={`/news/${shown[0].slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-maroon-700 transition-all hover:gap-3"
                    >
                      Read the story <Arrow className="h-4 w-4" />
                    </Link>
                  </article>
                )}

                <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-6">
                  {tags.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      aria-pressed={tag === t}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition duration-300 ${
                        tag === t ? "bg-maroon-700 text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-maroon-50 hover:text-maroon-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="divide-y divide-slate-200">
                  {shown.slice(1).map((p) => (
                    <article key={p.slug} className="py-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="font-semibold uppercase tracking-wide text-maroon-700">{p.tag}</span>
                        <time className="text-slate-500">{p.date}</time>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-navy-800 transition-colors hover:text-maroon-700">
                        <Link href={`/news/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="border-t-4 border-maroon-700 pt-4">
                  <h2 className="text-xl font-extrabold text-navy-800">Latest News</h2>
                  <div className="mt-3 divide-y divide-slate-200">
                    {shown.slice(0, 5).map((p) => (
                      <article key={p.slug} className="py-4">
                        <time className="text-xs text-slate-500">{p.date}</time>
                        <h3 className="mt-1 font-semibold leading-6 text-navy-800 hover:text-maroon-700">
                          <Link href={`/news/${p.slug}`}>{p.title}</Link>
                        </h3>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="mt-8 border-t-4 border-navy-800 pt-4">
                  <h2 className="text-xl font-extrabold text-navy-800">Topics</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.slice(1).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTag(t)}
                        className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-maroon-50 hover:text-maroon-700"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
        </div>
      </section>
    </>
  );
}
