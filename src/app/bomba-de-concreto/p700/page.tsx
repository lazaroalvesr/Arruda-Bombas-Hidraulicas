import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas Hidráulicas',
    description: 'Bomba de Concreto P700 com 35m³/h, 200 bar e alcance de 80m horizontal. A mais vendida do Brasil. Preço especial: R$ 165.000. Arruda Bombas Hidráulicas.',
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
        'p700 concreto usinado',
        'p700 brita 0 e 1',
        'bomba estacionária p700',
        // Gerais
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
        'bombas de concreto para construção',
        'bombas de concreto para grandes volumes',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/p700',
    },
    openGraph: {
        title: 'P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas',
        description: 'A bomba de concreto mais potente da categoria: 35m³/h • 80m horizontal • 200 bar • R$ 165.000',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/p700',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/P700/P700_1.png',
                width: 1200,
                height: 900,
                alt: 'Bomba P700 Arruda - Vista Frontal',
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
    "description": "P700 com 35m³/h, 200 bar, 80m horizontal e 12m vertical. Ideal para obras médias e grandes. Preço: R$ 165.000.",
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
        { id: 7, images: "/img/P700/P700_7.jpg", alt: "P700 em obra de edifício" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "Com 200 bar de pressão, a P700 garante uma operação poderosa e eficiente, ideal para o bombeamento de concreto usinado e materiais como brita 0 e 1." },
        { tituloEspecificacoes: "Especificações do Cilindro", textEspecificacoes: "Equipado com uma camisa de 180 mm de diâmetro e um pistão com 1.20 metros de comprimento, assegurando força e precisão em cada bombeamento." },
        { tituloEspecificacoes: "Alcance Impressionante", textEspecificacoes: "Capaz de realizar bombeamento horizontal de até 80 metros e vertical de até 12 metros, proporcionando flexibilidade em diferentes cenários de trabalho." },
        { tituloEspecificacoes: "Capacidade de Bombeamento", textEspecificacoes: "Com uma capacidade de 35 m³ por hora, esta bomba é perfeita para operações de alta demanda." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Inclui um coxo com sistema tubo S, painel PP de fácil operação e um radiador de óleo para manter a máquina funcionando nas melhores condições." },
        { tituloEspecificacoes: "Eficiência e Potência", textEspecificacoes: "Com uma potência equivalente ao modelo P500, a P700 é sinônimo de confiabilidade e desempenho." },
        { tituloEspecificacoes: "Automatização", textEspecificacoes: "O sistema de bombeamento automatizado garante operações contínuas e sem interrupções, permitindo que você se concentre no que realmente importa." },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col mt-12" itemScope itemType="https://schema.org/Product">
                <h1 className="sr-only">
                    Bomba de Concreto P700 35m³/h 200 Bar - R$ 165.000 | Arruda Bombas Hidráulicas
                </h1>

                <meta itemProp="name" content="Bomba de Concreto P700 35m³/h - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/P700/P700_1.png" />
                <meta itemProp="description" content="P700 com 35m³/h, 200 bar e 80m de alcance por apenas R$ 165.000. A mais vendida do Brasil!" />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Bomba de Concreto P700 35m³/h"
                    descricao="A <strong>P700</strong> é a bomba de concreto mais vendida do Brasil! Com 35m³ por hora, 200 bar de pressão e alcance de até 80 metros horizontal, é perfeita para obras médias e grandes: edifícios, galpões, fundações e pré-moldados. Sistema tubo S, painel PP e automação total."
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
                            { q: "Funciona com brita 0 e 1?", a: "Sim, bombeia concreto usinado com brita 0 e 1 sem entupir." },
                            { q: "É automatizada?", a: "Sim! Sistema 100% automatizado com painel PP." },
                            { q: "Precisa de motor externo?", a: "Não, já vem com motor diesel embutido (equivalente P500)." },
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
                            title="Caminhão MultiMix"
                            price="R$ 185.000"
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