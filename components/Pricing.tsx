"use client";

import { plans } from "@/data/pricing";
import { getAppUrl, getTryUrl } from "@/lib/links";
import Link from "next/link";
import { useRef } from "react";
import Particles from "./Particles";
import TargetCursor from "./TargetCursor";

interface PricingProps {
  showComparisonButton?: boolean;
}

export default function Pricing({ showComparisonButton = false }: PricingProps) {
  const appUrl = getAppUrl();
  const tryUrl = getTryUrl();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="precos" className="py-20 sm:py-24 background-animation-content">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.09}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} containerRef={sectionRef} />
      <div className="content-centered-absolute mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Preços</h2>
          <p className="mt-3 text-foreground/70">
            Escolha um plano para começar. Você pode mudar ou cancelar quando quiser.
          </p>
        </div>
        <div>
          <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const ctaUrl = plan.id === "starter" ? tryUrl : plan.id === "agency" ? "#" : appUrl;
              return (
                <div
                  key={plan.id}
                  className={`cursor-target rounded-xl border border-foreground/10 p-6 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#5B8CFF]/20 hover:border-[#5B8CFF]/30 ${
                    plan.highlighted ? "bg-foreground/5" : "bg-background"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-[#5B8CFF] rounded-full shadow-sm">
                      Recomendado
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="mt-4 text-3xl font-bold">{plan.price}</div>
                    <ul className="mt-6 space-y-2 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#5B8CFF] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={ctaUrl}
                      className="inline-flex w-full items-center justify-center rounded-md bg-[#5B8CFF] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4b7aeb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {showComparisonButton && (
            <div className="mt-12 flex justify-center ">
              <Link
                href="/planos"
                className="cursor-target group relative inline-flex items-center justify-center rounded-xl border-2 border-[#5B8CFF]/30 bg-background/80 backdrop-blur-sm px-8 py-3 text-base font-semibold text-[#5B8CFF] shadow-md shadow-[#5B8CFF]/5 transition-all duration-300 hover:border-[#5B8CFF] hover:bg-[#5B8CFF]/10 hover:shadow-lg hover:shadow-[#5B8CFF]/20 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] focus-visible:ring-offset-2 pointer-events-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Veja todos os planos
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5B8CFF]/5 via-[#5B8CFF]/10 to-[#5B8CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
