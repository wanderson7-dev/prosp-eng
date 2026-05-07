"use client";

import { BadgeCheck } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.digistore24-scripts.com/service/digistore.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] px-6 py-12 text-center text-white font-[family-name:var(--font-red-hat-display),sans-serif]">
      <div className="flex flex-col items-center max-w-[22rem] w-full gap-8">

        <div className="flex justify-center mb-2">
          <BadgeCheck color="white" fill="#00D120" size={110} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] md:text-3xl font-extrabold text-[#00D120] uppercase leading-snug">
            Congratulations,<br />Purchase Approved!
          </h1>
        </div>

        <p className="text-[17px] md:text-lg font-medium text-gray-50 mb-2 leading-snug">
          Tap the button below and<br />access your product!
        </p>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 158, 24, 0.3); }
            50% { transform: scale(1.03); box-shadow: 0 0 25px rgba(0, 158, 24, 0.6); }
          }
          .animate-pulse-scale {
            animation: pulse-scale 1.5s ease-in-out infinite;
          }
        `}} />

        <div className="w-full flex flex-col items-center gap-2">
          <a
            id="accept-button"
            href="https://www.checkout-ds24.com/answer/yes"
            className="animate-pulse-scale block text-center w-full bg-[#009E18] hover:bg-[#008A15] text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-95 uppercase text-lg tracking-wide"
          >
            Access Product
          </a>
          <a
            href="https://www.checkout-ds24.com/answer/no"
            className="text-gray-400 hover:text-gray-300 transition-colors underline underline-offset-4 text-sm"
          >
            No thanks, I don't want to access the product right now.
          </a>
        </div>


      </div>
    </div>
  );
}
