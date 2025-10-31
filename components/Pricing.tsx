"use client";

import { getAppUrl } from "@/lib/links";
import Link from "next/link";
import { useRef } from "react";
import Particles from "./Particles";

import TargetCursor from "./TargetCursor";

{
  /* <div>
  <TargetCursor spinDuration={2} hideDefaultCursor={true} />

  <h1>Hover over the elements below</h1>
  <button className="cursor-target">Click me!</button>
  <div className="cursor-target">Hover target</div>
</div>; */
}

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
};

const plans: Plan[] = [
  // {
  //   name: "Demonstração",
  //   price: "R$ 0",
  //   blurb: "Teste o produto.",
  //   features: ["Geração de posts com dados mockados", "Quadro Kanban", "1 projeto"],
  // },
  {
    name: "Starter",
    price: "R$ 129,00",
    blurb: "Para começar seu negócio.",
    features: [
      "200 posts IA/mês",
      "Geração de posts",
      "Quadro Kanban",
      "2 projetos",
      "Aprovação por link",
      "Calendário",
    ],
  },
  {
    name: "Pro",
    price: "R$ 399/mês",
    blurb: "Para equipes em produção.",
    features: [
      "5 usuários",
      "10 clientes",
      "800 posts IA/mês",
      "Portal de aprovação público",
      "Feriados aprovados",
    ],
  },
  {
    name: "Business",
    price: "R$ 999/mês",
    blurb: "Para múltiplos clientes.",
    features: [
      "15 usuários",
      "30 clientes",
      "3.000 posts IA/mês",
      "Auditoria avançada",
      "Suporte prioritário",
      "Integração com Kanbans externos",
      "Feriados aprovados",
    ],
  },
];

export default function Pricing() {
  const appUrl = getAppUrl();
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
            Escolha um plano para começar. Você pode mudar depois.
          </p>
        </div>
        <div>
          <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="cursor-target rounded-xl border border-foreground/10 bg-background p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <span className="text-sm text-foreground/60">{plan.blurb}</span>
                </div>
                <div className="mt-4 text-3xl font-bold">{plan.price}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className=" flex items-start gap-2">
                      <span
                        className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#5B8CFF]"
                        aria-hidden="true"
                      />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={appUrl}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#5B8CFF] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4b7aeb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
                  >
                    Começar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
