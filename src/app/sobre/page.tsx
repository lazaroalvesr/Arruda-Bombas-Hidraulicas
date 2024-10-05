import Image from "next/image";

export default function SobrePage() {
    return (
        <section className="max-w-[1175px] flex m-auto items-start  lg:my-[80px] my-[60px]" id="equipamento">
            <div className="flex flex-col">
                <h1 className="text-[#35558E] pl-4 font-semibold text-[28px] items-start lg:text-[32px]">Sobre</h1>
                <p className="lg:text-[20px] lg:pt-[45px] pt-[20px] pl-4">A Arruda Bombas Hidráulicas é uma referência no setor de soluções de bombeamento de concreto no Brasil. Com uma
                    trajetória consolidada e uma longa experiência, destacamo-nos como líderes nacionais na fabricação e fornecimento
                    de equipamentos hidráulicos de alta qualidade.
                </p>
                <div className="bg-[#35558E] mt-[48px] lg:rounded-[10px] w-full">
                    <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:gap-20 pb-8  items-center lg:py-3">
                        <div className="lg:w-[590px] p-8 flex flex-col gap-[20px]">
                            <p className="text-white text-[16px] font-light"><span className="text-white font-bold">Sediada em Hortolândia, São Paulo</span>, a Arruda
                                Bombas de Concreto Hidráulicas está estrategicamente
                                localizada em uma das regiões mais desenvolvidas do Brasil.
                                Com uma infraestrutura logística de ponta, nossa sede está situada na <span className="text-white font-bold">Rua Pedro Coelho,
                                    314, Bairro Chácaras Fazenda Coelho</span>, a aproximadamente 40 minutos do Aeroporto Internacional de Viracopos,
                                em Campinas/SP, um dos mais importantes do país.
                            </p>

                        </div>
                        <Image
                            src="/img/map.png"
                            alt="Foto mapa"
                            width={484}
                            height={372}
                            className="px-4 lg:px-a"
                        />
                    </div>
                </div>
                <div className="flex flex-col pt-[48px] gap-[20px] pl-4">
                    <p className="text-black lg:text-[20px]">Um dos grandes diferenciais da <span className="text-black font-bold">Arruda
                        Bombas de Concreto Hidráulicas</span> é sua equipe experiente
                        e altamente qualificada. Nossos profissionais são especializados no desenvolvimento de equipamentos inovadores e confiáveis,
                        empregando as mais avançadas técnicas de engenharia para garantir padrões de qualidade excepcionais.
                    </p>
                    <p className="lg:text-[20px]">Todos os nossos equipamentos passam por rigorosos testes de qualidade, assegurando que oferecemos
                        máquinas superiores para o canteiro de obras, com soluções tecnológicas cada vez mais eficientes, seguras e inovadoras.
                    </p>
                    <p className="text-black lg:text-[20px] "><span className="text-black font-bold">Arruda
                        Bombas de Concreto Hidráulicas</span> está sempre evoluindo para atender rapidamente às demandas do mercado da construção,
                        com um compromisso firme com o suporte pós-venda e a superação das expectativas de nossos clientes.
                    </p>
                </div>
                <div className="bg-[#35558E] mt-[48px]  lg:rounded-[10px]">
                    <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:gap-4 lg:p-11 p-8 items-center">
                        <Image
                            src="/img/foto_sobre.png"
                            alt="Foto"
                            width={480}
                            height={259}
                            className="pb-4 lg:pb-0"
                        />
                        <div>
                            <h2 className="text-[28px] font-bold text-white">Política de Qualidade</h2>
                            <div className="flex flex-col gap-4 pt-[25px]">
                                <p className="text-white text-[16px] font-light"> <span className="text-white font-bold">Arruda
                                    Bombas de Concreto Hidráulicas</span>, consideramos a Política de Qualidade essencial para o sucesso contínuo da empresa.
                                    Nossos princípios fundamentais incluem a adoção de processos tecnológicos avançados e alinhados com as melhores práticas
                                    do setor da construção civil.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col md:flex-row items-center pl-4 lg:pl-0 pt-[48px] justify-between ">
                    <div className="flex flex-col lg:w-[679px] md:w-[420px] pr-2 lg:pr-0">
                        <h2 className="text-black font-bold text-[22px] lg:text-[32px]">Estamos Sempre Avançando!</h2>
                        <p className="text-[20px] pt-[12px]">Com estratégias robustas e eficazes, expandimos nossa empresa e evoluímos constantemente
                            para fornecer as melhores soluções em equipamentos para a construção civil.</p>
                    </div>
                    <Image
                        src="/img/grafico.png"
                        alt="Icone grafico"
                        width={233}
                        height={185}
                        className="md:pr-4"
                    />
                </div>
            </div>
        </section>
    )
}