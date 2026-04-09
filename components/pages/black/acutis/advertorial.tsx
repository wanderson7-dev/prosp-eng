"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, Search, ThumbsUp, ThumbsDown, SmilePlus } from "lucide-react";
import Script from "next/script";
import { scheduledMessages, ChatMsg } from "./chatMessages";

export default function Advertorial() {
  const [viewerCount, setViewerCount] = useState(55096);
  const [visibleMessages, setVisibleMessages] = useState<ChatMsg[]>([]);
  const [userInput, setUserInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
  const sentSetRef = useRef<Set<number>>(new Set());
  const vslTimeRef = useRef(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoContainerRef.current && !videoContainerRef.current.hasChildNodes()) {
      videoContainerRef.current.innerHTML = '<vturb-smartplayer id="vid-69d7f17faaedd2c4c0ccba54" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></vturb-smartplayer>';
    }
  }, []);


  // Viewer counter fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => prev + Math.floor(Math.random() * 11) - 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // NEW PACING LOGIC
  useEffect(() => {
    const MIN_GAP_MS = 650;
    const MAX_GAP_MS = 9000;
    const JITTER_PCT = 0.28;
    const BURST_CHANCE = 0.14;
    const PAUSE_CHANCE = 0.10;

    let started = false;
    let idx = 0;
    let nextAt = 0;
    let startAt = 0;
    let rafId = 0;

    function nextIntervalMs(elapsedSec: number, progress: number) {
      const midBoost = Math.sin(Math.PI * progress);
      let base = (1 - midBoost) * 3800 + (midBoost) * 1600;
      base *= (1 + Math.sin(elapsedSec / 14) * 0.16 + Math.sin(elapsedSec / 41) * 0.10);
      const jitter = 1 + ((Math.random() * 2 - 1) * JITTER_PCT);
      base *= jitter;
      if (Math.random() < PAUSE_CHANCE) {
        base += 900 + Math.random() * 1800; // +0.9s to +2.7s
      }
      return Math.max(MIN_GAP_MS, Math.min(MAX_GAP_MS, Math.round(base)));
    }

    function loop(ts: number) {
      if (!started) return;
      const elapsedSec = (ts - startAt) / 1000;
      const progress = scheduledMessages.length <= 1 ? 1 : idx / (scheduledMessages.length - 1);

      if (ts >= nextAt && idx < scheduledMessages.length) {

        let msgsToAdd = [scheduledMessages[idx]];
        idx++;

        const burst = (Math.random() < BURST_CHANCE && idx < scheduledMessages.length);
        if (burst) {
          const burstGap = Math.max(MIN_GAP_MS, 520 + Math.random() * 520);
          nextAt = ts + burstGap;
        } else {
          nextAt = ts + nextIntervalMs(elapsedSec, progress);
        }

        setVisibleMessages((prev) => [...prev, ...msgsToAdd]);
      }

      if (idx < scheduledMessages.length) {
        rafId = requestAnimationFrame(loop);
      }
    }

    function start() {
      if (started) return;
      started = true;
      const now = performance.now();
      startAt = now;
      nextAt = now + (400 + Math.random() * 1400); // 0.9s-2.3s
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("pointerdown", start, { once: true, passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointerdown", start);
    };
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const handleSend = useCallback(() => {
    if (userInput.trim()) {
      const userMsg: ChatMsg = {
        user: "You",
        text: userInput.trim(),
        avatar: "https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/icone_usuario.webp",
      };
      setVisibleMessages((prev) => [...prev, userMsg]);
      setUserInput("");
    }
  }, [userInput]);

  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const formattedDate = now.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f0f0f]" style={{ fontFamily: "'Roboto', sans-serif" }}>

      {/* YouTube Header */}
      <header className="bg-white sticky top-0 z-50 px-3 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-[#606060] cursor-pointer" />
          <div className="flex items-center gap-0.5 cursor-pointer">
            <div className="relative w-[29px] h-[20px] bg-[#FF0000] rounded-[4px] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white ml-[1px]"></div>
            </div>
            <span className="text-[18px] font-bold tracking-tighter text-[#282828] ml-[2px]" style={{ fontFamily: "'Roboto', sans-serif" }}>YouTube</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-[#606060] cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center cursor-pointer">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto">

        {/* Video Player */}
        <section className="w-full relative flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[400px] aspect-[3/4] relative">
            <div id="player-wrapper" className="absolute top-0 left-0 w-full h-full" ref={videoContainerRef}>
            </div>
          </div>
          <Script
            src="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/69d7f17faaedd2c4c0ccba54/v4/player.js"
            strategy="afterInteractive"
            onLoad={() => {
              const el = document.querySelector("vturb-smartplayer");
              if (el) {
                el.addEventListener("player:ready", function () {
                  (el as any).displayHiddenElements(2089, [".esconder"], { persist: true });
                });
              }
            }}
          />
        </section>

        {/* Global styles */}
        <style jsx global>{`
          .esconder { display: none; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>


        <div className="px-3 sm:px-4 pt-3 pb-6">

          {/* CTA Button */}
          <div className="w-full my-5 esconder">
            <a
              href="https://www.checkout-ds24.com/product/667753?src=vsl3"
              className="block w-full text-center bg-[#E8740C] hover:bg-[#D4680A] text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full transition-all shadow-lg animate-pulse"
            >
              I WANT ACCESS TO THE PRAYER
            </a>
          </div>

          {/* Video Title */}
          <h1 suppressHydrationWarning className="text-[15px] sm:text-[17px] leading-snug text-[#0f0f0f] mb-2 font-bold">
            <b>CENSORED BY THE VATICAN:</b> The prayer of Carlo Acutis that opens your heart to God… | Live at {formattedTime}, {formattedDate}.
          </h1>

          {/* Live Chat Section */}
          <section className="border border-gray-200 rounded-xl overflow-hidden mt-4 mb-4">
            <div className="bg-[#f2f2f2] px-4 py-2.5 text-[13px] font-medium text-[#606060] border-b border-gray-200">
              Live chat
            </div>

            <div ref={chatRef} className="bg-white max-h-[350px] overflow-y-auto scroll-smooth">
              {visibleMessages.length === 0 ? (
                <div className="flex items-center justify-center h-32 text-sm text-gray-400">
                  Chat will appear when the video starts...
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {visibleMessages.map((msg, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3 animate-[fadeIn_0.3s_ease-in]">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                        <img src={msg.avatar} alt={msg.user} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[13px]">
                          <span className="font-bold text-[#606060] mr-2">{msg.user}</span>
                          <span className="text-[#0f0f0f]">{msg.text}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
              <input
                type="text"
                placeholder="Chat..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                className="flex-1 bg-transparent text-sm text-[#606060] outline-none placeholder-[#aaa]"
              />
              <SmilePlus className="w-6 h-6 text-[#909090] cursor-pointer flex-shrink-0" />
            </div>
          </section>

          {/* Viewers Count */}
          <div className="text-[13px] text-[#606060] mb-4">
            {viewerCount.toLocaleString("en-US")} watching now
          </div>

          {/* Channel Info + Subscribe */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img src="/logos/abc.png" alt="Channel" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f0f0f]">ABC News</p>
                <p className="text-[12px] text-[#606060]">98.3K subscribers</p>
              </div>
            </div>
            <button className="bg-[#0f0f0f] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#272727] transition-colors">
              Subscribe
            </button>
          </div>

          {/* Like / Dislike */}
          <div className="flex items-center gap-1 mb-6">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2f2f2] hover:bg-[#e5e5e5] rounded-l-full transition-colors">
              <ThumbsUp className="w-5 h-5 text-[#0f0f0f]" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2f2f2] hover:bg-[#e5e5e5] rounded-r-full transition-colors border-l border-gray-300">
              <ThumbsDown className="w-5 h-5 text-[#0f0f0f]" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
