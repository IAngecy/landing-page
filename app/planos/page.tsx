import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import PricingComparison from "@/components/PricingComparison";
import PricingFooter from "@/components/PricingFooter";
import { plans as defaultPlans, type Plan } from "@/data/pricing";
import type { Metadata } from "next";

// Planos customizados para a página de planos
const planosPagePlans: Plan[] = [
  {
    id: "free",
    name: "Testar de graça",
    price: "R$ 0/mês",
    cta: "Testar agora",
    features: [
      "Acesso a todas as funcionalidades",
      "Dados mockados para demonstração",
      "Sem necessidade de cartão de crédito",
      "Experimente por tempo ilimitado",
      "Ideal para conhecer a plataforma",
    ],
    highlighted: false,
  },
  {
    id: "freela",
    name: "Freela",
    price: "R$ 79/mês",
    cta: "Começar como Freela",
    features: [
      "1 usuário, até 3 clientes",
      "IA: até 30 posts/mês (sem excedentes)",
      "Kanban + Calendário (agendamento)",
      "Link público de aprovação",
      "Ideal para freelancers iniciantes",
      "Sem suporte prioritário",
    ],
    highlighted: false,
  },
  ...defaultPlans,
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sob consulta",
    cta: "Marcar uma reunião",
    features: [
      "Usuários e clientes ilimitados",
      "IA: Volume customizado",
      "Consultoria especializada",
      "Solução sob medida para seu negócio",
      "Suporte dedicado 24/7",
      "Integrações personalizadas",
      "Treinamento da equipe",
    ],
    highlighted: false,
  },
];

export const metadata: Metadata = {
  title: "Planos e Preços",
  description:
    "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Testar de graça, Freela, Starter, Pro, Agency e Enterprise — veja o comparativo completo de recursos e o que está incluído em cada plano.",
  keywords: [
    "planos social scheduler",
    "preços agendamento redes sociais",
    "preços cronograma social media",
    "planos agência marketing",
    "preços IA redes sociais",
  ],
  openGraph: {
    title: "Planos e Preços — Social Scheduler AI",
    description:
      "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Testar de graça, Freela, Starter, Pro, Agency e Enterprise — veja o comparativo completo de recursos.",
    url: "https://example.com/planos",
    siteName: "Social Scheduler AI",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos e Preços — Social Scheduler AI",
    description:
      "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Veja o comparativo completo de recursos.",
  },
};

export default function PlanosPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="pt-36">
        <Pricing showParticles={false} showTargetCursor={false} plans={planosPagePlans} />
        <PricingComparison />
        <FAQ />
        <PricingFooter />
      </main>
      <Footer />
    </div>
  );
}
