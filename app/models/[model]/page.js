import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { Button, PageHero } from "@/components/UI";

const models = {
  "trade-with-us": {
    title: "Trade With Us",
    summary: "Get practical support to bring products into your market, from early sourcing questions through shipping and customs coordination.",
    overview:
      "This model is for people who want to trade products but need guidance through the process. We work with you to understand your product requirements, explore sourcing options, and plan the steps involved in getting goods to you.",
    steps: [
      ["Share your requirements", "Tell us what you want to source, your target market, estimated quantity, and budget."],
      ["Review options and costs", "We discuss suitable sourcing and logistics options and provide the applicable costs and terms for your review."],
      ["Confirm the engagement", "Before proceeding, responsibilities, payment terms, delivery expectations, and any service fees are confirmed in writing."],
      ["Coordinate the shipment", "We guide or coordinate the agreed sourcing, shipping, and customs-clearance steps with the relevant partners."],
    ],
    note: "Product availability, shipping schedules, duties, taxes, and clearance requirements vary. Timelines and costs are confirmed for each engagement and may change based on supplier or regulatory conditions.",
    investment: false,
  },
  "back-a-product": {
    title: "Back a Product",
    summary: "Explore a product-specific participation arrangement with terms agreed in writing before any funds are committed.",
    overview:
      "This model is for people interested in supporting a selected product opportunity. The product, required contribution, operating costs, reporting, and any profit-sharing method must be discussed and documented for that specific opportunity.",
    steps: [
      ["Discuss available products", "Contact us to ask which product opportunities, if any, are currently being considered."],
      ["Review the proposed terms", "Understand the product plan, estimated costs, responsibilities, risks, and how any results would be calculated and reported."],
      ["Consider independent advice", "Take time to review the proposal and seek independent financial, legal, or tax advice if appropriate."],
      ["Sign an agreement before proceeding", "No participation begins unless the parties have agreed and signed the relevant written terms."],
    ],
    note: "This is not a public offer of securities. Product performance and market conditions are uncertain; returns are not guaranteed and you may lose some or all of any amount committed. See our risk disclaimer.",
    investment: true,
  },
  "grow-with-us": {
    title: "Grow With Us",
    summary: "Start a conversation about a potential investor or shareholder relationship and the terms that would govern it.",
    overview:
      "This model is for people interested in a broader relationship with the company. Any investment or shareholding would require separate discussions, appropriate review, and a written agreement describing the parties' rights, responsibilities, and risks.",
    steps: [
      ["Tell us about your interest", "Share your goals, experience, and the kind of participation you would like to discuss."],
      ["Explore whether there is a fit", "We can discuss the company's plans and whether a potential arrangement may be suitable to consider."],
      ["Review the details independently", "Any proposal should be assessed carefully, including its legal structure, financial information, and associated risks."],
      ["Proceed only under signed terms", "No investment or shareholding is created unless a separate written agreement is completed in accordance with applicable law."],
    ],
    note: "This page is for general information only and is not an offer or invitation to invest. An investment or shareholding is not guaranteed to be available and may be subject to eligibility, due diligence, applicable law, and a separate written agreement. See our risk disclaimer.",
    investment: true,
  },
};

// Every valid URL is known at build time. Unknown URLs must render fully before the
// response is sent, so they return a real 404 status (not a 200 "soft 404").
export const ensureStatic = "navigation";
// All valid params are prerendered, so there is nothing to stream; skip the
// "instant navigation" dev check that asks for <Suspense> around `params`.
export const instant = false;

export function generateStaticParams() {
  return Object.keys(models).map((model) => ({ model }));
}

export async function generateMetadata({ params }) {
  const { model } = await params;
  const details = models[model];
  return details ? { title: details.title, description: details.summary } : {};
}

export default async function BusinessModelPage({ params }) {
  const { model } = await params;
  const details = models[model];

  if (!details) notFound();


  return (
    <>
      <PageHero title={details.title} text={details.summary} />
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <section>
            <h2 className="text-2xl font-extrabold text-navy-800">How this model works</h2>
            <p className="mt-4 leading-7 text-slate-600">{details.overview}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-navy-800">Your steps</h2>
            <ol className="mt-5 space-y-5">
              {details.steps.map(([heading, description], index) => (
                <li key={heading} className="flex gap-4 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon-700 font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-800">{heading}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-700">
            <h2 className="font-bold text-navy-800">{details.investment ? "Important risk information" : "Please note"}</h2>
            <p className="mt-2">{details.note}</p>
            {details.investment && (
              <Link href="/legal#risk" className="mt-3 inline-block font-semibold text-maroon-700 underline">
                Read the risk disclaimer
              </Link>
            )}
          </aside>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Discuss this model <Arrow className="h-4 w-4" /></Button>
            <Link href="/#layers-to-work" className="font-semibold text-maroon-700 hover:underline">
              Compare all three models
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
