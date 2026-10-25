import Reveal from "@/components/Reveal";
import ProductCatalog from "@/components/ProductCatalog";
import { Button, PageHero, SectionTitle } from "@/components/UI";
import { Arrow, Container, FileCheck, Globe } from "@/components/Icons";
import productCategories from "@/data/products";

export const metadata = {
  title: "Products & Categories",
  description: "Browse Ajrak Impex fashion, accessories, gadgets, sports gear and snacks.",
};

const support = [
  { icon: Globe, title: "Global sourcing", text: "Discuss product options, budgets and sourcing with our team." },
  { icon: Container, title: "Logistics", text: "Plan shipping around your order, timeline and destination." },
  { icon: FileCheck, title: "Customs guidance", text: "Get support understanding the paperwork and clearance steps involved." },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Products"
        text="Explore our product range by category. Choose a category to see the products available for sourcing."
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Find what you need"
            title="Shop by Category"
            subtitle="Browse all products or filter by Fashion, Accessories, Gadgets, Sports Gear or Snacks."
          />
          <ProductCatalog categories={productCategories} />
          <p className="mt-6 text-center text-sm text-slate-500">
            Product photos are illustrative. Product options, pricing and availability are confirmed with you before an order.
          </p>
          <div className="mt-7 text-center">
            <Button href="/contact">Ask About Our Products <Arrow className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section className="ajrak-pattern py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Support From First Step to Delivery" subtitle="Importing can feel complicated. We work through the key steps with you and explain what to expect." />
          <div className="grid gap-6 md:grid-cols-3">
            {support.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 100}>
                <article className="h-full rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                  <Icon className="mx-auto h-11 w-11 text-maroon-700" />
                  <h3 className="mt-4 font-bold text-navy-800">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Button href="/contact">Discuss Your Requirements <Arrow className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
