import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Roboto Flex via Google Fonts CDN (não disponível via next/font, então usamos CSS)

export const metadata: Metadata = {
  title: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
  description:
    "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
  openGraph: {
    title: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
    description:
      "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
    url: "https://example.com",
    siteName: "Social Scheduler AI",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Social Scheduler AI — Cronogramas e aprovações de social com IA",
    description:
      "Plataforma para agências criarem cronogramas com IA, organizarem em Kanban/Calendário e aprovarem via link público. Planos desde R$ 0/mês.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
