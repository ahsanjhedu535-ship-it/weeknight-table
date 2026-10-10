import { site } from "@/lib/site";

export function pageUrl(path = "/") {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const publisher = {
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.contactEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer support",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: site.privacyEmail,
      contactType: "privacy",
      availableLanguage: "English",
    },
  ],
  logo: {
    "@type": "ImageObject",
    url: pageUrl("/logo.svg"),
    width: 112,
    height: 112,
  },
};

export function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
