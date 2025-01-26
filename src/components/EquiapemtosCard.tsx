import { EquipamentosCardProps } from "@/lib/interface"
import { Galeria } from "./GaleriaFotos"
import { LiEquipamentoUnico } from "./liEquipamentoUnico"
import Link from "next/link"

export const EquipamentosCard = ({ descricao, images, preco, especificacoes, tituloEquipamento, motor, galleryWidthProp }: EquipamentosCardProps) => {
    return (
        <section className="max-w-[1175px] flex m-auto items-start flex-col lg:my-[79px] md:my-[70px]">
            <div className="flex lg:flex-row md:flex-row flex-col w-full lg:gap-[21px]">
                <Galeria images={images} galleryWidthProp={galleryWidthProp} />
                <div className="lg:w-[574px] md:w-[370px] flex-col flex gap-[25px] lg:mx-2  mx-5 mt-[60px] lg:mt-0 md:mt-0">
                    <div>
                        <h2 className="font-bold lg:text-[36px] text-[32px]">{tituloEquipamento}</h2>
                        <p className="font-bold lg:text-[36px] text-[24px]">{preco}</p>
                    </div>
                    <div>
                        <p className="font-normal lg:text-base/7 md:text-sm text-[#777]">{descricao}</p>
                        <span className="bg-[#DCDDDF] w-full h-0.5 flex my-[19px]"></span>
                        {motor ? (
                            <div>
                                <h4>Opções de motor:</h4>
                                <p className="flex items-center gap-2 mt-[14px]">
                                    <input
                                        type="radio"
                                        id="motor1"
                                        name="motor"
                                        value={motor.motor1}
                                        className="w-[24px] h-[24px] border-[#A0A0A0] rounded-md"
                                    />
                                    <label htmlFor="motor1" className="text-sm">{motor.motor1}</label>
                                </p>
                                <p className="flex items-center gap-2 mt-[14px]">
                                    <input
                                        type="radio"
                                        id="motor2"
                                        name="motor"
                                        value={motor.motor2}
                                        className="w-[24px] h-[24px] border-[#A0A0A0] rounded-md"
                                    />
                                    <label htmlFor="motor2" className="text-sm">{motor.motor2}</label>
                                </p>
                            </div>
                        ) : null}
                    </div>
                    <Link href="/#contato">
                        <button className="bg-blue-600 w-full text-[#f7f7f7f7] rounded-md lg:w-[271px] h-[54px]">Solicitar Orçamento</button>
                    </Link>
                </div>
            </div>
            <div className="flex w-full mt-[80px] flex-col px-4">
                <div className="flex text-center items-center border-b-2 border-black w-full justify-center m-auto">
                    <h2 className="font-medium text-[24px]">Especificações</h2>
                </div>
                <div className="border border-[#DCDDDF] mx-1 rounded-md mt-[30px]">
                    <ul className="px-12 lg:py-12 py-4 flex gap-5 flex-col">
                        {especificacoes.map((item, index) => (
                            <LiEquipamentoUnico key={index} titulo={item.tituloEspecificacoes} text={item.textEspecificacoes} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}