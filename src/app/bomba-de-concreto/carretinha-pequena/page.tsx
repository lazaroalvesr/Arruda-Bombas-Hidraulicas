import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'Carretinha Pequena 5m³/h 200 Bar | Arruda Bombas Hidráulicas',
    description: 'Carretinha Pequena com 5m³/h e 200 bar – ideal para obras pequenas e médias. Compacta, emplacada e pronta para uso. Preço: R$ 185.000. Arruda Bombas Hidráulicas.',
    keywords: [
        'carretinha pequena',
        'carretinha bomba de concreto',
        'carretinha pequena arruda',
        'bomba de concreto carretinha',
        'carretinha pequena preço',
        'carretinha pequena 5m3',
        'carretinha pequena concreto',
        'carretinha pequena hidráulica',
        'carretinha pequena diesel',
        'carretinha pequena elétrica',
        'bomba de concreto pequena',
        'carretinha emplacada concreto',
        'mini bomba de concreto',
        'bomba concreto rebocável pequena',
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
        'bombas de concreto para construção',
        'bombas de concreto para obras',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-pequena',
    },
    openGraph: {
        title: 'Carretinha Pequena 5m³/h - R$ 185.000 | Arruda Bombas',
        description: 'A carretinha pequena mais robusta do mercado. 200 bar • 40m horizontal • Elétrica ou Diesel • R$ 185.000',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-pequena',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/Pequena/Pequena_1.png',
                width: 1200,
                height: 900,
                alt: 'Carretinha Pequena Arruda - Vista Lateral',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Carretinha Pequena R$ 185.000 | Arruda',
        description: '5m³/h • 200 bar • Emplacada • Pronta Entrega',
        images: ['https://www.arrudabombas.com.br/img/Pequena/Pequena_1.png'],
    },
    robots: 'index, follow, max-image-preview:large',
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Carretinha Pequena 5m³/h - Arruda Bombas Hidráulicas",
    "image": [
        "https://www.arrudabombas.com.br/img/Pequena/Pequena_1.png",
        "https://www.arrudabombas.com.br/img/Pequena/Pequena_2.png"
    ],
    "description": "Carretinha pequena para bombeamento de concreto com 5m³/h, 200 bar, motor elétrico ou diesel. Ideal para obras residenciais e comerciais de pequeno porte.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/carretinha-pequena",
        "priceCurrency": "BRL",
        "price": "185000.00",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Arruda Bombas Hidráulicas"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "89"
    }
};

export default function CarretinhaPequena() {
    const images = [
        { id: 1, images: "/img/Pequena/Pequena_1.png", alt: "Carretinha Pequena Arruda - Vista frontal completa" },
        { id: 2, images: "/img/Pequena/Pequena_2.png", alt: "Carretinha Pequena em operação na obra" },
        { id: 3, images: "/img/Pequena/Pequena_3.png", alt: "Detalhe do coxo com sistema tubo S" },
        { id: 4, images: "/img/Pequena/Pequena_4.png", alt: "Motor elétrico trifásico da carretinha pequena" },
        { id: 5, images: "/img/Pequena/Pequena_5.png", alt: "Versão com motor a diesel" },
        { id: 6, images: "/img/Pequena/Pequena_6.png", alt: "Carretinha Pequena emplacada e pronta para rodar" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Capacidade", textEspecificacoes: "5 m³ por hora – perfeita para obras pequenas e médias" },
        { tituloEspecificacoes: "Pressão Máxima", textEspecificacoes: "200 bar – mesma potência das grandes" },
        { tituloEspecificacoes: "Alcance Horizontal", textEspecificacoes: "Até 40 metros" },
        { tituloEspecificacoes: "Alcance Vertical", textEspecificacoes: "Até 6 metros" },
        { tituloEspecificacoes: "Motores Disponíveis", textEspecificacoes: "Elétrico trifásico 220/380V ou Diesel" },
        { tituloEspecificacoes: "Cilindro", textEspecificacoes: "Camisa 150 mm × 0,60 m | Pistão 0,60 m" },
        { tituloEspecificacoes: "Sistema Hidráulico", textEspecificacoes: "Coxo com sistema Tubo S + Painel PP + Radiador de óleo" },
        { tituloEspecificacoes: "Chassis", textEspecificacoes: "Carretinha emplacada com documentação em dia" },
        { tituloEspecificacoes: "Aplicação Ideal", textEspecificacoes: "Lajes, piscinas, calçadas, reformas e obras residenciais" },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col mt-12" itemScope itemType="https://schema.org/Product">
                {/* H1 oculto para SEO (Google ama) */}
                <h1 className="sr-only">
                    Carretinha Pequena 5m³/h 200 Bar - R$ 185.000 | Arruda Bombas Hidráulicas
                </h1>

                <meta itemProp="name" content="Carretinha Pequena 5m³/h - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/Pequena/Pequena_1.png" />
                <meta itemProp="description" content="Carretinha pequena com 5m³/h e 200 bar. Compacta, emplacada e com motor elétrico ou diesel. R$ 185.000." />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Carretinha Pequena 5m³/h"
                    descricao="A <strong>carretinha pequena</strong> mais vendida do Brasil! Compacta, robusta e emplacada, ideal para obras residenciais, lajes, piscinas e reformas. Alcance de até 40 metros horizontal com a mesma pressão de 200 bar das máquinas grandes. Disponível com motor elétrico ou a diesel."
                    preco="R$ 185.000"
                    motor={{
                        motor1: "Motor Elétrico",
                        motor2: "Motor a Diesel"
                    }}
                    especificacoes={especificacoes}
                    galleryWidthProp={20}
                />

                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre Carretinha Pequena</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "Qual o preço da carretinha pequena?", a: "R$ 185.000." },
                            { q: "Qual a capacidade da carretinha pequena?", a: "5 metros cúbicos por hora com pressão de 200 bar." },
                            { q: "Funciona com brita 0 e 1?", a: "Sim, bombeia concreto usinado com brita 0 e 1 sem problemas." },
                            { q: "Posso usar em obra sem energia elétrica?", a: "Sim! Temos a versão com motor a diesel." },
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
                            href="/bomba-de-concreto/p700"
                            src="/img/p700.png"
                            title="P700"
                            price="R$ 165.000"
                        />
                        <CardEquipamentos
                            href="/bomba-de-concreto/betonbomba"
                            src="/img/betonbomba.png"
                            title="Betonbomba"
                            price="R$ 165.000"
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