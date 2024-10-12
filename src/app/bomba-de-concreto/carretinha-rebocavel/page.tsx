import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Carretinha Rebocável | Arruda Bombas Hidráulicas',
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
                url: '/icons/logo.png',
                width: 800,
                height: 600,
                alt: 'Logo da Arruda Bombas',
            },
        ],
    },
};

export default function CarretinhaRebocavel() {
    const images = [
        { id: 1, images: "/img/Rebocavel/Rebocavel_1.png" },
        { id: 2, images: "/img/Rebocavel/Rebocavel_2.png" },
        { id: 3, images: "/img/Rebocavel/Rebocavel_3.png" },
        { id: 4, images: "/img/Rebocavel/Rebocavel_5.png" },
        { id: 5, images: "/img/Rebocavel/Rebocavel_6.png" },
        { id: 6, images: "/img/Rebocavel/Rebocavel_7.png" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Alta Pressão", textEspecificacoes: "Com 200 bar de pressão, esta carretinha garante uma operação poderosa e eficiente, ideal para bombeamento de materiais como brita 0 e 1." },
        { tituloEspecificacoes: "Especificações do Cilindro", textEspecificacoes: "Equipado com uma camisa de 180 mm de diâmetro e um pistão com 0,75 metros de comprimento, assegurando força e precisão em cada bombeamento." },
        { tituloEspecificacoes: "Alcance Impressionante", textEspecificacoes: "Capaz de realizar bombeamento horizontal de até 100 metros e vertical de até 20 metros, proporcionando flexibilidade em diferentes cenários de trabalho." },
        { tituloEspecificacoes: "Capacidade de Bombeamento", textEspecificacoes: "Com uma capacidade de 25 M³ por hora, esta carretinha é perfeita para operações de alta demanda." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Inclui um coxo com sistema tubo S, painel PP de fácil operação e um radiador de óleo para manter a máquina funcionando nas melhores condições." },
        { tituloEspecificacoes: "Eficiência e Potência", textEspecificacoes: "Com uma potência equivalente ao modelo P500, esta carretinha é sinônimo de confiabilidade e desempenho." },
        { tituloEspecificacoes: "Automatização", textEspecificacoes: "O sistema de bombeamento automatizado garante operações contínuas e sem interrupções, permitindo que você se concentre no que realmente importa." },
    ];

    return (
        <section className="max-w-[1175px] flex m-auto flex-col mt-12">
            <EquipamentosCard
                images={images}
                tituloEquipamento="Carretinha Rebocável"
                descricao="A Carretinha Rebocável é a solução perfeita para operações de bombeamento robustas e eficientes. Projetada para atender às demandas mais exigentes, ela oferece um desempenho excepcional em diversas aplicações."
                preco="A Consultar"
                motor={{
                    motor1: "Perkins 4CC",
                    motor2: "MWM 4CC"
                }}
                especificacoes={especificacoes}
                galleryWidthProp={50}
            />
            <div className="flex flex-col md:items-start items-center md:ml-4 lg:ml-0 lg:mt-0 mt-12 md:mt-0">
                <h2 className="lg:text-[32px] text-[24px] font-medium">Veja Outros Equipamentos</h2>
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
                        price="R$ 165.000"
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
    );
}
