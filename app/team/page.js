import Link from "next/link";
import Reveal from "@/components/Reveal";
import TeamCarousel from "@/components/TeamCarousel";
import { Arrow, Award, FileCheck, Globe, Truck, User } from "@/components/Icons";
import { Button, PageHero, SectionTitle } from "@/components/UI";

export const metadata = {
  title: "Our Team",
  description: "Meet the teams and business functions supporting trade at Ajrak Impex International.",
};

const teams = [
  {
    name: "Board of Directors",
    intro: "Guiding the company’s direction and responsible growth.",
    roles: [
      {
        title: "Company leadership",
        text: "Sets priorities, steers the business, and keeps the company focused on its mission.",
        icon: Award,
      },
      {
        title: "Governance & oversight",
        text: "Supports accountable decision-making and long-term planning.",
        icon: User,
      },
    ],
  },
  {
    name: "Legal & Compliance",
    intro: "Helping ensure business arrangements and trade processes are clear.",
    roles: [
      {
        title: "Agreements & documentation",
        text: "Supports clear business agreements and organized trade documentation.",
        icon: FileCheck,
      },
      {
        title: "Compliance coordination",
        text: "Coordinates relevant company and import-export compliance requirements.",
        icon: Globe,
      },
    ],
  },
  {
    name: "Customer Support",
    intro: "Here to help customers understand their options and next steps.",
    roles: [
      {
        title: "Getting started",
        text: "Answers questions and guides customers through the available ways to work with us.",
        icon: User,
      },
      {
        title: "Order assistance",
        text: "Helps coordinate product, order, and delivery enquiries.",
        icon: Truck,
      },
    ],
  },
  {
    name: "Other Teams",
    intro: "Specialist functions working together to support each trade journey.",
    roles: [
      {
        title: "Sourcing & procurement",
        text: "Explores products and coordinates sourcing with suppliers.",
        icon: Globe,
      },
      {
        title: "Logistics & operations",
        text: "Supports shipping coordination, order processes, and trade operations.",
        icon: Truck,
      },
      {
        title: "Sales & partnerships",
        text: "Builds customer relationships and explores opportunities to grow together.",
        icon: Award,
      },
    ],
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        title="Our Team"
        text="A look at the people-focused roles and business functions that help make global trade more accessible."
      />

      <TeamCarousel />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Working together"
            title="Different expertise. One shared purpose."
            subtitle="From leadership and compliance to customer care and logistics, each function plays a part in supporting a clear, beginner-friendly trade journey."
          />
          <div className="space-y-14">
            {teams.map((team, teamIndex) => (
              <section key={team.name} aria-labelledby={`team-${teamIndex}`}>
                <Reveal className="mb-5">
                  <h2 id={`team-${teamIndex}`} className="text-2xl font-extrabold text-navy-800">
                    {team.name}
                  </h2>
                  <p className="mt-2 text-slate-600">{team.intro}</p>
                </Reveal>
                <div className={`grid gap-5 ${team.roles.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {team.roles.map(({ title, text, icon: Icon }, index) => (
                    <Reveal key={title} delay={index * 80}>
                      <article className="h-full rounded-xl bg-slate-50 p-6 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                        <Icon className="h-8 w-8 text-maroon-700" />
                        <h3 className="mt-4 text-lg font-bold text-navy-800">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="ajrak-pattern py-14">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-maroon-700">Let’s connect</p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-800 sm:text-3xl">Have a question for our team?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Get in touch and we’ll help direct your enquiry to the right place.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Contact Us <Arrow className="h-4 w-4" /></Button>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-maroon-700 px-5 py-2.5 text-sm font-semibold text-maroon-700 transition hover:bg-maroon-700 hover:text-white"
            >
              Explore Careers
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
