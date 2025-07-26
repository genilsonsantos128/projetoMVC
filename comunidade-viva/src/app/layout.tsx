import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comunidade Viva - Plataforma Digital para Comunidades Religiosas",
  description: "Uma plataforma segura e acessível para unir membros da sua igreja, facilitar pedidos de oração e promover o engajamento contínuo durante toda a semana.",
  keywords: "igreja, comunidade religiosa, oração, fé, ministério, grupos, cristão",
  authors: [{ name: "Comunidade Viva" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Comunidade Viva - Conectando Corações através da Fé",
    description: "Plataforma digital para igrejas, ministérios e comunidades religiosas",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidade Viva",
    description: "Conectando Corações através da Fé",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
