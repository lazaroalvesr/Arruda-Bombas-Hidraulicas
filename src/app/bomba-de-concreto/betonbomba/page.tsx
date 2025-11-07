import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'BetonBomba | Betoneira Caminhão - Arruda Bombas Hidráulicas',
    description: 'BetonBomba de alta performance com 200 bar e 25m³/h. A melhor betoneira caminhão do Brasil. Venda direta da Arruda Bombas Hidráulicas com preço especial: R$ 165.000. Ligue agora!',
    keywords: [
        'betonbomba',
        'beton bomba',
        'betoneira caminhão',
        'bomba de concreto caminhão',
        'betonbomba arruda',
        'betonbomba preço',
        'betonbomba usada',
        'betonbomba 25m3',
        'betonbomba 200 bar',
        'bomba de concreto hidráulica caminhão',
        'venda betonbomba',
        'betonbomba brasil',
        ...[
            'bomba de concreto hidráulica',
            'venda de bombas de concreto',
            'bombas de concreto para construção',
            'aluguel de bombas de concreto',
            'preço de bombas de concreto',
        ]
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/betonbomba',
    },
    openGraph: {
        title: 'BetonBomba 25m³/h 200 Bar | Arruda Bombas Hidráulicas',
        description: 'A betonbomba mais potente do mercado por apenas R$ 165.000. Entrega imediata em todo Brasil.',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/betonbomba',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/Betonbomba/Beton_1.png',
                width: 1200,
                height: 900,
                alt: 'BetonBomba Arruda - Vista Frontal',
            },
            {
                url: 'https://www.arrudabombas.com.br/img/Betonbomba/Beton_2.png',
                width: 1200,
                height: 900,
                alt: 'BetonBomba em Operação',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BetonBomba R$ 165.000 | Arruda Bombas',
        description: '25m³/h • 200 bar • Pronta Entrega',
        images: ['https://www.arrudabombas.com.br/img/Betonbomba/Beton_1.png'],
    },
    robots: 'index, follow, max-image-preview:large',
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BetonBomba 25m³/h - Arruda Bombas Hidráulicas",
    "image": [
        "https://www.arrudabombas.com.br/img/Betonbomba/Beton_1.png",
        "https://www.arrudabombas.com.br/img/Betonbomba/Beton_2.png"
    ],
    "description": "Betonbomba caminhão com 200 bar, 25m³/h, ideal para obras de grande porte. Preço promocional: R$ 165.000.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/betonbomba",
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
        "reviewCount": "127"
    }
};

export default function CaminhaoBetonBomba() {
    const images = [
        { id: 1, images: "/img/Betonbomba/Beton_1.png", alt: "BetonBomba Arruda - Vista frontal" },
        { id: 2, images: "/img/Betonbomba/Beton_2.png", alt: "BetonBomba em operação na obra" },
        { id: 3, images: "/img/Betonbomba/Beton_3.png", alt: "Detalhe do sistema hidráulico" },
        { id: 4, images: "/img/Betonbomba/Beton_4.png", alt: "Painel de controle da BetonBomba" },
        { id: 5, images: "/img/Betonbomba/Beton_5.png", alt: "BetonBomba transportando brita 0 e 1" },
        { id: 6, images: "/img/Betonbomba/Beton_6.png", alt: "Alcance vertical de 20 metros" },
        { id: 7, images: "/img/Betonbomba/Beton.7.png", alt: "Radiador de óleo e sistema tubo S" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Pressão Máxima", textEspecificacoes: "200 bar – a mais potente do segmento" },
        { tituloEspecificacoes: "Capacidade", textEspecificacoes: "25 m³/hora – ideal para grandes obras" },
        { tituloEspecificacoes: "Alcance Horizontal", textEspecificacoes: "Até 100 metros" },
        { tituloEspecificacoes: "Alcance Vertical", textEspecificacoes: "Até 20 metros" },
        { tituloEspecificacoes: "Material Transportado", textEspecificacoes: "Brita 0 e 1 (concreto usinado)" },
        { tituloEspecificacoes: "Sistema", textEspecificacoes: "Tubo S + Painel PP automatizado" },
        { tituloEspecificacoes: "Motor", textEspecificacoes: "Diesel – equivalente ao P500" },
        { tituloEspecificacoes: "Preço Especial", textEspecificacoes: "R$ 165.000 à vista" },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col mt-12" itemScope itemType="https://schema.org/Product">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 hidden">
                    BetonBomba 25m³/h 200 Bar - R$ 165.000 | Arruda Bombas
                </h1>

                <meta itemProp="name" content="BetonBomba 25m³/h - Arruda Bombas Hidráulicas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/Betonbomba/Beton_1.png" />
                <meta itemProp="description" content="Betonbomba com 25m³/h e 200 bar por apenas R$ 165.000. Pronta entrega!" />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="BetonBomba 25m³/h"
                    descricao="A <strong>betonbomba</strong> mais procurada do Brasil! Com 200 bar de pressão e capacidade de 25m³ por hora, é perfeita para obras de médio e grande porte. Transporte brita 0 e 1 com alcance de até 100m horizontal e 20m vertical. Preço imperdível: <strong>R$ 165.000</strong>."
                    preco="R$ 165.000"
                    especificacoes={especificacoes}
                    galleryWidthProp={20}
                />

                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre BetonBomba</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "Quanto custa uma betonbomba?", a: "Na Arruda Bombas, a BetonBomba sai por R$ 165.000." },
                            { q: "Qual a capacidade da betonbomba?", a: "25 metros cúbicos por hora com pressão de 200 bar." },
                            { q: "Faz entrega em todo Brasil?", a: "Sim, entregamos em todos os estados com seguro total." },
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
                            href="/bomba-de-concreto/multimix"
                            src="/img/betoneira.png"
                            title="Caminhão MultiMix"
                            price="R$ 185.000"
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