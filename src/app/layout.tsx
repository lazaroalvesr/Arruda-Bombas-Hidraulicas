import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HeaderPage } from "@/components/header";
import { FooterPage } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'

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
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icons/Icon.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                 (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
        })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5240213);
              `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <HeaderPage />
        {children}
        <GoogleTagManager gtmId="GT-WF8FZJ8Z" />
        <Analytics />
        <FooterPage />
      </body>
    </html>
  );
}
