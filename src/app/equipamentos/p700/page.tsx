import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'P700 | Arruda Bombas Hidráulicas',
    description: 'Na Arruda Bombas Hidráulicas, somos especialistas na venda de bombas de concreto hidráulicas de alta performance. Oferecemos soluções confiáveis que garantem eficiência e durabilidade, atendendo todas as suas necessidades de bombeamento de concreto do seu projeto.',
    keywords: 'bomba de concreto hidráulica, venda de bombas de concreto, bombas de concreto para construção',
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

export default function BombaHidraulicaP700() {
    const images = [
        { id: 1, images: "/img/P700/P700_1.png" },
        { id: 2, images: "/img/P700/P700_2.png" },
        { id: 3, images: "/img/P700/P700_3.png" },
        { id: 4, images: "/img/P700/P700_4.png" },
        { id: 5, images: "/img/P700/P700_5.png" },
        { id: 6, images: "/img/P700/P700_6.png" },
        { id: 7, images: "/img/P700/P700_7.jpg" },
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
        <section className="max-w-[1175px] flex m-auto flex-col mt-12">
            <EquipamentosCard
                images={images}
                tituloEquipamento="Bomba de Concreto P700"
                descricao="A P700 é a solução perfeita para operações de bombeamento que exigem potência e eficiência. Com um desempenho superior, ela é projetada para enfrentar os desafios mais rigorosos, garantindo resultados consistentes e confiáveis. Ideal para aplicações de grande escala, a P700 maximiza a produtividade e minimiza o tempo de inatividade, tornando-se essencial para projetos que demandam alta performance."
                preco="R$ 165.000"
                especificacoes={especificacoes}
                galleryWidthProp={103}
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
                            href="/equipamentos/carretinha-rebocavel"
                            src="/img/rebocavel.png"
                            title="Carretinha Rebocável"
                            price="A consultar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
