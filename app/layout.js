import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const description =
  "A Karachi-based import-export company helping young professionals start, invest, and grow in global trade. No experience needed.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajrak Impex International | Import, Invest & Grow with Global Trade",
    template: "%s | Ajrak Impex International",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Ajrak Impex International",
    title: "Ajrak Impex International | Import, Invest & Grow with Global Trade",
    description,
    images: [{ url: "/images/shipping-containers.jpg", alt: "Shipping containers" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
