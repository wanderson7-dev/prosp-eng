"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function Up1Page() {

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof (window as any).digistoreUpsell === "function") {
        (window as any).digistoreUpsell();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-red-hat-display)] bg-slate-50">

      {/* Top Warning Banner */}
      <div className="bg-[#D92828] text-white p-3 flex flex-col items-center text-center shadow-md z-10 w-full">
        <p className="font-bold text-sm sm:text-base tracking-wide md:text-lg px-2">
          This could interrupt the processing of your order.<br />
          Keep scrolling down! 👇
        </p>
      </div>

      {/* Main Container with Background */}
      <div
        className="flex-1 flex flex-col items-center w-full relative pb-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/backgrounds/new_sky.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-6 pt-10 text-center space-y-8">

          <div className="space-y-4">
            <h1 className="text-[#22c55e] text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tight drop-shadow-sm">
              This is your only opportunity
            </h1>
            <p className="text-slate-800 text-lg sm:text-xl font-medium">
              To break forever the chains of <span className="font-black">scarcity and pain!</span>
            </p>
          </div>

          <div className="space-y-6 text-slate-800 text-[17px] leading-relaxed max-w-[420px]">
            <p>
              The Divine Frequency that awaits you here <span className="bg-[#facc15] font-semibold px-2 py-0.5 rounded-sm">will not be offered again</span>,
              and whoever lets it pass chooses to remain tied to a life of struggle.
            </p>
            <p>
              Click on <span className="text-[#15803d] font-bold">"I WANT THIS MIRACLE"</span> and allow the
              miracle to transform your destiny.
            </p>
          </div>

          <div className="w-full flex flex-col space-y-4 pt-2">

          <a
            id="accept-button"
            href="https://www.checkout-ds24.com/answer/yes?template=light"
            className="w-full text-center bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold py-5 rounded-lg shadow-lg text-xl tracking-wide uppercase transition-all active:scale-[0.98]"
            >
            I WANT THIS MIRACLE
          </a>

          <a
            href="https://www.checkout-ds24.com/answer/no"
            className="w-full text-center bg-[#e5e7eb] hover:bg-[#d1d5db] text-gray-400 hover:text-gray-500 font-medium py-3 rounded-lg text-sm transition-all active:scale-[0.98]"
            >
          No thanks, I decline this opportunity.
        </a>
      </div>

      <div className="w-full flex flex-col space-y-3 pt-6 pb-4">
        <div className="flex items-center justify-center space-x-2 text-sm sm:text-[15px]">
          <div className="bg-[#dc2626] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Live
          </div>
          <span className="font-extrabold text-slate-800">
            <span className="text-[#ca8a04]">⚠️</span> Spots are running out &mdash; only <span className="text-[#dc2626]">5</span> access(es) left today!
          </span>
        </div>

        <div className="w-full">
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600" style={{ width: "90%" }} />
          </div>
          <div className="flex justify-between mt-2 text-xs font-bold px-1">
            <span className="text-[#dc2626]">45 taken</span>
            <span className="text-[#16a34a]">5 remaining</span>
          </div>
        </div>
      </div>

    </div>
      </div >

      <div className="bg-[#1f1f1f] text-gray-400 py-8 flex flex-col items-center justify-center text-sm w-full">
        <p>Copyright 2026 &ndash; Divine Script &reg;</p>
        <p>All rights reserved</p>
      </div>

      <Script
        src="https://www.digistore24-scripts.com/service/digistore.js"
        strategy="afterInteractive"
      />
    </div >
  );
}