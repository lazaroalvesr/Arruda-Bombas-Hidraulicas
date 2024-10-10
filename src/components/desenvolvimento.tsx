import Image from "next/image"
import Link from "next/link"

export const DesenvolvimentoPage = () => {
    return (
        <section className="relative">
            <Image
                src="/img/desenvolvimento.png"
                alt="Desenvolvimento"
                width={1512}
                height={538}
                className="w-full lg:h-[538px] h-[400px] object-cover md:h-[360px]"
            />
            <div className="lg:top-24 top-8 right-3 lg:right-20 rounded-xl absolute lg:w-[721px] md:w-[521px] lg:h-[356px] bg-[#0f182878]">
                <div className="lg:p-8 p-6 flex flex-col gap-8">
                    <h3 className="lg:text-[24px] font-bold text-white">Desenvolvimento de Equipamentos Sob Medida</h3>
                    <p className="text-white lg:text-[17px] text-[12px]">Na Arruda Bombas, projetamos cada equipamento com precisão para atender às necessidades específicas do seu projeto. Com engenharia avançada e inovação, garantimos eficiência máxima no bombeamento de concreto usinado. Nossos equipamentos são testados e aperfeiçoados para oferecer desempenho superior em qualquer condição.</p>
                    <Link href="/#contato">
                        <button className="flex items-center bg-[#001659] text-white rounded-[16px] w-[220px] text-[14px] lg:w-[260px] justify-center gap-4 border-white lg:text-[20px] border py-4">
                            <span>
                                <Image 
                                src="/img/WhatsApp_Icon.png"
                                alt="Icone do Whatsapp"
                                width={34}
                                height={34}
                                />
                            </span>
                            Fazer Orçamento
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}