import Link from "next/link"
import { CardEquipamentos } from "./cardEquipamentos"

export const EquipamentosPage = () => {
    return (
        <section className="max-w-[1444px] flex m-auto items-center justify-center lg:my-[120px] my-[60px]" id="equipamento">
            <div className="flex flex-col items-center ">
                <h1 className="text-[#001659] font-semibold text-[28px] text-center lg:text-[32px] ml-4 lg:ml-0">Nossos <span className="text-[#35558E]">Equipamentos!</span></h1>
                <div className="flex pt-[52px] lg:w-full md:w-[800px] justify-center md:gap-[20px] md:flex-wrap lg:flex-row lg:gap-[21px] flex-col md:flex-row gap-y-8 lg:gap-y-0">
                    <CardEquipamentos
                        href="/bomba-de-concreto/carretinha-pequena"
                        src="/img/eletrica.png"
                        title="Carretinha Pequena"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/bomba-de-concreto/carretinha-rebocavel"
                        src="/img/rebocavel.png"
                        title="Carretinha Rebocável"
                        price="A consultar"
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
                <Link href="/equipamentos">
                    <button className="bg-[#001659] mt-[53px] hover:scale-105 cursor-pointer transition-transform duration-300 text-white rounded-[10px] w-[282px] h-[48px] text-[22px]">Ver mais</button>
                </Link>
            </div>
        </section>
    )
}

//                 <div className="flex pt-[52px] lg:w-full md:w-[800px] justify-center md:gap-[20px] md:flex-wrap lg:flex-row lg:gap-[21px] flex-col md:flex-row gap-y-8 lg:gap-y-0">
