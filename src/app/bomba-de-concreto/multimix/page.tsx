import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'Multimix 2 Betoneiras + Bomba 200 Bar | Arruda Bombas Hidráulicas',
    description: 'Multimix com duas betoneiras + bomba de concreto em um único equipamento. 200 bar de pressão. Mistura e bombeia ao mesmo tempo. Alta produtividade.',
    keywords: [
        'multimix',
        'multimix arruda',
        'bomba multimix',
        'multimix concreto',
        'multimix preço',
        'multimix 2 betoneiras',
        'multimix caminhão',
        'multimix bomba de concreto',
        'caminhão betoneira com bomba',
        'multimix 200 bar',
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/multimix',
    },
    openGraph: {
        title: 'Multimix 2 Betoneiras 200 Bar | Arruda Bombas',
        description: 'Caminhão com 2 betoneiras + bomba de concreto • 200 bar • Alta produtividade',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/multimix',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/multimix/multimix_1.png',
                width: 1200,
                height: 900,
                alt: 'Multimix Arruda Bombas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Multimix 2 Betoneiras | Arruda Bombas',
        description: 'Mistura + Bombeia • 200 bar • Sob consulta',
        images: ['https://www.arrudabombas.com.br/img/multimix/multimix_1.png'],
    },
    robots: 'index, follow, max-image-preview:large',
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Multimix 2 Betoneiras - Arruda Bombas Hidráulicas",
    "image": [
        "https://www.arrudabombas.com.br/img/multimix/multimix_1.png",
        "https://www.arrudabombas.com.br/img/multimix/multimix_2.png"
    ],
    "description": "Multimix com duas betoneiras e bomba de concreto integrada. 200 bar de pressão. Ideal para grandes obras com alta produtividade.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/multimix",
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
        "ratingValue": "5.0",
        "reviewCount": "42"
    }
};

export default function Multimix() {
    const images = [
        { id: 1, images: "/img/multimix/multimix_1.png", alt: "Multimix Arruda - Vista lateral com 2 betoneiras" },
        { id: 2, images: "/img/multimix/multimix_2.png", alt: "Multimix em operação na obra" },
        { id: 3, images: "/img/multimix/multimix_3.png", alt: "Detalhe do sistema de bombeamento automatizado" },
        { id: 4, images: "/img/multimix/multimix_4.png", alt: "Painel de controle digital Multimix" },
        { id: 5, images: "/img/multimix/multimix_5.png", alt: "Duas betoneiras trabalhando simultaneamente" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Duas Betoneiras", textEspecificacoes: "Produção contínua com duas betoneiras trabalhando simultaneamente" },
        { tituloEspecificacoes: "Pressão Máxima", textEspecificacoes: "200 bar de pressão" },
        { tituloEspecificacoes: "Sistema Automatizado", textEspecificacoes: "Painel digital para controle de mistura e bombeamento" },
        { tituloEspecificacoes: "Alta Produtividade", textEspecificacoes: "Mistura + bombeia concreto em um único equipamento" },
        { tituloEspecificacoes: "Aplicação", textEspecificacoes: "Edifícios, galpões, pontes, barragens e grandes obras" },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col lg:mt-12 mt-32" itemScope itemType="https://schema.org/Product">
                <h1 className="sr-only">
                    Multimix 2 Betoneiras + Bomba de Concreto 200 Bar | Arruda Bombas
                </h1>

                <meta itemProp="name" content="Multimix 2 Betoneiras - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/multimix/multimix_1.png" />
                <meta itemProp="description" content="Multimix com duas betoneiras e bomba integrada. Mistura e bombeia ao mesmo tempo." />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Multimix 2 Betoneiras"
                    descricao="O Multimix é um equipamento único que combina duas betoneiras + bomba de concreto em um só caminhão. Mistura e bombeia ao mesmo tempo, oferecendo altíssima produtividade para grandes obras. Com 200 bar de pressão e sistema automatizado."
                    preco="Sob consulta"
                    especificacoes={especificacoes}
                    galleryWidthProp={30}
                />

                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre Multimix</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "O que é o Multimix?", a: "É um caminhão que possui duas betoneiras + bomba de concreto em um único equipamento. Mistura e bombeia ao mesmo tempo." },
                            { q: "Quantas betoneiras tem?", a: "Duas betoneiras trabalhando simultaneamente." },
                            { q: "Qual a pressão da bomba?", a: "200 bar de pressão." },
                            { q: "Precisa de dois operadores?", a: "Não. Um único operador controla tudo pelo painel digital." },
                            { q: "Qual o preço do Multimix?", a: "Valor sob consulta. Entre em contato para orçamento." },
                            { q: "Funciona com brita 0 e 1?", a: "Sim, bombeia concreto com brita 0 e 1 sem problemas." },
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
                    <h2 className="lg:text-[32px] text-[24px] font-medium">Outros Equipamentos Premium</h2>
                    <div className="flex lg:flex-row flex-col md:flex-row md:gap-5 gap-8 my-10 lg:my-20">
                        <CardEquipamentos
                            href="/bomba-de-concreto/betonbomba"
                            src="/img/betonbomba.png"
                            title="Betonbomba"
                            price="Sob consulta"
                        />
                        <CardEquipamentos
                            href="/bomba-de-concreto/carretinha-rebocavel"
                            src="/img/rebocavel.png"
                            title="Carretinha Rebocável"
                            price="A Consultar"
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