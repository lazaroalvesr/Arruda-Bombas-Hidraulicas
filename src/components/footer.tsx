"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import {  Youtube, Instagram, Facebook } from "lucide-react"

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
        <footer className="w-full bg-white border-t">
            <div className="max-w-7xl px-4 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <Link href="/">
                        <div className=" flex items-center">
                            <div className="h-12 px-4 lg:text-base text-sm w-64 lg:w-full bg-blue-900 rounded flex items-center justify-center text-white font-bold">
                                ARRUDA BOMBAS HIDRAÚLICAS
                            </div>
                        </div>
                    </Link>

                    <div className="space-y-4 pl-2 lg:pl-0">
                        <h3 className="text-lg font-semibold text-[#00238C]">Empresa</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/bomba-de-concreto" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Bomba de concreto
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    O Que é Bomba de Concreto?
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 pl-2 lg:pl-0">
                        <h3 className="text-lg font-semibold text-[#00238C]">Equipamentos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/p700" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    P700
                                </Link>
                            </li>
                            <li>
                                <Link href="/carretinha-pequena" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Carretinha Pequena
                                </Link>
                            </li>
                            <li>
                                <Link href="/carretinha-rebocavel" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Carretinha rebocável
                                </Link>
                            </li>
                            <li>
                                <Link href="/caminhao-multimix" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Caminhão MultiMix
                                </Link>
                            </li>
                            <li>
                                <Link href="/betonbomba" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    Betonbomba
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6 pl-2 md:-mt-12 lg:-mt-0 lg:pl-0 w-full grid md:grid-cols-2 lg:grid-cols-1 items-center lg:gap-0 md:gap-32">
                        <div className="w-40">
                            <h3 className="text-lg font-semibold text-[#00238C] mb-4">Redes Sociais</h3>
                            <div className="flex space-x-4">
                                <Link href="https://www.youtube.com/@arrudabombas" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                    <Youtube className="w-8 h-8"  />
                                </Link>
                                <Link href="https://www.instagram.com/arrudabombashidraulicas7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00238C] transition-colors">
                                <Instagram className="w-8 h-8" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-[#00238C] transition-colors" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-8 h-8"  />
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-2 w-72">
                            <h3 className="text-lg font-semibold text-[#00238C]">Endereço</h3>
                            <div className="flex items-start space-x-2 text-gray-600">
                                <address className="not-italic">
                                    Rua Pedro Coelho, Nº 314<br />
                                    Bairro Chácaras Fazenda Coelho<br />
                                    Cidade Hortolândia – SP
                                </address>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-gray-600">
                        <p>Copyright ©{anoCriacao} Arruda Bombas Hidráulicas. Todos os direitos reservados</p>
                        <p>Criado por: Lázaro Alves R</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}