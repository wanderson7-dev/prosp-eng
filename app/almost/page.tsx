"use client";

import Script from "next/script";
import { BadgeCheck } from "lucide-react";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(0,158,24,0.3); }
            50%       { transform: scale(1.03); box-shadow: 0 0 25px rgba(0,158,24,0.6); }
          }
          .pulse { animation: pulse-scale 1.5s ease-in-out infinite; }
        `
      }} />

      <div style={{
        fontFamily: "'Red Hat Display', sans-serif",
        backgroundColor: "#020617",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        color: "white",
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "22rem", width: "100%", gap: "32px" }}>

          <BadgeCheck color="white" fill="#00D120" size={110} strokeWidth={1.5} />

          <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#00D120", textTransform: "uppercase", lineHeight: 1.3 }}>
            Congratulations,<br />Purchase Approved!
          </h1>

          <p style={{ fontSize: "17px", fontWeight: 500, color: "#f9fafb", lineHeight: 1.5 }}>
            Tap the button below and<br />access your product!
          </p>

          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <a
              href="https://www.checkout-ds24.com/answer/yes"
              className="pulse"
              style={{
                display: "block",
                textAlign: "center",
                width: "100%",
                backgroundColor: "#009E18",
                color: "white",
                fontWeight: 700,
                padding: "16px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "18px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Access Product
            </a>
            <a
              href="https://www.checkout-ds24.com/answer/no"
              style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              No thanks, I don't want to access the product right now.
            </a>
          </div>

        </div>
      </div>

      <Script
        src="https://www.digistore24-scripts.com/service/digistore.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as any).digistoreUpsell === "function") {
            (window as any).digistoreUpsell();
          }
        }}
      />
    </>
  );
}
