"use client";

import Script from "next/script";
import { CheckCircle2, Star, MessageCircle, Heart, Shield } from "lucide-react";

export default function WhitepageAlmost() {

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-4 px-6 sticky top-0 z-50 flex justify-center">
        <div className="flex items-center gap-2">
          <Heart className="text-rose-500" fill="currentColor" size={24} />
          <span className="font-bold text-xl tracking-tight text-gray-800">Faith & Hope Daily</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        
        {/* Badge */}
        <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 flex items-center gap-2 shadow-sm">
          <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
          Exclusive Offer For You
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
          Keep Your Faith Strong With <span className="text-blue-600 block sm:inline">Daily Inspiration</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10 leading-relaxed">
          Join our exclusive private group and receive beautiful daily messages of faith, motivation, and spiritual guidance directly to your phone.
        </p>

        {/* Features / Benefits Box */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full mb-10 transform transition-all hover:scale-[1.01]">
          <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-4">
            <MessageCircle className="text-blue-500" />
            What You'll Receive:
          </h2>
          
          <ul className="space-y-4">
            {[
              "Daily uplifting prayers and quotes right when you wake up",
              "Access to a supportive, private spiritual community",
              "Exclusive weekly devotionals and deep reflections",
              "Motivational messages to help you overcome life's challenges",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing area */}
        <div className="text-center mb-10 w-full">
          <div className="inline-flex flex-col items-center bg-blue-600 text-white rounded-3xl p-8 shadow-lg shadow-blue-200 w-full sm:w-auto">
            <p className="font-semibold text-blue-100 uppercase tracking-widest text-sm mb-2">Special Membership</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold">$</span>
              <span className="text-6xl font-black">14.99</span>
              <span className="text-xl font-medium text-blue-200">/mo</span>
            </div>
            <p className="text-blue-100 mt-4 text-sm font-medium">Cancel anytime, no questions asked.</p>
          </div>
        </div>

        {/* Call To Action Buttons */}
        <div className="w-full max-w-md flex flex-col gap-4">
          
          <a
            id="accept-button"
            href="https://www.checkout-ds24.com/answer/yes"
            className="group relative flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Yes, Add To My Order!
          </a>

          <a 
            href="https://www.checkout-ds24.com/answer/no" 
            className="text-gray-400 hover:text-gray-600 text-center py-3 font-medium underline underline-offset-4 transition-colors text-sm"
          >
            No thanks, I will pass on this opportunity.
          </a>
          
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-2 mt-10 text-gray-400">
          <Shield size={16} />
          <span className="text-xs font-semibold uppercase tracking-wider">Secure 256-bit Encryption</span>
        </div>

        {/* Pulse & Shimmer Animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}} />

        {/* Digistore Scripts */}
        <Script 
          src="https://www.digistore24-scripts.com/service/digistore.js" 
          strategy="afterInteractive" 
          onLoad={() => {
            // @ts-expect-error Digistore is added to window by the script
            if (typeof window !== 'undefined' && window.digistoreUpsell) {
              // @ts-expect-error
              window.digistoreUpsell();
            }
          }}
        />
      </main>

    </div>
  );
}
