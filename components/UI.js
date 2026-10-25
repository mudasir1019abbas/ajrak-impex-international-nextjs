import Link from "next/link";
import Reveal from "@/components/Reveal";

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <Reveal className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.3em] text-maroon-700">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-extrabold text-navy-800 sm:text-3xl">{title}</h2>
      <span className={`mt-3 block h-1 w-14 rounded bg-maroon-700 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && <p className={`mt-4 max-w-2xl text-slate-600 ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
    </Reveal>
  );
}

const variants = {
  primary: "bg-maroon-700 text-white hover:bg-maroon-800",
  navy: "bg-navy-800 text-white hover:bg-navy-900",
  outline: "border border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:border-maroon-700",
  light: "bg-white text-navy-800 hover:bg-slate-100",
};
const btn =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({ href, variant = "primary", className = "", children, ...rest }) {
  const cls = `${btn} ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}

export function Field({ label, id, error, className = "", children, ...props }) {
  const input =
    "w-full rounded-md border bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 " +
    (error ? "border-red-500" : "border-slate-300");
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
      {children ? (
        children(input)
      ) : (
        <input id={id} className={input} aria-invalid={!!error} {...props} />
      )}
      {error && <p className="mt-1 animate-fade-in text-xs text-red-600">{error}</p>}
    </div>
  );
}

export function PageHero({ title, text }) {
  return (
    <section className="ajrak-pattern border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <h1 className="animate-fade-up text-3xl font-extrabold text-navy-800 sm:text-4xl">{title}</h1>
        <span className="mx-auto mt-3 block h-1 w-16 animate-fade-in rounded bg-maroon-700" />
        {text && <p className="mx-auto mt-4 max-w-2xl animate-fade-up text-slate-600 [animation-delay:150ms]">{text}</p>}
      </div>
    </section>
  );
}
