export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Social Scheduler AI",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    description:
      "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público.",
    sameAs: [
      // Adicionar links de redes sociais quando disponíveis
    ],
  };
}

export function SoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Social Scheduler AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: "0",
      highPrice: "999",
      offerCount: "6",
    },
  };
}

