import Link from "next/link"
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export const FooterSectionInfos = () => {
    return (
        <div className="space-y-6 pl-2 md:-mt-12 lg:-mt-0 lg:pl-0 w-full grid md:grid-cols-2 lg:grid-cols-1 items-center lg:gap-0 md:gap-32">
            <div className="w-40">
                <h3 className="text-lg font-semibold text-[#00238C] mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                    <Link href="https://www.youtube.com/@arrudabombas" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00238C] transition-colors">
                        <FiYoutube className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com/arrudabombashidraulicas7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00238C] transition-colors">
                        <FaInstagram className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-[#00238C] transition-colors" target="_blank" rel="noopener noreferrer">
                        <FiFacebook className="w-6 h-6" />
                    </Link>
                </div>
            </div>
            <div className="space-y-2 w-72">
                <h3 className="text-lg font-semibold text-[#00238C]">Endereço</h3>
                <div className="flex items-start space-x-2 text-gray-600 text-sm">
                    <address className="not-italic">
                        Rua Pedro Coelho, Nº 314<br />
                        Bairro Chácaras Fazenda Coelho<br />
                        Cidade Hortolândia – SP
                    </address>
                </div>
            </div>

        </div>
    )
}