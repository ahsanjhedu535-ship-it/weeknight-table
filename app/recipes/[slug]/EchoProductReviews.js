"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const SCRIPT_SRC = "https://echo-stream-5nch.vercel.app/widget/echo-widget.js";

export default function EchoProductReviews({ productHandle, productTitle }) {
  const ref = useRef(null);

  const mount = () => {
    if (ref.current) window.EchoStream?.mount(ref.current);
  };

  useEffect(() => {
    mount();
    return () => {
      if (ref.current) window.EchoStream?.unmount(ref.current);
    };
  }, [productHandle, productTitle]);

  return (
    <>
      <Script src={SCRIPT_SRC} strategy="afterInteractive" onLoad={mount} />
      <div
        ref={ref}
        className="echo-reviews-widget"
        data-echo-widget=""
        data-api-key="0e012c8fc346d1fa87008acf1dd6ebf1"
        data-product-handle={productHandle}
        data-product-title={productTitle}
      />
    </>
  );
}
