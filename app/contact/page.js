import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/UI";
import { MapPin, Phone, Mail } from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description: "Tell us your goal, product interest, or budget. Our team will help you understand the next step.",
};
const contactInfo = {
  company: "Ajrak Impex International (SMC-Private) Limited",
  registration: "Reg. No. K399826 · PP/REG/INC No. 0360593",
  headOffice: "A-1517, Gulshan-e-Hadeed Phase 2, Bin Qasim Town Road, Karachi",
  branchOffice: "Abid Colony, Mirwah Road, Khairpur",
  phones: ["+92-300-5310821"],
  emails: ["ajrakimpex@gmail.com"],
};

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" text="Tell us your goal, product interest, or budget. Our team will help you understand the next step." />
      <section className="ajrak-pattern py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />

          <Reveal direction="right" className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-8">
              <h2 className="text-xl font-extrabold text-navy-800">{contactInfo.company}</h2>
              <p className="mt-2 text-sm text-slate-500">{contactInfo.registration}</p>
              <h3 className="mt-6 font-bold text-navy-800">Our Offices</h3>
              <ul className="mt-3 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-maroon-700" /><span><strong>Head Office:</strong> {contactInfo.headOffice}</span></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-maroon-700" /><span><strong>Branch Office:</strong> {contactInfo.branchOffice}</span></li>
                {contactInfo.phones.map((phone) => (
                  <li key={phone} className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-maroon-700" /><a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-maroon-700">{phone}</a></li>
                ))}
                {contactInfo.emails.map((email) => (
                  <li key={email} className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-maroon-700" /><a href={`mailto:${email}`} className="break-all hover:text-maroon-700">{email}</a></li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://wa.me/923005310821" target="_blank" rel="noreferrer" className="rounded-md bg-maroon-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-maroon-800">Chat on WhatsApp</a>
                <a href="https://www.facebook.com/Ajrakimpex" target="_blank" rel="noreferrer" className="rounded-md border border-maroon-700 px-4 py-2 text-sm font-semibold text-maroon-700 transition hover:bg-maroon-50">Facebook</a>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="font-bold text-navy-800">Careers</h3>
              <p className="mt-2 text-sm text-slate-600">Interested in working with us? Send your introduction and CV by email.</p>
              <a href="mailto:ajrakimpex@gmail.com?subject=Career%20enquiry" className="mt-3 inline-block text-sm font-semibold text-maroon-700 underline">Email us about careers</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
