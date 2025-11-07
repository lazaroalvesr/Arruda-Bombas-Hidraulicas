import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: 'Multimix 2 Betoneiras 200 Bar | Arruda Bombas Hidráulicas',
    description: 'Multimix com DUAS betoneiras, 200 bar e sistema automatizado. A bomba de concreto mais produtiva do Brasil. Caminhão betoneira + bomba em um só equipamento.',
    keywords: [
        'multimix',
        'multimix arruda',
        'bomba multimix',
        'multimix concreto',
        'multimix preço',
        'multimix 2 betoneiras',
        'multimix caminhão',
        'multimix bomba de concreto',
        'multimix 200 bar',
        'caminhão multimix',
        'multimix betoneira dupla',
        'multimix hidráulica',
        'multimix obras grandes',
        // Gerais
        'bomba de concreto hidráulica',
        'venda de bombas de concreto',
        'bombas de concreto para grandes volumes',
    ],
    alternates: {
        canonical: 'https://www.arrudabombas.com.br/bomba-de-concreto/multimix',
    },
    openGraph: {
        title: 'Multimix 2 Betoneiras 200 Bar | Arruda Bombas',
        description: 'O único caminhão com betoneira + bomba de concreto. 200 bar • Sistema automatizado • Máxima produtividade',
        url: 'https://www.arrudabombas.com.br/bomba-de-concreto/multimix',
        type: 'website',
        images: [
            {
                url: 'https://www.arrudabombas.com.br/img/multimix/multimix_1.png',
                width: 1200,
                height: 900,
                alt: 'Multimix Arruda - Caminhão com 2 Betoneiras',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Multimix 2 Betoneiras | Arruda Bombas',
        description: '200 bar • Automatizado • Sob consulta',
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
    "description": "Multimix com duas betoneiras normais, 200 bar de pressão e sistema automatizado. Ideal para grandes obras com altíssima produtividade.",
    "brand": {
        "@type": "Brand",
        "name": "Arruda Bombas Hidráulicas"
    },
    "offers": {
        "@type": "Offer",
        "url": "https://www.arrudabombas.com.br/bomba-de-concreto/multimix",
        "priceCurrency": "BRL",
        "price": "185000.00",
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
        { id: 1, images: "/img/Betoneira/Betoneira_1.png", alt: "Multimix Arruda - Vista lateral com 2 betoneiras" },
        { id: 2, images: "/img/Betoneira/Betoneira_2.png", alt: "Multimix em operação na obra" },
        { id: 3, images: "/img/Betoneira/Betoneira_3.png", alt: "Detalhe do sistema de bombeamento automatizado" },
        { id: 4, images: "/img/Betoneira/Betoneira_4.png", alt: "Painel de controle digital Multimix" },
        { id: 5, images: "/img/Betoneira/Betoneira_5.png", alt: "Duas betoneiras trabalhando simultaneamente" },
        { id: 6, images: "/img/Betoneira/Betoneira_6.png", alt: "Multimix despejando concreto em laje" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Duas Betoneiras", textEspecificacoes: "Equipado com duas betoneiras normais para produção contínua." },
        { tituloEspecificacoes: "Pressão Máxima", textEspecificacoes: "200 bar de pressão para bombeamento de longa distância." },
        { tituloEspecificacoes: "Sistema Automatizado", textEspecificacoes: "Controle total por painel digital com operação simplificada." },
        { tituloEspecificacoes: "Alta Produtividade", textEspecificacoes: "Combina mistura + bombeamento em um só equipamento." },
        { tituloEspecificacoes: "Ideal para Grandes Obras", textEspecificacoes: "Perfeito para edifícios, pontes, barragens e pré-moldados." },
        { tituloEspecificacoes: "Confiabilidade", textEspecificacoes: "Projeto robusto com componentes de primeira linha." },
    ];

    return (
        <>
            <StructuredData data={structuredData} />

            <section className="max-w-[1175px] flex m-auto flex-col mt-12" itemScope itemType="https://schema.org/Product">
                <h1 className="sr-only">
                    Multimix 2 Betoneiras 200 Bar - Caminhão Betoneira + Bomba | Arruda Bombas
                </h1>

                <meta itemProp="name" content="Multimix 2 Betoneiras - Arruda Bombas" />
                <meta itemProp="image" content="https://www.arrudabombas.com.br/img/multimix/multimix_1.png" />
                <meta itemProp="description" content="Multimix com duas betoneiras e 200 bar. O único caminhão que mistura e bombeia ao mesmo tempo." />

                <EquipamentosCard
                    images={images}
                    tituloEquipamento="Multimix 2 Betoneiras"
                    descricao="A Bomba de concreto Multimix é a solução ideal para operações de bombeamento que exigem alta performance. Equipado com duas betoneiras normais, ele combina robustez e eficiência, garantindo resultados consistentes em projetos de grande escala. Com 200 bar de pressão e um sistema automatizado, o Multimix maximiza a produtividade, sendo perfeito para quem busca potência sem abrir mão da confiabilidade."
                    preco="R$ 185.000"
                    especificacoes={especificacoes}
                    galleryWidthProp={30}
                />

                {/* FAQ Schema – domina o "People Also Ask" */}
                <div className="my-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes sobre Multimix</h2>
                    <div itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "O que é o Multimix?", a: "É um caminhão que tem betoneira + bomba de concreto no mesmo equipamento. Mistura e bombeia ao mesmo tempo." },
                            { q: "Quantas betoneiras tem?", a: "Duas betoneiras normais trabalhando simultaneamente." },
                            { q: "Qual a pressão da bomba?", a: "200 bar – mesma das bombas estacionárias topo de linha." },
                            { q: "Precisa de dois operadores?", a: "Não! Um único operador controla mistura e bombeamento pelo painel digital." },
                            { q: "Qual o preço do Multimix?", a: "R$ 185.000" },
                            { q: "Faz concreto com brita 1?", a: "Sim, aceita brita 0 e 1 sem problemas." },
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
                            price="R$ 165.000"
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