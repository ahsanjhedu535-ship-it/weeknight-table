import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

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
  },
};

export default function RootLayout({ children }) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
    },
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
