import Image from "next/image"
import Link from "next/link"

export const FooterPage = () => {
    return (
        <footer className="bg-gradient-to-r from-[#253043] to-[#35558E]">
            <div className="lg:max-w-[1175px] ml-4 lg:ml-auto md:flex-row gap-8 lg:gap-0 m-auto flex lg:flex-row flex-col lg:justify-between md:justify-between py-5 items-start pt-[30px] lg:pt-[79px] border-b pb-8 border-[#CED0D6]">
                <Link href="/">
                    <Image
                        src="/icons/logo.png"
                        alt="Icone Arruda bombas"
                        width={219}
                        height={72}
                        className="w-32 lg:w-[149px]"
                    />
                </Link>
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[22px] text-white">Empresa</h5>
                    <nav>
                        <ul>
                            <Link href="/equipamentos">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">Equipamentos</li>
                            </Link>
                            <Link href="/#contato">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">Contato</li>
                            </Link>
                            <Link href="/o-que-e-bomba-de-concreto">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">O Que é Bomba de Concreto?</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[22px] text-white">Equipamentos</h5>
                    <nav>
                        <ul>
                            <Link href="/equipamentos/p700">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">P700</li>
                            </Link>
                            <Link href="/equipamentos/carretinha-pequena">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">Carretinha Pequena</li>
                            </Link>
                            <Link href="/equipamentos/carretinha-rebocavel">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white">Carretinha rebocável</li>
                            </Link>
                            <Link href="/equipamentos/multimix">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white w-[205px]">Caminhão MultiMix</li>
                            </Link>
                            <Link href="/equipamentos/betonbomba">
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] hover:text-white w-[205px]">Betonbomba</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-[22px] text-white">Redes Sociais</h5>
                        <nav className="flex">
                            <Image
                                src="/icons/brand-youtube.png"
                                alt="Icone youtube"
                                width={40}
                                height={40}
                            />
                            <Image
                                src="/icons/brand-instagram.png"
                                alt="Icone instagram"
                                width={40}
                                height={40}
                            />
                            <Image
                                src="/icons/brand-facebook.png"
                                alt="Icone facebook"
                                width={40}
                                height={40}
                            />
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="font-semibold text-[22px] text-white">Endereço</h5>
                        <nav>
                            <ul>
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6]">Rua Pedro Coelho, N° 314</li>
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6] w-[205px]">Bairro Chácaras Fazenda Coelho</li>
                                <li className="text-[16px] md:text-[14px] text-[#CED0D6]">Cidade Hortolândia - SP</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex justify-between md:mx-4 ml-2 lg:ml-auto lg:mx-auto gap-4 md:flex-row max-w-[1175px] m-auto py-3 lg:flex-row flex-col">
                <p className="text-[12px] text-[#CED0D6]">Copyright © 2021 Arruda Bombas Hidráulicas. Todos os direitos reservados</p>
                <p className="text-[12px] text-[#CED0D6]">Criado por : Lázaro Alves R</p>
            </div>
        </footer >
    )
}