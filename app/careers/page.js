import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { Button, PageHero, SectionTitle } from "@/components/UI";

export const metadata = {
  title: "Careers",
  description: "Interested in working with Ajrak Impex? Send your introduction and CV by email.",
};

const opportunities = [
  {
    title: "Global trade and sourcing",
    text: "Help connect customers with products and suppliers across international markets.",
  },
  {
    title: "Operations and logistics",
    text: "Support the planning, documentation and coordination that move orders from supplier to destination.",
  },
  {
    title: "Customer and business development",
    text: "Build trusted relationships and help customers take their next step in global trade.",
  },
];

export default function Careers() {
  return (
    <>
      <PageHero
        title="Careers at Ajrak Impex"
        text="Join a team making global trade more accessible and helping ambitious people grow."
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Grow with us"
            title="Make an impact through trade"
            subtitle="We value curiosity, clear communication and a willingness to learn. Our work brings together products, people and opportunities across borders."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <Reveal key={opportunity.title} delay={index * 90}>
                <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h2 className="text-lg font-bold text-navy-800">{opportunity.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{opportunity.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ajrak-pattern py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-maroon-700">Current openings</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy-800 sm:text-3xl">
              No specific vacancies are listed right now
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We welcome introductions from people interested in working with us. Email your CV and a short note about the kind of role you are looking for, and we will be in touch if there is a suitable opportunity.
            </p>
            <a
              href="mailto:ajrakimpex@gmail.com?subject=Career%20enquiry"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-maroon-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-maroon-800 hover:shadow-lg"
            >
              Send your CV <Arrow className="h-4 w-4" />
            </a>
            <p className="mt-3 text-sm text-slate-500">Email: ajrakimpex@gmail.com</p>
            <Button href="/contact" variant="outline" className="mt-5">
              Contact our team
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
