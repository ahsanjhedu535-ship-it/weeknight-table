"use client";

import { useEffect } from "react";
import Script from "next/script";

const ads = [
  {
    id: "ad-tag-12029332",
    code: `(function(s){s.dataset.zone='12029332',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
  },
  {
    id: "ad-vignette-12029398",
    code: `(function(s){s.dataset.zone='12029398',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
  },
];

export default function AdScripts() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);

  return (
    <>
      {ads.map((ad) => (
        <Script id={ad.id} key={ad.id} strategy="lazyOnload">
          {ad.code}
        </Script>
      ))}
      <Script
        id="ad-onclick-295470"
        src="https://quge5.com/88/tag.min.js"
        strategy="afterInteractive"
        data-zone="295470"
        data-cfasync="false"
      />
    </>
  );
}
