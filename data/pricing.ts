export type Plan = {
  id: string;
  name: string;
  price: string;
  cta: string;
  features: string[];
  highlighted: boolean;
};

export type ComparisonFeature = {
  feature: string;
  starter: boolean | "parcial";
  pro: boolean | "parcial";
  agency: boolean | "parcial";
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "R$ 129/mês",
    cta: "Para começar seu negócio",
    features: [
      "1 usuário, 1 cliente",
      "IA: até 50 posts/mês (sem excedentes)",
      "Kanban + Calendário (agendamento)",
      "Link público de aprovação",
      "Sem suporte prioritário",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "R$ 399/mês",
    cta: "Começar no Pro",
    features: [
      "5 usuários, até 10 clientes",
      "IA: até 300 posts/mês (sem excedentes)",
      "Kanban + Calendário ",
      "Link público de aprovação",
      "Suporte padrão",
    ],
    highlighted: true,
  },
  {
    id: "agency",
    name: "Agency",
    price: "R$ 999/mês",
    cta: "Falar com a gente",
    features: [
      "20 usuários, até 50 clientes",
      "IA: até 1000 posts/mês (excedente opcional)",
      "Kanban + Calendário",
      "Auditoria avançada com revisão de qualidade",
      "Link público de aprovação",
      "Suporte prioritário",
    ],
    highlighted: false,
  },
];

export const comparison: ComparisonFeature[] = [
  { feature: "Geração de cronograma (IA)", starter: true, pro: true, agency: true },
  { feature: "Edição antes de inserir", starter: true, pro: true, agency: true },
  { feature: "Link público (aprovação)", starter: true, pro: true, agency: true },
  { feature: "Kanban + Calendário", starter: true, pro: true, agency: true },
  { feature: "Kanban + ações em lote", starter: "parcial", pro: true, agency: true },
  { feature: "Agendamento", starter: true, pro: true, agency: true },
  { feature: "Cota de IA com aviso", starter: true, pro: true, agency: true },
  { feature: "Auditoria avançada", starter: false, pro: false, agency: true },
  { feature: "Suporte prioritário", starter: false, pro: false, agency: true },
];
