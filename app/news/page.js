import { PageHero } from "@/components/UI";
import NewsList from "@/components/NewsList";

export const metadata = {
  title: "News",
  description: "News, guides and stories from the world of Ajrak and global trade.",
};

export const newsArticles = [
  {
    slug: "the-story-behind-authentic-ajrak",
    title: "The Story Behind Authentic Ajrak",
    date: "12 Oct 2026",
    tag: "Heritage",
    text: "From indigo vats to resist-printed patterns: how a Sindhi tradition is made.",
    sections: [
      {
        heading: "A craft shaped by place",
        paragraphs: [
          "Ajrak is a distinctive block-printed textile tradition associated with Sindh. Its repeating geometry and deep indigo and madder colours are more than decoration: they reflect generations of local skill and a strong connection to place.",
          "The cloth is prepared and printed in stages. Artisans use carved wooden blocks to apply a resist, protecting selected areas as the fabric is dyed. Repeating this process builds the layered patterns that make each design recognizable.",
        ],
      },
      {
        heading: "Patience in every layer",
        paragraphs: [
          "Printing requires careful alignment. Each impression must meet the last so the pattern flows across the cloth. Dyeing and washing between steps help develop the colour and reveal the contrast in the design.",
          "Small variations are part of the character of hand-printed fabric. They are a reminder that each piece passes through skilled hands rather than a single automated process.",
        ],
      },
      {
        heading: "Keeping tradition in use",
        paragraphs: [
          "Choosing authentic Ajrak supports the people and knowledge behind the craft. When buying, ask about the printing process, materials and care instructions so you can understand what went into the textile and help it last.",
        ],
      },
    ],
  },
  {
    slug: "choosing-between-sea-and-air-freight",
    title: "Choosing Between Sea and Air Freight",
    date: "28 Sep 2026",
    tag: "Logistics",
    text: "A practical guide to cost, speed and risk for first-time exporters.",
    sections: [
      {
        heading: "Start with the shipment",
        paragraphs: [
          "The right transport method depends on what you are shipping, how much there is, when it is needed and the full landed cost your business can manage. Compare a complete quote rather than looking at the freight charge alone.",
          "Air freight is often considered for urgent, smaller consignments. Sea freight is commonly used for larger loads where a longer transit time can be planned for.",
        ],
      },
      {
        heading: "Compare time and cost",
        paragraphs: [
          "Ask providers for a realistic door-to-door schedule, including handling and customs steps. Transit estimates can differ from the time goods spend moving through ports or airports.",
          "Check how charges are calculated, what is included, and which fees may be billed separately. Packaging, insurance, documentation and destination handling all affect the final cost.",
        ],
      },
      {
        heading: "Make a resilient plan",
        paragraphs: [
          "Build in time for preparation, inspections and clearance, and confirm the delivery terms with your buyer. For important orders, discuss contingency options with your freight partner before the shipment leaves.",
        ],
      },
    ],
  },
  {
    slug: "customs-clearance-checklist",
    title: "Customs Clearance Checklist",
    date: "09 Sep 2026",
    tag: "Compliance",
    text: "The documents you need ready before your shipment reaches port.",
    sections: [
      {
        heading: "Prepare the core paperwork",
        paragraphs: [
          "A well-organized document set helps the parties involved understand what is being shipped, who is buying it and how it is moving. Common documents include a commercial invoice, packing list and transport document.",
          "Depending on the product, destination and trade terms, additional certificates or permits may be required. Confirm requirements with your customs broker or relevant authority before dispatch.",
        ],
      },
      {
        heading: "Check every detail",
        paragraphs: [
          "Make sure names, addresses, quantities, product descriptions, weights and package counts match across the documents. Consistent information can reduce avoidable questions and delays.",
          "Use product classifications and origin details that have been verified for the shipment. Requirements vary by destination and product, so do not rely on assumptions from a previous order.",
        ],
      },
      {
        heading: "Confirm before dispatch",
        paragraphs: [
          "Share draft documents with the buyer and broker early enough to review. Keep copies of the final paperwork and confirm who is responsible for each clearance step under the agreed shipping terms.",
        ],
      },
    ],
  },
  {
    slug: "why-natural-dyes-matter-to-buyers",
    title: "Why Natural Dyes Matter to Buyers",
    date: "21 Aug 2026",
    tag: "Textiles",
    text: "Quality, sustainability and the premium on traditional colour.",
    sections: [
      {
        heading: "Colour with a story",
        paragraphs: [
          "Natural dyes connect a textile to its materials, makers and local practices. For buyers, that story can add meaning to a product and help distinguish traditional craft from mass-produced alternatives.",
          "The final colour can vary with materials and process. That variation is part of working with natural sources, so buyers should agree on acceptable colour ranges before placing a production order.",
        ],
      },
      {
        heading: "Ask about the process",
        paragraphs: [
          "The phrase 'natural dye' can describe different materials and methods. Ask suppliers which dyes are used, how the fabric is processed and what care the finished textile needs.",
          "If a product makes environmental or sourcing claims, request clear information that supports those claims. Specific, verifiable details help buyers make informed decisions.",
        ],
      },
      {
        heading: "Balance tradition and performance",
        paragraphs: [
          "Colourfastness, washing instructions and intended use matter as much as appearance. Request samples and test them under the conditions your customers are likely to use before confirming a larger order.",
        ],
      },
    ],
  },
  {
    slug: "packing-textiles-for-long-voyages",
    title: "Packing Textiles for Long Voyages",
    date: "02 Aug 2026",
    tag: "Logistics",
    text: "Moisture control and packing standards that protect fabric in transit.",
    sections: [
      {
        heading: "Prepare the goods",
        paragraphs: [
          "Textiles should be clean and fully dry before packing. Folding or rolling depends on the fabric and how it will be handled; use a method that avoids unnecessary creases and pressure on delicate finishes.",
          "Separate products by type, size or order line, and label packages clearly. A consistent packing list makes it easier to check quantities during handling and receipt.",
        ],
      },
      {
        heading: "Protect against handling and moisture",
        paragraphs: [
          "Choose packaging suited to the shipment route and the goods. Inner wrapping can help keep dust and moisture away, while sturdy outer packaging protects against routine handling.",
          "For containerized shipments, discuss moisture risks and suitable protective measures with your logistics provider. The right approach depends on the cargo, packaging and expected transit conditions.",
        ],
      },
      {
        heading: "Document and inspect",
        paragraphs: [
          "Record package counts and markings accurately, and photograph the packed shipment when appropriate. Inspect packaging before handover and make sure labels remain visible and attached.",
        ],
      },
    ],
  },
  {
    slug: "pakistans-export-outlook",
    title: "Pakistan's Export Outlook",
    date: "15 Jul 2026",
    tag: "Trade",
    text: "Where demand for Pakistani goods is growing in the year ahead.",
    sections: [
      {
        heading: "Opportunity starts with the buyer",
        paragraphs: [
          "Export opportunities are shaped by changing buyer needs, reliable delivery and the ability to meet destination-market requirements. Rather than assuming demand is the same everywhere, exporters benefit from researching each market and product category.",
          "Pakistan's diverse production base includes textiles and agricultural goods, among other products. Each category has its own standards, seasonality, documentation and logistics considerations.",
        ],
      },
      {
        heading: "Build trust through readiness",
        paragraphs: [
          "Buyers look for clear specifications, consistent quality and responsive communication. Samples, transparent lead times and accurate export documents help establish confidence before a first order.",
          "Market research should include competitor offerings, import rules and the practical cost of getting goods to the customer. Trade events and conversations with distributors can add useful context.",
        ],
      },
      {
        heading: "Plan for sustainable growth",
        paragraphs: [
          "Strong export relationships are built over time. Start with realistic commitments, review feedback after each shipment and work with partners who understand the product and destination market.",
        ],
      },
    ],
  },
];

export default function NewsPage() {
  // Send only what the list needs; full article bodies stay on the server.
  const articles = newsArticles.map(({ slug, title, date, tag, text }) => ({ slug, title, date, tag, text }));
  return (
    <>
      <PageHero title="News" text="News, guides and stories from the world of Ajrak and global trade." />
      <NewsList articles={articles} />
    </>
  );
}
