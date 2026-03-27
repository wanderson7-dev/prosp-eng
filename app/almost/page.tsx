"use client";

import { BadgeCheck } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] px-6 py-12 text-center text-white font-[family-name:var(--font-red-hat-display),sans-serif]">
      <div className="flex flex-col items-center max-w-[22rem] w-full gap-8">
        
        {/* Icon */}
        <div className="flex justify-center mb-2">
          {/* Custom SVG icon for more exact match if desired, but BadgeCheck is nice */}
          <BadgeCheck color="white" fill="#00D120" size={110} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] md:text-3xl font-extrabold text-[#00D120] uppercase leading-snug">
            Congratulations,<br />Purchase Approved!
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-[17px] md:text-lg font-medium text-gray-50 mb-2 leading-snug">
          Tap the button below and<br />access your product!
        </p>

        {/* Pulse Style */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 158, 24, 0.3); }
            50% { transform: scale(1.03); box-shadow: 0 0 25px rgba(0, 158, 24, 0.6); }
          }
          .animate-pulse-scale {
            animation: pulse-scale 1.5s ease-in-out infinite;
          }
        `}} />

        {/* Action Buttons */}
        <a 
          id="accept-button"
          href="https://www.checkout-ds24.com/answer/yes?template=light"
          className="animate-pulse-scale block text-center w-full bg-[#009E18] hover:bg-[#008A15] text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-95 uppercase text-lg tracking-wide"
        >
          Access Product
        </a>

        {/* Hidden Deny Button */}
        <a href="https://www.checkout-ds24.com/answer/no" className="hidden">
          No
        </a>

        {/* Digistore Scripts */}
        <script src="https://www.digistore24-scripts.com/service/digistore.js" async></script>
        <script dangerouslySetInnerHTML={{ __html: `digistoreUpsell();` }}></script>

      </div>
    </div>
  );
}