import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'MultiMix | Arruda Bombas Hidráulicas',
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

export default function CaminhaoMultimix() {

    const images = [
        { id: 1, images: "/img/Betoneira/Betoneira_1.png" },
        { id: 2, images: "/img/Betoneira/Betoneira_2.png" },
        { id: 3, images: "/img/Betoneira/Betoneira_3.png" },
        { id: 4, images: "/img/Betoneira/Betoneira_4.png" },
        { id: 5, images: "/img/Betoneira/Betoneira_5.png" },
        { id: 6, images: "/img/Betoneira/Betoneira_6.png" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "Com 200 bar de pressão, o Multimix garante uma operação poderosa e eficiente." },
        { tituloEspecificacoes: "Especificações do Cilindro", textEspecificacoes: "Equipado com uma camisa de 1.20 m de comprimento e 180 mm de diâmetro, além de um pistão de 1.20 m." },
        { tituloEspecificacoes: "Alcance Impressionante", textEspecificacoes: "Capaz de realizar bombeamento horizontal de até 80 metros e vertical de até 12 metros." },
        { tituloEspecificacoes: "Aplicação", textEspecificacoes: "Ideal para o transporte de brita 0 e 1." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Inclui um coxo com sistema tubo S e um painel PP." },
        { tituloEspecificacoes: "Eficiência e Potência", textEspecificacoes: "Com potência equivalente ao modelo P500, assegura confiabilidade em suas operações." },
        { tituloEspecificacoes: "Automatização", textEspecificacoes: "O sistema de bombeamento automatizado garante operações contínuas e eficientes." },
        { tituloEspecificacoes: "Radiador de Óleo", textEspecificacoes: "Equipado com radiador de óleo para otimizar o desempenho." },
    ];

    return (
        <section className="max-w-[1175px] flex m-auto flex-col mt-12">
            <EquipamentosCard
                images={images}
                tituloEquipamento="Bomba de Concreto Multimix"
                descricao="A Bomba de concreto Multimix é a solução ideal para operações de bombeamento que exigem alta performance. Equipado com duas betoneiras normais, ele combina robustez e eficiência, garantindo resultados consistentes em projetos de grande escala. Com 200 bar de pressão e um sistema automatizado, o Multimix maximiza a produtividade, sendo perfeito para quem busca potência sem abrir mão da confiabilidade."
                preco="R$ 185.000"
                especificacoes={especificacoes}
                galleryWidthProp={60}
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
                        href="/equipamentos/betonbomba"
                        src="/img/betonbomba.png"
                        title="Betonbomba"
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
