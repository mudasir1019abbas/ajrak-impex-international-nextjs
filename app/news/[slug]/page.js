import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/UI";
import { newsArticles } from "../page";
// Every valid URL is known at build time. Unknown URLs must render fully before the
// response is sent, so they return a real 404 status (not a 200 "soft 404").
export const ensureStatic = "navigation";
// All valid params are prerendered, so there is nothing to stream; skip the
// "instant navigation" dev check that asks for <Suspense> around `params`.
export const instant = false;

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.text } : {};
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <>
      <PageHero title={article.title} text={article.text} />
      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <span className="rounded-full bg-maroon-50 px-3 py-1 text-sm font-semibold text-maroon-700">{article.tag}</span>
            <time className="text-sm text-slate-500">{article.date}</time>
          </div>

          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-navy-800">{section.heading}</h2>
                <div className="mt-3 space-y-4 leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <Link
            href="/news"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-maroon-700 transition hover:gap-3"
          >
            <Arrow className="h-4 w-4 rotate-180" />
            Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
