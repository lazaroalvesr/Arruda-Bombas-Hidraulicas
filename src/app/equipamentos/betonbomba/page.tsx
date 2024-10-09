import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'BetonBomba | Arruda Bombas Hidráulicas',
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
                url: '/images/logo.png',
                width: 800,
                height: 600,
                alt: 'Logo da Arruda Bombas',
            },
        ],
    },
};

export default function CaminhaoBetonBomba() {

    const images = [
        { id: 1, images: "/img/Betonbomba/Beton_1.png" },
        { id: 2, images: "/img/Betonbomba/Beton_2.png" },
        { id: 3, images: "/img/Betonbomba/Beton_3.png" },
        { id: 4, images: "/img/Betonbomba/Beton_4.png" },
        { id: 5, images: "/img/Betonbomba/Beton_5.png" },
        { id: 6, images: "/img/Betonbomba/Beton_6.png" },
        { id: 7, images: "/img/Betonbomba/Beton.7.png" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "Com 200 bar de pressão, esta betoneira garante uma operação eficiente e potente." },
        { tituloEspecificacoes: "Especificações do Cilindro", textEspecificacoes: "Equipado com uma camisa de 180 mm de diâmetro e 0.75 m de comprimento." },
        { tituloEspecificacoes: "Pistão", textEspecificacoes: "Pistão com 0.75 m de comprimento, proporcionando força e precisão." },
        { tituloEspecificacoes: "Potência", textEspecificacoes: "Com potência equivalente ao modelo P500, assegura confiabilidade em suas operações." },
        { tituloEspecificacoes: "Alcance Impressionante", textEspecificacoes: "Capaz de realizar bombeamento horizontal de até 100 metros e vertical de até 20 metros." },
        { tituloEspecificacoes: "Aplicação", textEspecificacoes: "Ideal para o transporte de brita 0 e 1." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Inclui um coxo com sistema tubo S e painel PP." },
        { tituloEspecificacoes: "Automatização", textEspecificacoes: "O sistema de bombeamento automatizado garante operações contínuas." },
        { tituloEspecificacoes: "Radiador de Óleo", textEspecificacoes: "Equipado com radiador de óleo para otimizar o desempenho." },
        { tituloEspecificacoes: "Capacidade", textEspecificacoes: "Com capacidade de 25 cúbicos por hora, é perfeita para operações de alta demanda." },
    ];


    return (
        <section className="max-w-[1175px] flex m-auto flex-col mt-12">
            <EquipamentosCard
                images={images}
                tituloEquipamento="BetonBomba"
                descricao="A betoneira é a escolha perfeita para bombeamento em projetos que exigem potência e precisão. Projetada para atender às mais altas demandas, ela oferece um desempenho excepcional com 200 bar de pressão, garantindo resultados confiáveis em diversas aplicações. Com capacidade para transportar brita 0 e 1, é ideal para operações de grande escala, maximizando a produtividade e a eficiência."
                preco="R$ 165.000"
                especificacoes={especificacoes}
                galleryWidthProp={20}
            />
            <div className="flex flex-col md:items-start items-center md:ml-4 lg:ml-0 lg:mt-0 mt-12 md:mt-0">
                <h2 className="lg:text-[32px] text-[24px] font-medium">Veja Outros Equipamentos</h2>
                <div className="flex lg:flex-row flex-col md:flex-row md:gap-5 gap-8 my-10 lg:my-20">
                    <CardEquipamentos
                        href="/equipamentos/carretinha-pequena"
                        src="/img/eletrica.png"
                        title="Carretinha Pequena"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/equipamentos/multimix"
                        src="/img/betoneira.png"
                        title="Caminhão MultiMix"
                        price="R$ 185.000"
                    />
                    <div className="flex md:hidden lg:flex">
                        <CardEquipamentos
                            href="/equipamentos/p700"
                            src="/img/p700.png"
                            title="P700"
                            price="R$ 165.000"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
