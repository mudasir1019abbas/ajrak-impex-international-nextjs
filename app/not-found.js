import { Button } from "@/components/UI";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="ajrak-pattern flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="animate-float text-7xl font-extrabold text-maroon-700">404</p>
      <h1 className="mt-3 animate-fade-up text-2xl font-bold text-navy-800">Page not found</h1>
      <p className="mt-2 animate-fade-up text-slate-600 [animation-delay:150ms]">The page you are looking for does not exist.</p>
      <Button href="/" className="mt-6">Back to Home</Button>
    </section>
  );
}
