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
  title: 'Arruda Bombas Hidráulicas - Bombas de Concreto a partir de R$ 165.000',
  description: 'Bombas de concreto hidráulicas de alta performance. Carretinha Pequena, P700, MultiMix e Betonbomba. Entrega em todo Brasil. Resposta em minutos.',
  keywords: [
    'bomba de concreto hidráulica',
    'venda de bombas de concreto',
    'bombas de concreto para construção',
    'preço de bombas de concreto',
    'bombas de concreto para obras',
    'carretinha pequena',
    'P700',
    'MultiMix',
    'Betonbomba',
    'bomba de concreto elétrica',
    'bomba de concreto diesel',
    'bomba de concreto 200 bar',
    'serviços de bombeamento de concreto',
    'bomba de concreto Hortolândia',
    'bomba de concreto São Paulo',
  ],
  authors: [{ name: 'Arruda Bombas Hidráulicas' }],
  creator: 'Lázaro Alves R',
  openGraph: {
    title: 'Arruda Bombas Hidráulicas - Bombas de Concreto',
    description: 'Bombas de concreto hidráulicas a partir de R$ 165.000. Entrega em todo Brasil. Suporte técnico especializado.',
    url: 'https://www.arrudabombas.com.br',
    siteName: 'Arruda Bombas Hidráulicas',
    images: [
      {
        url: 'https://www.arrudabombas.com.br/icons/logo.png',
        width: 800,
        height: 600,
        alt: 'Arruda Bombas Hidráulicas - Venda de Bombas de Concreto',
        type: 'image/png',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arruda Bombas Hidráulicas',
    description: 'Bombas de concreto hidráulicas a partir de R$ 165.000. Entrega em todo Brasil.',
    images: ['https://www.arrudabombas.com.br/icons/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.arrudabombas.com.br',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5,
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

        <link rel="preload" as="image" href="/icons/logo.png" />
        <link rel="preload" as="image" href="/img/foto_principal.png" />

        <meta name="google-site-verification" content="Ll3cuhcpQG1efeEhIG708aH1R7-dHIXffqQS3OZL1Zw" />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Arruda Bombas Hidráulicas",
              "description": "Especialistas na venda de bombas de concreto hidráulicas de alta performance.",
              "url": "https://www.arrudabombas.com.br",
              "logo": "https://www.arrudabombas.com.br/icons/logo.png",
              "image": "https://www.arrudabombas.com.br/img/foto_principal.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Pedro Coelho, Nº 314",
                "addressLocality": "Hortolândia",
                "addressRegion": "SP",
                "postalCode": "13185-503",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+55 19 99313-6999",
                "url": "https://wa.me/5519993136999"
              },
              "telephone": "+55 19 99313-6999",
              "areaServed": "BR",
              "priceRange": "R$ 165.000 - R$ 185.000",
            })
          }}
        />

        {/* Schema.org - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Arruda Bombas Hidráulicas",
              "url": "https://www.arrudabombas.com.br",
              "logo": "https://www.arrudabombas.com.br/icons/logo.png",
              "description": "Vendas de bombas de concreto hidráulicas de alta performance",
              "sameAs": [
                "https://www.youtube.com/@arrudabombas",
                "https://www.instagram.com/arrudabombashidraulicas7/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+55 19 99313-6999"
              }
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V6KGQQJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <HeaderPage />
        <main>
          {children}
        </main>
        <GoogleTagManager gtmId="AW-16806649058" />
        <Analytics />
        <FooterPage />
      </body>
    </html>
  );
}