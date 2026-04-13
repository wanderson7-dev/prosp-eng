"use client";

import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

export default function AccessDenied({ url = "" }: { url?: string }) {
  const src = url.includes("/almost") ? "/whitepage-almost" : "/whitepage";
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