"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function WhitepageUp2() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  useEffect(() => {
    if (!videoRef.current) return;
    
    videoRef.current.innerHTML = '<vturb-smartplayer id="vid-69c1b30c137969468e7f9fd8" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>';
    
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69c1b30c137969468e7f9fd8/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {};
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-red-hat-display)] bg-white text-slate-800">
      
      {/* Top Banner */}
      <div className="w-full bg-[#E5884F] text-white py-4 px-4 shadow-sm flex flex-col items-center text-center">
        <h1 className="text-lg sm:text-xl font-bold tracking-wide">
          <span className="text-yellow-300">⚠️</span> Attention: Your blessings and miracles remain vulnerable without this Final Step.
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center w-full max-w-lg mx-auto px-6 pt-8 pb-16 space-y-6 text-center">
        
        {/* Headlines */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
          Your Blessings And Miracles Have Begun &mdash; Now You Must Protect Them
        </h2>

        {/* Intro Text */}
        <div className="space-y-1">
          <p className="text-[17px] sm:text-lg font-normal text-slate-700">
            Darkness Reacts to Light.
          </p>
          <p className="text-[17px] sm:text-lg font-normal text-slate-700">
            This is your <span className="font-extrabold text-slate-900">Most Critical Step.</span>
          </p>
        </div>

        <p className="text-base sm:text-lg font-bold italic">
          🎥 &gt;&gt; Watch this short message 👇 &lt;&lt;
        </p>

        {/* Video Player */}
        <div className="w-full bg-slate-50 p-2 rounded-xl shadow-sm border border-slate-100 min-h-[250px]">
          <div ref={videoRef} className="w-full h-full" />
        </div>

        {/* Call to Actions */}
        <div className="w-full flex flex-col space-y-3 pt-4">
          {/* Main Button */}
          <a href="https://www.checkout-ds24.com/answer/yes?template=light" className="w-full bg-[#34c724] hover:bg-[#2da81f] text-white font-extrabold py-5 rounded-md shadow-[0_4px_0_#2b992b] text-[15px] sm:text-base tracking-wide uppercase transition-all active:translate-y-1 active:shadow-none">
            CONTINUE WITH ACCESS TO MY PRAYER!
          </a>
          
          {/* Decline Link */}
          <a href="https://www.checkout-ds24.com/answer/no" className="text-sm font-medium text-slate-500 hover:text-slate-700 mt-2">
            I don't
          </a>
        </div>

      </div>

      <Script src="https://www.digistore24-scripts.com/service/digistore.js" strategy="afterInteractive" />
    </div>
  );
}
