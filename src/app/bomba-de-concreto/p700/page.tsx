import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas Hidráulicas',
    description: 'Bomba de Concreto P700 35m³/h com 200 bar e alcance de até 80 metros. A mais vendida do Brasil por R$ 165.000. Arruda Bombas.',
    keywords: [
        'p700',
        'bomba p700',
        'p700 arruda',
        'bomba de concreto p700',
        'p700 preço',
        'p700 35m3',
        'p700 200 bar',
        'p700 hidráulica',
        'p700 80 metros',
        'p700 tubo s',
        'bomba estacionária p700',
        'p700 brita 0 e 1',
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
        'bombas de concreto para grandes volumes',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/p700',
    },
    openGraph: {
        title: 'P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas',
        description: 'A bomba estacionária mais vendida: 35m³/h • 200 bar • 80m de alcance • R$ 165.000',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/p700',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/P700/P700_1.png',
                width: 1200,
                height: 900,
                alt: 'Bomba P700 Arruda Bombas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'P700 R$ 165.000 | Arruda Bombas',
        description: '35m³/h • 200 bar • 80m alcance • Pronta entrega',
        images: ['https://www.arrudabombas.com.br/img/P700/P700_1.png'],
    },
    robots: 'index, follow, max-image-preview:large',
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bomba de Concreto P700 35m³/h - Arruda Bombas Hidráulicas",
    "image": [
        "https://www.arrudabombas.com.br/img/P700/P700_1.png",
        "https://www.arrudabombas.com.br/img/P700/P700_2.png"
    ],
    "description": "P700 com 35m³/h, 200 bar e alcance de até 80 metros horizontal. Ideal para obras médias e grandes.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/p700",
        "priceCurrency": "BRL",
        "price": "165000.00",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Arruda Bombas Hidráulicas"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156"
    }
};

export default function BombaHidraulicaP700() {
    const images = [
        { id: 1, images: "/img/P700/P700_1.png", alt: "Bomba P700 Arruda - Vista frontal completa" },
        { id: 2, images: "/img/P700/P700_2.png", alt: "P700 em operação na obra" },
        { id: 3, images: "/img/P700/P700_3.png", alt: "Detalhe do coxo com sistema tubo S" },
        { id: 4, images: "/img/P700/P700_4.png", alt: "Painel PP digital da P700" },
        { id: 5, images: "/img/P700/P700_5.png", alt: "Radiador de óleo e cilindro 180mm" },
        { id: 6, images: "/img/P700/P700_6.png", alt: "P700 bombeando a 80 metros horizontal" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "200 bar de pressão, ideal para bombeamento de concreto com brita 0 e 1." },
        { tituloEspecificacoes: "Capacidade", textEspecificacoes: "35 m³ por hora – alta produtividade" },
        { tituloEspecificacoes: "Alcance", textEspecificacoes: "Até 80 metros horizontal e 12 metros vertical" },
        { tituloEspecificacoes: "Cilindro", textEspecificacoes: "Camisa 180 mm × pistão de 1,20 m" },
        { tituloEspecificacoes: "Sistema", textEspecificacoes: "Coxo com Tubo S + Painel PP + Radiador de óleo" },
        { tituloEspecificacoes: "Motor", textEspecificacoes: "Diesel embutido (equivalente ao P500)" },
        { tituloEspecificacoes: "Aplicação Ideal", textEspecificacoes: "Edifícios, galpões, fundações e obras médias/grandes" },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col lg:mt-12 mt-32" itemScope itemType="https://schema.org/Product">
                <h1 className="sr-only">
                    Bomba de Concreto P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas
                </h1>

                <meta itemProp="name" content="Bomba de Concreto P700 35m³/h - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/P700/P700_1.png" />
                <meta itemProp="description" content="P700 com 35m³/h, 200 bar e 80m de alcance por apenas R$ 165.000." />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Bomba de Concreto P700 35m³/h"
                    descricao="A P700 é a bomba estacionária mais vendida do Brasil! Com 35m³/h, 200 bar de pressão e alcance de até 80 metros horizontal, é ideal para obras médias e grandes como edifícios, galpões, fundações e pré-moldados."
                    preco="R$ 165.000"
                    especificacoes={especificacoes}
                    galleryWidthProp={103}
                />

                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre a P700</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "Qual o preço da P700?", a: "R$ 165.000 à vista ou parcelado." },
                            { q: "Qual a capacidade da P700?", a: "35 metros cúbicos por hora com pressão de 200 bar." },
                            { q: "Qual o alcance máximo?", a: "80 metros horizontal e 12 metros vertical." },
                            { q: "Funciona com brita 0 e 1?", a: "Sim, bombeia concreto com brita 0 e 1 sem problemas." },
                            { q: "É automatizada?", a: "Sim! Sistema 100% automatizado com painel PP." },
                            { q: "Precisa de motor externo?", a: "Não, já vem com motor diesel embutido." },
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
                    <h2 className="lg:text-[32px] text-[24px] font-medium">Outras Bombas Populares</h2>
                    <div className="flex lg:flex-row flex-col md:flex-row md:gap-5 gap-8 my-10 lg:my-20">
                        <CardEquipamentos
                            href="/bomba-de-concreto/carretinha-pequena"
                            src="/img/eletrica.png"
                            title="Carretinha Pequena"
                            price="R$ 185.000"
                        />
                        <CardEquipamentos
                            href="/bomba-de-concreto/multimix"
                            src="/img/betoneira.png"
                            title="Multimix"
                            price="Sob consulta"
                        />
                        <div className="flex md:hidden lg:flex">
                            <CardEquipamentos
                                href="/bomba-de-concreto/carretinha-rebocavel"
                                src="/img/rebocavel.png"
                                title="Carretinha Rebocável"
                                price="A consultar"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}