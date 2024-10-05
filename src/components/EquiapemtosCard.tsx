import { EquipamentosCardProps } from "@/lib/interface"
import { Galeria } from "./GaleriaFotos"
import { LiEquipamentoUnico } from "./liEquipamentoUnico"
import Link from "next/link"

export const EquipamentosCard = ({ descricao, images, preco, especificacoes, tituloEquipamento, motor, galleryWidthProp }: EquipamentosCardProps) => {
    return (
        <section className="max-w-[1175px]  flex m-auto items-start flex-col  lg:my-[79px] md:my-[70px]">
            <div className="flex lg:flex-row md:flex-row flex-col w-full lg:gap-[21px]">
                <Galeria images={images} galleryWidthProp={galleryWidthProp} />
                <div className="lg:w-[574px] md:w-[370px] flex-col flex gap-[25px] mx-2 mt-[60px] lg:mt-0 md:mt-0">
                    <div>
                        <h2 className="font-bold lg:text-[36px] text-[32px]">{tituloEquipamento}</h2>
                        <p className="font-bold lg:text-[36px] text-[24px]">{preco}</p>
                    </div>
                    <div>
                        <p className="font-medium lg:text-[20px] md:text-sm">{descricao}</p>
                        <span className="bg-[#DCDDDF] w-full h-0.5 flex my-[19px]"></span>
                        {motor ? (
                            <div>
                                <h4>Opções de motor:</h4>
                                <p className="flex items-center gap-2 mt-[14px]">
                                    <span className="border w-[30px] h-[30px] border-[#A0A0A0] rounded-md"></span>
                                    {motor.motor1}
                                </p>
                                <p className="flex items-center gap-2 mt-[14px]">
                                    <span className="border w-[30px] h-[30px] border-[#A0A0A0] rounded-md"></span>
                                    {motor.motor2}
                                </p>
                            </div>
                        ) : null}
                    </div>
                    <Link href="/#contato">
                        <button className="bg-[#253043] w-full text-white rounded-md lg:w-[271px] h-[54px]">Solicitar Orçamento</button>
                    </Link>
                </div>
            </div>
            <div className="flex w-full mt-[80px] flex-col px-4">
                <div className="flex text-center items-center border-b-2 border-black w-full justify-center m-auto">
                    <h2 className="font-medium text-[24px]">Especificações</h2>
                </div>
                <div className="border border-[#DCDDDF] mx-1 rounded-md mt-[30px]">
                    <ul className="px-8 lg:py-8 py-4 flex gap-8 flex-col">
                        {especificacoes.map((item, index) => (
                            <LiEquipamentoUnico key={index} titulo={item.tituloEspecificacoes} text={item.textEspecificacoes} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}