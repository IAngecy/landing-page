import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { OrganizationSchema, SoftwareApplicationSchema } from "./structured-data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Roboto Flex via Google Fonts CDN (não disponível via next/font, então usamos CSS)

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: Atualizar com URL real
  title: {
    default: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
    template: "%s | Social Scheduler AI",
  },
  description:
    "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
  keywords: [
    "social media scheduler",
    "agendamento redes sociais",
    "cronograma social media",
    "IA para redes sociais",
    "aprovação cliente",
    "kanban social media",
    "plataforma agência",
  ],
  authors: [{ name: "Social Scheduler AI" }],
  creator: "Social Scheduler AI",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://example.com",
    siteName: "Social Scheduler AI",
    title: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
    description:
      "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
    description:
      "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicionar códigos de verificação quando disponíveis
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = OrganizationSchema();
  const softwareSchema = SoftwareApplicationSchema();

  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
