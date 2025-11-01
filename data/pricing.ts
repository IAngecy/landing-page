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
  free?: boolean | "parcial";
  freela?: boolean | "parcial";
  starter: boolean | "parcial";
  pro: boolean | "parcial";
  agency: boolean | "parcial";
  enterprise?: boolean | "parcial";
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
  {
    feature: "Geração de cronograma (IA)",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Edição antes de inserir",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Link público (aprovação)",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Kanban + Calendário",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Kanban + ações em lote",
    free: false,
    freela: false,
    starter: "parcial",
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Agendamento",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Cota de IA com aviso",
    free: true,
    freela: true,
    starter: true,
    pro: true,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Dados mockados",
    free: true,
    freela: false,
    starter: false,
    pro: false,
    agency: false,
    enterprise: false,
  },
  {
    feature: "Auditoria avançada",
    free: false,
    freela: false,
    starter: false,
    pro: false,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Suporte prioritário",
    free: false,
    freela: false,
    starter: false,
    pro: false,
    agency: true,
    enterprise: true,
  },
  {
    feature: "Consultoria especializada",
    free: false,
    freela: false,
    starter: false,
    pro: false,
    agency: false,
    enterprise: true,
  },
  {
    feature: "Integrações personalizadas",
    free: false,
    freela: false,
    starter: false,
    pro: false,
    agency: false,
    enterprise: true,
  },
];

export const posts = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "#",
    title: "Dicas de Marketing Digital",
    description:
      "Aprenda as melhores estratégias para crescer sua presença online e engajar sua audiência nas redes sociais.",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "#",
    title: "Tendências de Conteúdo 2024",
    description:
      "Descubra as tendências que estão dominando as redes sociais este ano e como aplicá-las no seu negócio.",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "#",
    title: "Como Organizar seu Calendário",
    description:
      "Dicas práticas para planejar e organizar seu conteúdo de forma eficiente, mantendo a consistência nas publicações.",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "#",
    title: "Storytelling nas Redes Sociais",
    description:
      "Aprenda a contar histórias envolventes que conectam sua marca com o público e aumentam o engajamento.",
  },
];
