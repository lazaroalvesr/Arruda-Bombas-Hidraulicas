import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HeaderPage } from "@/components/header";
import { FooterPage } from "@/components/footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Arruda Bombas Hidráulicas - Soluções em Bombas de Concreto',
  description: 'Na Arruda Bombas Hidráulicas, somos especialistas na venda de bombas de concreto hidráulicas de alta performance. Oferecemos soluções confiáveis que garantem eficiência e durabilidade, atendendo todas as suas necessidades de bombeamento de concreto do seu projeto.',
  keywords: 'bomba de concreto hidráulica, venda de bombas de concreto, bombas de concreto para construção',
  openGraph: {
    title: 'Arruda Bombas Hidráulicas',
    description: 'Líder em vendas de bombas de concreto hidráulicas no Brasil.',
    url: 'https://www.arrudabombas.com.br',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo da Arruda Bombas',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/Icon.png" type="image/png" />
      </head>
      <body className={poppins.className}>
        <HeaderPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
