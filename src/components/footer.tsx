"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import Image from "next/image";
import { FooterSection } from "./FooterSection";
import { FooterSectionInfos } from "./footerSectionInfos";

const footerLinksEmpresa = [
    { href: '/bomba-de-concreto', nome: 'Bomba de concreto' },
    { href: '/sobre', nome: 'O Que é Bomba de Concreto?' },
    { href: '#contato', nome: 'Contato' },
];

const footerLinksEquipamentos = [
    { href: '/bomba-de-concreto/p700', nome: 'P700' },
    { href: '/bomba-de-concreto/carretinha-pequena', nome: 'Carretinha Pequena' },
    { href: '/bomba-de-concreto/carretinha-rebocavel', nome: 'Carretinha rebocável' },
    { href: '/bomba-de-concreto/multimix', nome: 'Caminhão MultiMix' },
    { href: '/bomba-de-concreto/betonbomba', nome: 'Betonbomba' },
]

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
                        <div className="flex items-center lg:justify-center lg:gap-4 gap-2 lg:w-72">
                            <Image
                                src="/icon.png"
                                alt="Icone concreto"
                                width={30}
                                height={30}
                                className="flex" />
                            <h1 className="font-bold text-[#1f3b8b] lg:w-full md:w-72 text-sm sm:text-base">ARRUDA BOMBAS HIDRAÚLICAS</h1>
                        </div>
                    </Link>
                    <FooterSection
                        titulo="Empresa"
                        links={footerLinksEmpresa}
                    />
                    <FooterSection
                        titulo="Equipamentos"
                        links={footerLinksEquipamentos}
                    />
                    <FooterSectionInfos />
                </div>
                <div className="border-t mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm text-gray-600">
                        <p>Copyright ©{anoCriacao} Arruda Bombas Hidráulicas. Todos os direitos reservados</p>
                        <Link href="https://www.lazaroalvesr.com/"  rel="noopener noreferrer" target="_blank">Criado por: Lázaro Alves R</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}