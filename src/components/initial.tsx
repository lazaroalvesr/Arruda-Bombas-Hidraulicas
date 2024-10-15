import Image from "next/image"
import Link from "next/link"

export const IntialPage = () => {
    return (
        <section className="w-full">
            <div className="lg:max-w-[1175px] ml-5 lg:ml-auto m-auto flex pt-[58px] items-center justify-between pb-12">
                <div className="lg:w-[580px] w-[340px] h-[360px]">
                    <h1 className="lg:text-[44px] text-[32px] text-[#001659] font-semibold">Bombeamento de Alta Precisão</h1>
                    <p className="lg:text-[18px]  text-[16px] pt-[20px] text-[#001659]">Na Arruda Bombas, oferecemos soluções avançadas para o bombeamento de concreto usinado. Descubra como nossa tecnologia pode elevar seu projeto a um novo nível. Entre em contato e encontre a melhor solução do mercado.</p>
                    <div className="pt-[30px] flex lg:gap-5 gap-4  h-[90px]">
                        <Link href="#contato">
                            <button className="bg-[#001659] text-white rounded-[14px] w-full lg:w-[223px] text-[15px] lg:text-[18px] border border-transparent py-4 lg:px-6 px-4">
                                Fazer Orçamento
                            </button>
                        </Link>
                        <Link href='/Catálogo_Arruda_Bombas.pdf' target="_blank" download>
                            <button className="border-[#001659] border-2 text-[#001659] w-full lg:w-[223px] text-[15px] lg:text-[18px] duration-300 ease-in-out py-4 lg:px-6 px-4 rounded-[14px]">
                                Baixar Catálogo
                            </button>
                        </Link>
                    </div>
                </div>
                <Image
                    src="/img/img_Initial.png"
                    alt="Foto Carretinha elétrica"
                    width={400}
                    height={553}
                    className="lg:flex hidden md:flex lg:w-[400px] md:w-[309px] md:mr-8 w-auto h-auto"
                />
            </div>
        </section>
    )
}