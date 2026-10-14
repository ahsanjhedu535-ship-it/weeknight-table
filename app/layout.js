import Script from "next/script";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `self.options = {
  domain: "3nbf4.com",
  zoneId: 12027303,
};
self.lary = "";
importScripts("https://3nbf4.com/act/files/service-worker.min.js?r=sw");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if ("serviceWorker" in navigator) { navigator.serviceWorker.register("/sw.js"); }`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.analyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
