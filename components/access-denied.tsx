"use client";

export default function AccessDenied({ url = "" }: { url?: string }) {
  const src = url.includes("/almost") ? "/whitepage-almost" : "/whitepage";

  return (
    <iframe
      src={src}
      className="w-full h-screen border-none"
      title="SmartWork AI"
    />
  );
};