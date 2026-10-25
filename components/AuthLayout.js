import { Emblem } from "@/components/Logo";
import { shippingContainers } from "@/data/images";

// Split-screen layout shared by Login and Signup.
export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
      <div className="ajrak-pattern-dark relative hidden items-center justify-center overflow-hidden lg:flex">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${shippingContainers.src})` }}
        />
        <div className="relative z-10 max-w-sm animate-fade-up px-8 text-center text-white">
          <Emblem className="mx-auto h-24 w-24 animate-float" />
          <h2 className="mt-6 text-3xl font-extrabold">Your Trade Journey Starts Here.</h2>
          <p className="mt-3 text-white/75">Start learning about global trade with a team ready to guide you through the next step.</p>
        </div>
      </div>

      <div className="ajrak-pattern flex items-center justify-center px-4 py-10 sm:px-8">
        <div className="w-full max-w-md animate-fade-up rounded-xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8">
          <div className="mb-6 text-center">
            <Emblem className="mx-auto h-12 w-12 lg:hidden" />
            <h1 className="mt-2 text-2xl font-extrabold text-navy-800">{title}</h1>
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          </div>
          {children}
          <div className="mt-6 text-center text-sm text-slate-600">{footer}</div>
        </div>
      </div>
    </section>
  );
}
