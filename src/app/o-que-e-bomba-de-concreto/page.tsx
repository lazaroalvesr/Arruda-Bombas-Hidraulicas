import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'O Que é Bomba de Concreto ? | Arruda Bombas Hidráulicas',
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

export default function OqueBombaDeConcreto() {
    return (
        <section className="max-w-[1175px] flex m-auto items-start  lg:my-[80px] my-[60px]" id="equipamento">
            <div className="flex flex-col ml-4">
                <h1 className="text-[#35558E]  font-bold text-[24px] items-start lg:text-[32px]">
                    O que é Bomba de Concreto?</h1>
                <p className="lg:text-[20px] pt-4 ">
                    <span className="text-[#35558E] font-semibold text-[23px]">Definição: </span>
                    A bomba de concreto é um equipamento essencial na
                    construção civil, projetado para transportar e lançar concreto de maneira eficiente e rápida.
                    Com sua capacidade de bombear grandes volumes, ela é fundamental em obras que exigem precisão
                    e agilidade na aplicação do material.</p>
                <div className="flex gap-8 lg:flex-row flex-col md:flex-row">
                    <Image
                        src="/img/P700/P700_1.png"
                        alt="Bomba de concreto p700"
                        width={400}
                        height={400}
                        className="mt-6 lg:w-[400px] w-[340px]"
                    />
                    <Image
                        src="/img/P700/P700_2.png"
                        alt="Bomba de concreto p700"
                        width={400}
                        height={400}
                        className="mt-6 lg:w-[400px] w-[340px]"
                    />
                </div>
                <p className="lg:text-[20px] pt-12 ">
                    <span className="text-[#35558E] font-semibold text-[23px]">Como Funciona: </span>
                    As bombas de concreto operam através de um sistema hidráulico que utiliza pistões ou parafusos.
                    O concreto é colocado em um cilindro e, ao ativar a bomba, é forçado a passar por tubulações até
                    o local desejado. A pressão gerada garante um fluxo contínuo, permitindo que o concreto chegue
                    rapidamente ao ponto de aplicação.
                </p>
                <div className="pt-6">
                    <span className="text-[#35558E] font-semibold text-[23px]">Vantagens: </span>
                    <ul className="mt-4 flex flex-col gap-4 text-[20px]">
                        <li>
                            <span className="font-bold text-[20px]">Eficiência: </span>
                            Reduz significativamente o tempo de aplicação do concreto, acelerando o cronograma da obra.
                        </li>
                        <li>
                            <span className="font-bold text-[20px]">Acesso Difícil: </span>
                            Permite o bombeamento em áreas de difícil acesso, como andares altos ou locais apertados.
                        </li>
                        <li>
                            <span className="font-bold text-[20px]">Menos Desperdício: </span>
                            Minimiza a perda de material, garantindo que o concreto chegue em boas condições ao ponto de aplicação.
                        </li>
                        <li>
                            <span className="font-bold text-[20px]">Melhor Acabamento: </span>
                            Proporciona uma aplicação mais uniforme e precisa, resultando em acabamentos de maior qualidade.
                        </li>
                    </ul>
                </div>
                <div className="pt-6">
                    <div className="flex lg:items-center gap-8 lg:flex-row flex-col">
                        <span className="text-[#35558E] font-semibold text-[23px]">Aplicações:  </span>
                        <p className="text-[20px]">As bombas de concreto são utilizadas em uma ampla variedade de projetos, incluindo</p>
                    </div>
                    <ul className="mt-4 flex flex-col gap-4 text-[20px]">
                        <li>
                            <span className="font-semibold">Edificações: </span>
                            Utilizadas em construções residenciais, comerciais e industriais
                        </li>
                        <li>
                            <span className="font-semibold">Obras de Infraestrutura: </span>
                            Essenciais em projetos como pontes, viadutos e túneis, onde grandes volumes de concreto são necessários.
                        </li>
                        <li>
                            <span className="font-semibold">Estruturas de Concreto Armado: </span>
                            Ideais para a construção de pilares, lajes e fundações que exigem precisão na colocação do material.
                        </li>
                        <li>
                            <span className="font-semibold">Reformas e Manutenções: </span>
                            Usadas em projetos de reforma onde o espaço é limitado e a precisão é crucial.
                        </li>
                    </ul>
                </div>
                <div className="pt-6">
                    <span className="text-[#35558E] font-semibold text-[23px]">Conclusão:  </span>
                    <p className="text-[20px]"> A bomba de concreto é um equipamento vital na construção civil, contribuindo para a eficiência e
                        qualidade dos projetos. Sua variedade de tipos e funcionalidades permite que sejam utilizadas em
                        diversas aplicações, tornando-as indispensáveis para empreiteiros e engenheiros.
                    </p>
                </div>
                <div className="pt-6">
                    <Link href="/#contato">
                        <button className="bg-[#001659] text-white rounded-[16px] w-[340px] text-[15px] lg:w-[223px] lg:text-[20px] border border-transparent py-4 ">
                            Fazer Orçamento
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}