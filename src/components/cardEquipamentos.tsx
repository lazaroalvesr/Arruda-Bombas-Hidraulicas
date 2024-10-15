import { CardEquipamentosProps } from "@/lib/interface"
import Image from "next/image"
import Link from "next/link"

export const CardEquipamentos = ({ href, price, src, title }: CardEquipamentosProps) => {
    return (
        <div className="w-[345px] cursor-pointer h-[573px] border-2 border-[#BEBFC3] rounded-[20px]">
            <div className="flex items-center justify-center flex-col m-auto pt-[26px]">
                <div className="border-2 flex items-center border-[#BEBFC3] rounded-[20px] w-[292px] h-[328px]">
                    <Image
                        src={src}
                        alt="Foto do equipamento"
                        width={292}
                        height={328}
                    />
                </div>
                <div className="flex flex-col pt-[13px]">
                    <h2 className="text-[24px] font-bold text-[#001659]">{title}</h2>
                    <div className="pt-[9px]">
                        <span>a partir:</span>
                        <p className="text-[27px] pt-2 font-bold text-[#001659]">{price}</p>
                    </div>
                    <div className="pt-[17px] flex gap-[20px]">
                        <Link href="/#contato">
                            <button className="bg-[#001659] hover:scale-105 cursor-pointer transition-transform duration-300 text-white rounded-[10px] w-[136px] h-[48px]">Quero Essa!</button>
                        </Link>
                        <Link href={href}>
                            <button className="bg-white hover:scale-105 cursor-pointer transition-transform border-[#001659] border-2 duration-300 text-black rounded-[10px] w-[136px] h-[48px]">Saiba Mais</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
