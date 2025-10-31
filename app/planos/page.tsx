import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import PricingComparison from "@/components/PricingComparison";
import PricingFooter from "@/components/PricingFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Preços — Social Scheduler AI",
  description:
    "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Starter, Pro e Agency — veja o comparativo completo de recursos e o que está incluído em cada plano.",
  openGraph: {
    title: "Planos e Preços — Social Scheduler AI",
    description:
      "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Starter, Pro e Agency — veja o comparativo completo de recursos.",
    url: "https://example.com/planos",
    siteName: "Social Scheduler AI",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Planos e Preços — Social Scheduler AI",
    description:
      "Escolha o plano ideal para sua agência. Planos desde R$ 0/mês. Veja o comparativo completo de recursos.",
  },
};

export default function PlanosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Pricing />
        <PricingComparison />
        <FAQ />
        <PricingFooter />
      </main>
      <Footer />
    </div>
  );
}
