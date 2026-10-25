import Link from "next/link";
import { cacheLife } from "next/cache";
import Logo from "@/components/Logo";
import { Facebook, WhatsApp, Linkedin, Twitter, Mail } from "@/components/Icons";

const sitemap = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Products", to: "/products" },
  { label: "News", to: "/news" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

const socialLinks = [
  { label: "Email", icon: Mail, href: "mailto:ajrakimpex@gmail.com" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/Ajrakimpex" },
];

// The year is cached, so the footer stays part of the static shell instead of
// forcing every page to render at request time.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="ajrak-pattern-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 text-sm font-semibold text-white/90">Ajrak Impex International (SMC-Private) Limited</p>
          <p className="mt-1 text-xs text-white/65">Reg. No. K399826 · PP/REG/INC No. 0360593</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Helping young professionals import, invest, and grow in global trade.
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => {
              const className = "flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-navy-800";
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={`Ajrak Impex on ${label}`}
                  className={className}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ) : (
                <span
                  key={label}
                  role="img"
                  aria-label={`${label} link not provided`}
                  title={label}
                  className={className}
                >
                  <Icon className="h-5 w-5" />
                </span>
              );
            })}
          </div>
        </div>

        <div className="text-sm text-white/75">
          <h3 className="font-bold uppercase tracking-widest text-white/90">Contact</h3>
          <p className="mt-4"><strong className="text-white">Head Office:</strong> A-1517, Gulshan-e-Hadeed Phase 2, Bin Qasim Town Road, Karachi</p>
          <p className="mt-3"><strong className="text-white">Branch Office:</strong> Abid Colony, Mirwah Road, Khairpur</p>
          <a href="tel:+923005310821" className="mt-3 block hover:text-white">+92-300-5310821</a>
          <a href="mailto:ajrakimpex@gmail.com" className="mt-1 block hover:text-white">ajrakimpex@gmail.com</a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/75">
            {sitemap.map((item) => (
              <li key={item.label}>
                <Link href={item.to} className="transition-colors hover:text-white hover:underline">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/legal#terms" className="transition-colors hover:text-white hover:underline">Terms</Link></li>
            <li><Link href="/legal#privacy" className="transition-colors hover:text-white hover:underline">Privacy</Link></li>
            <li><Link href="/legal#risk" className="transition-colors hover:text-white hover:underline">Risk Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-maroon-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-3 text-xs text-white/85 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; <CurrentYear /> Ajrak Impex International. All rights reserved.</p>
          <p>Import &bull; Invest &bull; Grow</p>
        </div>
      </div>
    </footer>
  );
}
