"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { LiFooter } from "./LiFooter";

export const FooterPage = () => {

    const [anoCriacao, setAnoCriacao] = useState("");

    useEffect(() => {
        const obterAnoAtual = () => {
            const data = new Date();
            return data.getFullYear().toString();
        };

        setAnoCriacao(obterAnoAtual());
    }, []);

    return (
        <footer className="border-t border-black">
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
                    <h1 className="font-semibold text-[22px] text-black">Empresa</h1>
                    <nav>
                        <ul>
                            <LiFooter href="/bomba-de-concreto" nome="Bomba de concreto" />
                            <LiFooter href="/#contato" nome="Contato" />
                            <LiFooter href="o-que-e-bomba-de-concreto" nome="O Que é Bomba de Concreto?" />
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-[22px] text-black">Equipamentos</h1>
                    <nav>
                        <ul>
                            <LiFooter href="/bomba-de-concreto/p700" nome="P700" />
                            <LiFooter href="/bomba-de-concreto/carretinha-pequena" nome="Carretinha Pequena" />
                            <LiFooter href="/bomba-de-concreto/carretinha-rebocavel" nome="Carretinha rebocável" />
                            <LiFooter href="/bomba-de-concreto/multimix" nome="Caminhão MultiMix" />
                            <LiFooter href="/bomba-de-concreto/betonbomba" nome="Betonbomba" />
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-[22px] text-black">Redes Sociais</h1>
                        <nav className="flex">
                            <Image
                                src="/icons/youtube.svg"
                                alt="Icone youtube"
                                width={40}
                                height={40}
                            />
                            <Image
                                src="/icons/instagram.svg"
                                alt="Icone instagram"
                                width={40}
                                height={40}
                            />
                            <Image
                                src="/icons/facebook.svg"
                                alt="Icone facebook"
                                width={40}
                                height={40}
                            />
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[22px] text-black">Endereço</h1>
                        <nav>
                            <ul>
                                <li className="text-[16px] md:text-[14px] to-black">Rua Pedro Coelho, N° 314</li>
                                <li className="text-[16px] md:text-[14px] to-black w-[205px]">Bairro Chácaras Fazenda Coelho</li>
                                <li className="text-[16px] md:text-[14px] to-black">Cidade Hortolândia - SP</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex justify-between md:mx-4 ml-2 lg:ml-auto lg:mx-auto gap-4 md:flex-row max-w-[1175px] m-auto py-3 lg:flex-row flex-col">
                <p className="text-[12px] text-black">Copyright ©{anoCriacao} Arruda Bombas Hidráulicas. Todos os direitos reservados</p>
                <p className="text-[12px] text-black">Criado por: <Link href="https://www.lazaroalvesr.com/" target="_blank">Lázaro Alves R</Link></p>
            </div>
        </footer>
    )
}