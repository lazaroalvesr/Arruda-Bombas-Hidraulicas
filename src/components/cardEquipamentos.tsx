import { CardEquipamentosProps } from "@/lib/interface"
import Image from "next/image"
import Link from "next/link"

export const CardEquipamentos = ({ href, price, src, title }: CardEquipamentosProps) => {
    const whatsappContact = () => {
        const message = `Oi, tudo bem? Gostaria de saber mais sobre a ${title}. Vim pelo site Arruda Bombas Hidráulicas.`;
        const phone = "5519993136999";
        return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="w-full max-w-[345px] h-auto border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white">
            <div className="bg-gray-100 p-6 flex items-center justify-center min-h-[280px]">
                <Image
                    src={src}
                    alt={title}
                    width={292}
                    height={328}
                    className="object-contain"
                />
            </div>

            <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-[#1e3a8a]">
                    {title}
                </h2>

                <div>
                    <span className="text-sm text-gray-600">a partir de:</span>
                    <p className="text-3xl font-bold text-green-600 mt-1">
                        {price}
                    </p>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                    <a
                        href={whatsappContact()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md text-center transition-all duration-300 transform hover:scale-105"
                    >
                        💬 Falar com Vendedor
                    </a>

                    <Link href={href}>
                        <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                            📄 Saiba Mais
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}