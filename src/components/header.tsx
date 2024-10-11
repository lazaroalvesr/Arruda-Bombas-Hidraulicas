"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiHeader } from "./LiHeader";

export const HeaderPage = () => {
    const [ativo, setAtivo] = useState(false);

    function toggle() {
        setAtivo(!ativo);
    }

    function closeMenu() {
        setAtivo(false);
    }

    return (
        <header className="bg-gradient-to-r from-[#253043] to-[#35558E]">
            <div className="lg:max-w-[1175px] m-auto flex lg:justify-between md:justify-between py-5 items-center">
                <Link href="/">
                    <div className="w-32 ml-5 lg:ml-0 lg:w-[149px]">
                        <Image
                            src="/icons/logo.png"
                            alt="Icone Arruda bombas"
                            width={219}
                            height={72}
                            className="w-32 lg:ml-0 lg:w-[149px]"
                        />
                    </div>
                </Link>
                <button
                    className="lg:hidden md:hidden absolute right-5"
                    onClick={toggle}
                    aria-label="Botão de abrir Menu Mobile"
                >
                    {ativo ? (
                        <Image src="/icons/x.svg" alt="Ícone fechar menu" width={40} height={40} />
                    ) : (
                        <Image src="/icons/menu-deep.svg" alt="Ícone abrir menu" width={40} height={40} />
                    )}
                </button>
                <nav>
                    <ul
                        className={`flex gap-x-7 md:mr-9 lg:h-auto md:h-auto ${ativo ? 'animeLeftMobile bg-gradient-to-r w-full top-[80px] justify-center items-center h-80 from-[#253043] to-[#35558E] absolute flex flex-col left-0' : "h-0 overflow-hidden"
                            }`}
                        onClick={closeMenu} 
                    >
                        <LiHeader href="/" nome="Home" />
                        <LiHeader href="/bomba-de-concreto" nome="Bomba de concreto" />
                        <LiHeader href="/#contato" nome="Contato" />
                        <LiHeader href="/o-que-e-bomba-de-concreto" nome="O Que é Bomba de Concreto?" />
                    </ul>
                </nav>
            </div>
        </header>
    );
};
