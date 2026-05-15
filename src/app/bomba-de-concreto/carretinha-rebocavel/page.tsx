import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'Carretinha Rebocável 25m³/h 200 Bar | Arruda Bombas Hidráulicas',
    description: 'Carretinha Rebocável 25m³/h com 200 bar e alcance de até 100 metros. Motor Perkins ou MWM. Ideal para grandes obras. Arruda Bombas Hidráulicas.',
    keywords: [
        'carretinha rebocável',
        'carretinha rebocável bomba de concreto',
        'carretinha rebocável 25m3',
        'bomba de concreto rebocável',
        'carretinha rebocável arruda',
        'carretinha rebocável preço',
        'carretinha rebocável perkins',
        'carretinha rebocável mwm',
        'bomba concreto rebocável 25m³',
        'carretinha rebocável 100 metros',
        'carretinha rebocável tubo s',
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-rebocavel',
    },
    openGraph: {
        title: 'Carretinha Rebocável 25m³/h 200 Bar | Arruda Bombas',
        description: 'Carretinha rebocável potente: 25m³/h • 200 bar • 100m de alcance • Perkins ou MWM',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-rebocavel',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/Rebocavel/Rebocavel_1.png',
                width: 1200,
                height: 900,
                alt: 'Carretinha Rebocável Arruda Bombas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Carretinha Rebocável 25m³/h | Arruda Bombas',
        description: '200 bar • 100m alcance • Motor Perkins ou MWM',
        images: ['https://www.arrudabombas.com.br/img/Rebocavel/Rebocavel_1.png'],
    },
    robots: 'index, follow, max-image-preview:large',
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Carretinha Rebocável 25m³/h - Arruda Bombas Hidráulicas",
    "image": [
        "https://www.arrudabombas.com.br/img/Rebocavel/Rebocavel_1.png",
        "https://www.arrudabombas.com.br/img/Rebocavel/Rebocavel_2.png"
    ],
    "description": "Carretinha rebocável com 25m³/h, 200 bar e alcance de até 100 metros horizontal. Motor Perkins ou MWM. Ideal para grandes obras.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-rebocavel",
        "priceCurrency": "BRL",
        "price": "0",
        "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "Sob consulta",
            "priceCurrency": "BRL"
        },
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Arruda Bombas Hidráulicas"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "73"
    }
};

export default function CarretinhaRebocavel() {
    const images = [
        { id: 1, images: "/img/Rebocavel/Rebocavel_1.png", alt: "Carretinha Rebocável Arruda - Vista frontal com motor Perkins" },
        { id: 2, images: "/img/Rebocavel/Rebocavel_2.png", alt: "Carretinha Rebocável em operação na obra" },
        { id: 3, images: "/img/Rebocavel/Rebocavel_3.png", alt: "Detalhe do coxo com sistema tubo S" },
        { id: 4, images: "/img/Rebocavel/Rebocavel_5.png", alt: "Painel PP e radiador de óleo" },
        { id: 5, images: "/img/Rebocavel/Rebocavel_6.png", alt: "Motor MWM 4CC instalado" },
        { id: 6, images: "/img/Rebocavel/Rebocavel_7.png", alt: "Alcance de 100 metros horizontal em ação" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "200 bar de pressão, excelente para bombeamento de concreto com brita 0 e 1." },
        { tituloEspecificacoes: "Capacidade de Bombeamento", textEspecificacoes: "25 m³ por hora – Alta produtividade." },
        { tituloEspecificacoes: "Alcance Impressionante", textEspecificacoes: "Até 100 metros horizontal e 20 metros vertical." },
        { tituloEspecificacoes: "Motor", textEspecificacoes: "Perkins 4CC ou MWM 4CC (diesel)." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Coxo com tubo S, painel PP e radiador de óleo." },
        { tituloEspecificacoes: "Mobilidade", textEspecificacoes: "Rebocável e emplacada – Fácil transporte entre obras." },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col lg:mt-12 mt-32" itemScope itemType="https://schema.org/Product">
                <h1 className="sr-only">
                    Carretinha Rebocável 25m³/h 200 Bar - Arruda Bombas Hidráulicas
                </h1>

                <meta itemProp="name" content="Carretinha Rebocável 25m³/h - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/Rebocavel/Rebocavel_1.png" />
                <meta itemProp="description" content="Carretinha rebocável 25m³/h com 200 bar e alcance de até 100 metros." />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Carretinha Rebocável 25m³/h"
                    descricao="A carretinha rebocável mais potente da Arruda Bombas! Entrega 25m³/h com 200 bar de pressão e alcance de até 100 metros horizontal. Perfeita para grandes obras, fundações, pré-moldados e construções de alto padrão. Disponível com motor Perkins 4CC ou MWM 4CC."
                    preco="Preço a consultar"
                    motor={{
                        motor1: "Perkins 4CC",
                        motor2: "MWM 4CC"
                    }}
                    especificacoes={especificacoes}
                    galleryWidthProp={50}
                />

                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre Carretinha Rebocável</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "Qual o preço da carretinha rebocável?", a: "Valor sob consulta. Entre em contato pelo WhatsApp para orçamento imediato." },
                            { q: "Qual a capacidade da carretinha rebocável?", a: "25 metros cúbicos por hora com pressão de 200 bar." },
                            { q: "Qual o alcance máximo?", a: "Até 100 metros horizontal e 20 metros vertical." },
                            { q: "Quais motores estão disponíveis?", a: "Perkins 4 cilindros ou MWM 4 cilindros, ambos diesel." },
                            { q: "Funciona com brita 0 e 1?", a: "Sim, bombeia concreto com brita 0 e 1 sem problemas." },
                            { q: "A carretinha é emplacada?", a: "Sim, sai pronta para rodar na estrada." },
                        ].map((faq, i) => (
                            <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                                <h3 itemProp="name" className="text-xl font-semibold">{faq.q}</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text" className="mt-2 text-gray-700">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:items-start items-center md:ml-4 lg:ml-0 lg:mt-0 mt-12 md:mt-0">
                    <h2 className="lg:text-[32px] text-[24px] font-medium">Outras Bombas de Concreto Populares</h2>
                    <div className="flex lg:flex-row flex-col md:flex-row md:gap-5 gap-8 my-10 lg:my-20">
                        <CardEquipamentos
                            href="/bomba-de-concreto/carretinha-pequena"
                            src="/img/eletrica.png"
                            title="Carretinha Pequena"
                            price="R$ 185.000"
                        />
                        <CardEquipamentos
                            href="/bomba-de-concreto/betonbomba"
                            src="/img/betonbomba.png"
                            title="Betonbomba"
                            price="Sob consulta"
                        />
                        <div className="flex md:hidden lg:flex">
                            <CardEquipamentos
                                href="/bomba-de-concreto/p700"
                                src="/img/p700.png"
                                title="P700"
                                price="R$ 165.000"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}