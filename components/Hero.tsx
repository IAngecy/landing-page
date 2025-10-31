"use client";

import { getHelpUrl, getTryUrl } from "@/lib/links";
import Link from "next/link";
import SplitText from "./SplitText";

import Dither from "./Dither";

export default function Hero() {
  const tryUrl = getTryUrl();
  const helpUrl = getHelpUrl();
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="background-animation-content">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-black/10 z-10s pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SplitText
            text="Calendários e aprovações de social com IA (do jeito que a agência trabalha)."
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight"
            delay={150}
            duration={1.2}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            tag="h1"
          />
          <p className="mt-5 text-lg">
            Gere cronogramas claros, organize em Kanban e colete aprovações do cliente por link
            público.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={tryUrl}
              className="btn-primary group relative inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#090580]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#090580] focus-visible:ring-offset-2 overflow-hidden pointer-events-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Experimentar agora</span>
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#090580] via-[#1a0da3] to-[#090580] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href={helpUrl}
              className="btn-secondary group relative inline-flex items-center justify-center rounded-xl border-2 border-foreground/20 bg-background/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground shadow-md shadow-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] focus-visible:ring-offset-2 pointer-events-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver como funciona
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5B8CFF]/10 via-[#4b7aeb]/10 to-[#5B8CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </div>
      {/* <ColorBendsBackground /> */}
    </section>
  );
}
