import { CardEquipamentos } from "@/components/cardEquipamentos";
import { EquipamentosCard } from "@/components/EquiapemtosCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Carretinha Pequena | Arruda Bombas Hidráulicas',
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

export default function CarretinhaPequena() {

    const images = [
        { id: 1, images: "/img/Pequena/Pequena_1.png" },
        { id: 2, images: "/img/Pequena/Pequena_2.png" },
        { id: 3, images: "/img/Pequena/Pequena_3.png" },
        { id: 4, images: "/img/Pequena/Pequena_4.png" },
        { id: 5, images: "/img/Pequena/Pequena_5.png" },
        { id: 6, images: "/img/Pequena/Pequena_6.png" },
    ];

    const especificacoes = [
        { tituloEspecificacoes: "Motor", textEspecificacoes: "Disponível com motor elétrico ou motor a diesel." },
        { tituloEspecificacoes: "Pressão", textEspecificacoes: "200 bar de pressão, garantindo uma operação eficiente para bombeamento." },
        { tituloEspecificacoes: "Especificações do Cilindro", textEspecificacoes: "Camisa de 0.60 m de comprimento e 150 mm de diâmetro; pistão de 0.60 m de comprimento." },
        { tituloEspecificacoes: "Alcance", textEspecificacoes: "Bombeamento horizontal de até 40 metros e vertical de até 6 metros." },
        { tituloEspecificacoes: "Aplicação", textEspecificacoes: "Ideal para transporte de brita 0 e 1." },
        { tituloEspecificacoes: "Sistema Avançado", textEspecificacoes: "Coxo com sistema tubo S, painel PP de fácil operação e radiador de óleo." },
        { tituloEspecificacoes: "Capacidade de Bombeamento", textEspecificacoes: "Capacidade de 5 m³ por hora, atendendo a operações de menor demanda." },
        { tituloEspecificacoes: "Observação", textEspecificacoes: "Fabricada em cima de uma carretinha emplacada." },
    ];

    return (
        <section className="max-w-[1175px] flex m-auto flex-col mt-12">
            <EquipamentosCard
                images={images}
                tituloEquipamento="Carretinha Pequena"
                descricao="A Carretinha Pequena é a solução ideal para bombeamento em espaços reduzidos. Compacta e robusta, ela oferece agilidade e eficiência, garantindo resultados confiáveis em pequenas obras. Com desempenho superior, é perfeita para quem busca praticidade sem comprometer a qualidade."
                preco="R$ 140.000"
                motor={{
                    motor1: "Motor Elétrico",
                    motor2: "Motor a Diesel"
                }}
                especificacoes={especificacoes}
                galleryWidthProp={20}
            />
            <div className="flex flex-col md:items-start items-center md:ml-4 lg:ml-0 lg:mt-0 mt-12 md:mt-0">
                <h2 className="lg:text-[32px] text-[24px] font-medium">Veja Outros Equipamentos</h2>
                <div className="flex lg:flex-row flex-col md:flex-row md:gap-5 gap-8 my-10 lg:my-20">
                    <CardEquipamentos
                        href="/equipamentos/p700"
                        src="/img/p700.png"
                        title="P700"
                        price="R$ 165.000"
                    />
                    <CardEquipamentos
                        href="/equipamentos/betonbomba"
                        src="/img/betonbomba.png"
                        title="Betonbomba"
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
