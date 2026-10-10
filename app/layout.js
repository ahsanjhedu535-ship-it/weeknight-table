import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { publisher } from "@/lib/schema";

export const metadata = {
  title: {
    default: "Quick Dinner Ideas | Easy 30-Minute Recipes",
    template: "%s | Quick Dinners",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Quick Dinner Ideas | Easy 30-Minute Recipes",
    description: site.description,
    type: "website",
    url: site.url,
    locale: "en_US",
    siteName: site.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
        alt: "A grain bowl with egg, avocado, and vegetables on a wooden table",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher,
  };

  return (
    <html lang="en-US">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
