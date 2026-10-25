import Reveal from "@/components/Reveal";
import { Button, PageHero, SectionTitle } from "@/components/UI";
import { Arrow, Award, Globe, ShieldCheck, Truck } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "A Karachi-based import-export company opening global trade to a new generation.",
};

const values = [
  { icon: Globe, title: "Accessible", text: "Trade should not require years of experience." },
  { icon: ShieldCheck, title: "Trustworthy", text: "Clear terms and honest communication, always." },
  { icon: Award, title: "Quality", text: "Products we are proud to stand behind." },
  { icon: Truck, title: "Growth", text: "When our partners grow, we grow." },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Ajrak Impex International"
        text="A Karachi-based import-export company opening global trade to a new generation."
      />

      <section id="strip" className="bg-maroon-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-evenly gap-x-6 gap-y-3 px-4 py-4 text-center text-sm font-semibold sm:px-6 lg:px-8">
          {[
            "Registered Company",
            "Offices in Karachi & Khairpur",
            "Beginner-Friendly",
            "Quality-Checked Products",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-3">
              <span>{item}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-8 text-slate-700">
              We believe great products shouldn&apos;t be a privilege. At Ajrak Impex, we bring the world&apos;s freshest trends—fashion,
              accessories, gadgets, sports gear, snacks and more—to Pakistan at prices that make sense.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              We started with a simple idea: young, driven people deserve a real way into global trade, even with zero experience.
              So we built a company that does the heavy lifting with you, not just for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ajrak-pattern py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Three Ways to Grow With Us" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Import with support",
                text: "We guide you through sourcing, logistics and customs clearance, so you can launch without the guesswork.",
              },
              {
                title: "Invest in a product",
                text: "Explore backing an existing product line and sharing in its profit based on performance.",
              },
              {
                title: "Become a shareholder",
                text: "Discuss becoming a shareholder and growing alongside the company under a separate written agreement.",
              },
            ].map((model, index) => (
              <Reveal key={model.title} delay={index * 100}>
                <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="text-lg font-bold text-navy-800">{model.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{model.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600">
            Investment involves risk. Returns are not guaranteed and any investment or shareholding is subject to a separate written agreement.
            {" "}<Link href="/legal#risk" className="font-semibold text-maroon-700 underline">Read the risk disclaimer</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy-800">Our Mission</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To open the doors of global trade to young professionals by making sourcing, importing, and investing simple,
              affordable, and transparent, so that anyone with drive can begin, whatever their experience.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy-800">Our Vision</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To become Pakistan&apos;s most trusted launchpad for young traders and investors, connecting local ambition with global opportunity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ajrak-pattern py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What We Stand For" subtitle="Affordable. Trendy. Quality you can trust. Styles you won't find in local markets, made accessible to everyone." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="h-full rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100">
                  <Icon className="mx-auto h-9 w-9 text-maroon-700" />
                  <h3 className="mt-3 font-bold text-navy-800">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-slate-600">Whether you&apos;re a first-time entrepreneur or simply curious about your next opportunity, your journey can begin here.</p>
            <Button href="/contact">Talk to Our Team <Arrow className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
