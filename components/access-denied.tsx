"use client";

import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

export default function AccessDenied({ url = "" }: { url?: string }) {
  let src = "/whitepage";
  if (url.includes("/almost")) {
    src = "/whitepage-almost";
  } else if (url.includes("/up2")) {
    src = "/whitepage-up2";
  } else if (url.includes("/up1")) {
    src = "/whitepage-up1";
  }
  
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.capture('user_blocked', { url: url });
    }
  }, [posthog, url]);

  return (
    <iframe
      src={src}
      className="w-full h-screen border-none"
      title="SmartWork AI"
    />
  );
};