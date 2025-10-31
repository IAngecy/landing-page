"use client";

import { memo, useRef } from "react";

// Constantes movidas para fora do componente para evitar recriação
const FLOW_COMPONENTS = [
  { icon: "📋", label: "Kanban", desc: "Organização" },
  { icon: "🤖", label: "IA", desc: "Geração" },
  { icon: "✅", label: "Aprovação", desc: "Link público" },
  { icon: "📅", label: "Calendário", desc: "Agendamento" },
  { icon: "🔄", label: "Workflow", desc: "Automação" },
  { icon: "📊", label: "Analytics", desc: "Relatórios" },
] as const;

const FEATURES = [
  {
    icon: "🔄",
    title: "API Unificada",
    description: "Integre com múltiplos provedores de IA alterando uma única linha de código.",
  },
  {
    icon: "💾",
    title: "Memória Persistente",
    description:
      "Combine histórico com contexto do projeto para gerar conteúdo consistente e alinhado com sua marca.",
  },
  {
    icon: "⚙️",
    title: "Configuração de Prompts",
    description:
      "Customize e otimize prompts em um playground local, testando diferentes variações.",
  },
  {
    icon: "🔗",
    title: "Integração de Ferramentas",
    description:
      "Permita que a IA interaja com seus sistemas e se integre com outras ferramentas do seu workflow.",
  },
] as const;

// Ícones para o fluxo
const IdeaIcon = memo(() => (
  <svg
    className="w-6 h-6 text-[#5B8CFF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
));
IdeaIcon.displayName = "IdeaIcon";

const ProductionIcon = memo(() => (
  <svg
    className="w-6 h-6 text-[#5B8CFF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
));
ProductionIcon.displayName = "ProductionIcon";

const ReviewIcon = memo(() => (
  <svg
    className="w-6 h-6 text-[#5B8CFF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
));
ReviewIcon.displayName = "ReviewIcon";

const ApprovalIcon = memo(() => (
  <svg
    className="w-6 h-6 text-[#5B8CFF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
));
ApprovalIcon.displayName = "ApprovalIcon";

const ScheduleIcon = memo(() => (
  <svg
    className="w-6 h-6 text-[#5B8CFF]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
));
ScheduleIcon.displayName = "ScheduleIcon";

// Componente de flow item memoizado
const FlowItem = memo(({ icon, label, desc }: { icon: string; label: string; desc: string }) => (
  <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-foreground/10 bg-background">
    <div className="text-xl">{icon}</div>
    <span className="text-xs font-semibold text-foreground">{label}</span>
    <span className="text-[10px] text-foreground/60 text-center">{desc}</span>
  </div>
));
FlowItem.displayName = "FlowItem";

// Componente de feature card memoizado
const FeatureCard = memo(
  ({
    icon,
    title,
    description,
    isFirst = false,
    isLast = false,
  }: {
    icon: string;
    title: string;
    description: string;
    isFirst?: boolean;
    isLast?: boolean;
  }) => {
    const roundedClasses = [
      isFirst && "rounded-tr-lg", // Primeiro: apenas topo direito arredondado
      isLast && "rounded-br-lg", // Último: apenas inferior direito arredondado
      !isFirst && !isLast && "", // Cards do meio: sem bordas arredondadas
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${roundedClasses} border border-foreground/10 p-5`}>
        <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          {title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Ocupa toda a largura */}
        <div className="pl-20 mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-[#5B8CFF]">/</span>
            <span className="text-foreground">fluxo</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Organize seus cronogramas, gere conteúdo com IA e colete aprovações
            <br /> de forma simples e eficiente.
          </p>
        </div>

        {/* Grid com as duas caixas lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-x-8 lg:gap-x-4 items-start rounded-lg border border-white/20 pl-4">
          {/* Flow Diagram */}
          <div className="rounded-lg border border-foreground/10 bg-foreground/5 pr-6 pl-6 lg:pl-8 self-center flex flex-col justify-center h-[calc(100%-2rem)]">
            <div className="space-y-8 py-10">
              {/* Flow Steps - Horizontal em desktop, vertical em mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 md:gap-2">
                {/* Ideia */}
                <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-[#5B8CFF] bg-[#5B8CFF]/10 flex items-center justify-center">
                    <IdeaIcon />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center">Ideia</span>
                </div>
                <div className="hidden sm:block flex-1 max-w-[60px] border-t-2 border-dashed border-[#5B8CFF]/40"></div>
                <div className="block sm:hidden w-1 h-6 border-l-2 border-dashed border-[#5B8CFF]/40"></div>

                {/* Produção */}
                <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-[#5B8CFF] bg-[#5B8CFF]/10 flex items-center justify-center">
                    <ProductionIcon />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center">
                    Produção
                  </span>
                </div>
                <div className="hidden sm:block flex-1 max-w-[60px] border-t-2 border-dashed border-[#5B8CFF]/40"></div>
                <div className="block sm:hidden w-1 h-6 border-l-2 border-dashed border-[#5B8CFF]/40"></div>

                {/* Revisão */}
                <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-[#5B8CFF] bg-[#5B8CFF]/10 flex items-center justify-center">
                    <ReviewIcon />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center">Revisão</span>
                </div>
                <div className="hidden sm:block flex-1 max-w-[60px] border-t-2 border-dashed border-[#5B8CFF]/40"></div>
                <div className="block sm:hidden w-1 h-6 border-l-2 border-dashed border-[#5B8CFF]/40"></div>

                {/* Aprovação */}
                <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-[#5B8CFF] bg-[#5B8CFF]/10 flex items-center justify-center">
                    <ApprovalIcon />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center">
                    Aprovação
                  </span>
                </div>
                <div className="hidden sm:block flex-1 max-w-[60px] border-t-2 border-dashed border-[#5B8CFF]/40"></div>
                <div className="block sm:hidden w-1 h-6 border-l-2 border-dashed border-[#5B8CFF]/40"></div>

                {/* Agendamento */}
                <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-[#5B8CFF] bg-[#5B8CFF]/10 flex items-center justify-center">
                    <ScheduleIcon />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center">
                    Agendamento
                  </span>
                </div>
              </div>

              {/* Components Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {FLOW_COMPONENTS.map((item, idx) => (
                  <FlowItem
                    key={`${item.label}-${idx}`}
                    icon={item.icon}
                    label={item.label}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Sidebar */}
          <div className="pr-0">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isFirst={index === 0}
                isLast={index === FEATURES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Workflow);
