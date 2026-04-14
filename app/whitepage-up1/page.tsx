"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { Lock } from "lucide-react";

export default function WhitepageUp1() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    
    // 1. Renderizamos o elemento customizado apenas no client-side para evitar conflito com o Next.js Hydration
    videoRef.current.innerHTML = '<vturb-smartplayer id="vid-69c1b31b423ef7939cad3fe2" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>';
    
    // 2. Injetamos o script do Vturb na página logo após o elemento existir
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69c1b31b423ef7939cad3fe2/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    // Evita recarregar se o React renderizar duas vezes (strict mode)
    return () => {};
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-red-hat-display)] bg-white text-slate-800">
      
      {/* Top Banner */}
      <div className="w-full bg-[#E88E53] text-white py-4 px-4 shadow-sm flex flex-col items-center text-center">
        <h1 className="flex items-center justify-center gap-2 text-lg sm:text-xl font-extrabold tracking-wide mb-1">
          <Lock size={18} className="text-yellow-100" />
          Divine Confirmation Required Before Access
        </h1>
        <p className="text-base sm:text-lg font-medium opacity-90">
          Final step&mdash;please stay with me...
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center w-full max-w-lg mx-auto px-6 pt-10 pb-16 space-y-8 text-center">
        
        {/* Intro Text */}
        <div className="space-y-3">
          <p className="text-[17px] sm:text-lg font-normal text-slate-700">
            You're almost there. One final message 💭
          </p>
          <p className="text-[17px] sm:text-lg font-normal text-slate-700">
            <span className="font-extrabold text-slate-900">Watch now</span>&mdash; your next divine step depends on it.
          </p>
        </div>

        {/* Video Player */}
        <div className="w-full bg-slate-50 p-0 sm:p-2 rounded-xl shadow-none sm:shadow-lg min-h-[250px]">
          <div ref={videoRef} className="w-full h-full" />
        </div>

        {/* Call to Actions */}
        <div className="w-full flex flex-col space-y-3 pt-6">
          {/* Main Button */}
          <a href="https://www.checkout-ds24.com/answer/yes?template=light" className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold py-5 rounded-md shadow-lg text-sm sm:text-base tracking-wide uppercase transition-all active:scale-[0.98]">
            I WANT TO ACCESS MY PRAYER NOW!
          </a>
          
          {/* Decline Link */}
          <a href="https://www.checkout-ds24.com/answer/no" className="text-sm font-medium text-slate-500 hover:text-slate-700 mt-2">
            I don't
          </a>
        </div>

      </div>

      <Script src="https://www.digistore24-scripts.com/service/digistore.js" strategy="afterInteractive" />
      <Script id="digistore-upsell" strategy="afterInteractive">
        {`digistoreUpsell()`}
      </Script>

    </div>
  );
}
