"use client";

import { useEffect } from "react";
import Script from "next/script";

const ads = [
  {
    id: "ad-tag-12029332",
    code: `(function(s){s.dataset.zone='12029332',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
  },
];

export default function AdScripts() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        const worker = registration.active || registration.installing || registration.waiting;
        if (worker?.scriptURL.endsWith("/sw.js")) registration.unregister();
      });
    });
  }, []);

  return (
    <>
      {ads.map((ad) => (
        <Script id={ad.id} key={ad.id} strategy="lazyOnload">
          {ad.code}
        </Script>
      ))}
    </>
  );
}
