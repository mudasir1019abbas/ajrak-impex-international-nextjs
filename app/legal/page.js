import Link from "next/link";
import { PageHero } from "@/components/UI";

export const metadata = {
  title: "Terms, Privacy & Risk Disclaimer",
  description: "Terms and Conditions, Privacy Policy and Risk Disclaimer of Ajrak Impex International.",
};

const terms = [
  ["About us", "This website is operated by Ajrak Impex International (SMC-Private) Limited (\"Ajrak Impex\", \"we\", \"us\"), registered in Pakistan, with its head office in Karachi."],
  ["Our services", "We offer three models: (a) import support, including sourcing, logistics, and customs clearance; (b) product-based investment with profit sharing; and (c) investor or shareholder participation. Details of each are set out in a written agreement signed before any engagement begins."],
  ["Eligibility", "You must be at least 18 years old and legally able to enter a contract."],
  ["Orders and payments", "Prices and availability may change without notice. An order or engagement is confirmed only when we confirm it in writing (including by email or WhatsApp). Payment terms are stated in your quotation or agreement."],
  ["Shipping and customs", "Delivery times are estimates. Delays caused by carriers, customs, or regulatory requirements are outside our control. Duties, taxes, and clearance charges are borne as stated in your agreement."],
  ["Returns and refunds", "Please report damaged or incorrect goods within 7 days of delivery, with photos. Eligible items will be repaired, replaced, or refunded at our discretion, subject to the agreement."],
  ["Investment arrangements", "Nothing on this website is a public offer of securities or a guarantee of returns. Any investment or shareholding is subject to a separate written agreement and applicable law."],
  ["Intellectual property", "All content, logos, and designs on this site belong to Ajrak Impex and may not be copied without written permission."],
  ["Limitation of liability", "To the extent permitted by law, we are not liable for indirect or consequential losses, or for delays and losses caused by events beyond our reasonable control."],
  ["Governing law", "These terms are governed by the laws of Pakistan. Disputes fall under the jurisdiction of the courts of Karachi."],
  ["Changes", "We may update these terms at any time. Continued use of the site means you accept the updated version."],
];

const privacy = [
  ["What we collect", "Your name, phone number, email, city, and any details you share when you contact us, order, or enquire about investing. We may also collect basic website data such as device type and pages visited."],
  ["How we use it", "To respond to enquiries, process orders, arrange shipping and clearance, prepare agreements, improve our website, and, only if you agree, send updates and offers."],
  ["Who we share it with", "Only with those needed to serve you, such as couriers, clearing agents, payment providers, and professional advisers. We do not sell your personal data."],
  ["Security and retention", "We take reasonable steps to protect your information and keep it only as long as needed for business, legal, or tax purposes."],
  ["Your choices", <>You may ask us to access, correct, or delete your information, or to stop marketing messages, by contacting us at <a className="font-semibold text-maroon-700 underline" href="mailto:ajrakimpex@gmail.com">ajrakimpex@gmail.com</a>.</>],
  ["Cookies", "Our website may use cookies to work properly and understand usage. You can disable them in your browser settings."],
];

function PolicySections({ sections }) {
  return (
    <ol className="mt-6 space-y-5">
      {sections.map(([heading, text], index) => (
        <li key={heading}>
          <h3 className="font-bold text-navy-800">{index + 1}. {heading}</h3>
          <p className="mt-1 leading-7 text-slate-600">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Legal() {
  return (
    <>
      <PageHero title="Policies & Disclaimers" text="Please review these terms before using our website or enquiring about our services." />
      <div className="bg-white">
        <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6 sm:py-16">
          <section id="terms" className="scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-navy-800">Terms and Conditions</h2>
            <p className="mt-2 text-sm text-slate-500">Last updated: October 2026</p>
            <PolicySections sections={terms} />
          </section>

          <section id="privacy" className="scroll-mt-24 border-t border-slate-100 pt-10">
            <h2 className="text-2xl font-extrabold text-navy-800">Privacy Policy</h2>
            <PolicySections sections={privacy} />
          </section>

          <section id="risk" className="scroll-mt-24 border-t border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy-800">Risk Disclaimer</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-700">
              <p>
                Importing, trading, and investing involve risk. Product performance depends on market demand, pricing, currency movements,
                shipping conditions, and regulatory changes. Profit is not guaranteed, and you may lose part or all of the amount you invest.
              </p>
              <p>
                Information on this website is for general guidance only and is not financial, legal, or tax advice. Please seek independent
                professional advice and read your written agreement carefully before committing funds. Past performance is not an indicator of future results.
              </p>
            </div>
            <p className="mt-5 text-sm text-slate-600">
              Interested in discussing your options? <Link href="/contact" className="font-semibold text-maroon-700 underline">Contact our team</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
