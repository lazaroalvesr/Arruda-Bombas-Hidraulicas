import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HeaderPage } from "@/components/header";
import { FooterPage } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Arruda Bombas Hidráulicas - Soluções em Bombas de Concreto',
  description: 'Na Arruda Bombas Hidráulicas, somos especialistas na venda de bombas de concreto hidráulicas de alta performance. Oferecemos soluções confiáveis que garantem eficiência e durabilidade, atendendo todas as suas necessidades de bombeamento de concreto do seu projeto.',
  keywords: [
    'bomba de concreto hidráulica',
    'venda de bombas de concreto',
    'bombas de concreto para construção',
    'aluguel de bombas de concreto',
    'preço de bombas de concreto',
    'bombas de concreto para obras',
    'bombas de concreto para grandes volumes',
    'manutenção de bombas de concreto',
    'acessórios para bombas de concreto',
    'bombas de concreto elétricas',
    'bombas de concreto diesel',
    'bombas de concreto para fundações',
    'bombas de concreto para pré-moldados',
    'serviços de bombeamento de concreto',
    'como escolher uma bomba de concreto',
    'eficiência das bombas de concreto' 
  ],
  openGraph: {
    title: 'Arruda Bombas Hidráulicas',
    description: 'Líder em vendas de bombas de concreto hidráulicas no Brasil.',
    url: 'https://www.arrudabombas.com.br',
    images: [
      {
        url: '/icons/logo.png',
        width: 800,
        height: 600,
        alt: 'Arruda Bombas Hidráulicas - Venda de Bombas de Concreto',
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
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icons/Icon.png" type="image/png" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="canonical" href="https://www.arrudabombas.com.br" />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-5V6KGQQJ"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V6KGQQJ')`
          }}
        />
        <meta name="google-site-verification" content="Ll3cuhcpQG1efeEhIG708aH1R7-dHIXffqQS3OZL1Zw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Arruda Bombas Hidráulicas",
              "description": "Especialistas na venda de bombas de concreto hidráulicas.",
              "url": "https://www.arrudabombas.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Pedro Coelho, N° 314 - Chácaras Fazenda Coelho",
                "addressLocality": "Hortolândia ",
                "addressRegion": "São Paulo",
                "postalCode": "13185-503",
                "addressCountry": "BR"
              },
              "telephone": "(19) 97410-5318"
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5V6KGQQJ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
        <HeaderPage />
        {children}
        <GoogleTagManager gtmId="AW-16806649058" />
        <Analytics />
        <FooterPage />
      </body>
    </html>
  );
}
