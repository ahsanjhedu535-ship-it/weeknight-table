import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { publisher } from "@/lib/schema";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const defaultTitle =
  "Quick Dinner Ideas: 30-Minute Meals, Soups & Vegetarian Recipes";

export const metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Quick Dinners",
  },
  description: site.description,
  keywords: [
    "quick dinner ideas",
    "easy 30 minute dinner recipes",
    "quick soup recipes",
    "quick vegetarian meals",
    "creamy chicken orzo",
  ],
  metadataBase: new URL(site.url),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: defaultTitle,
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
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
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
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...publisher,
    sameAs: [],
  };

  return (
    <html lang="en-US" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
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
