"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiHeader } from "./LiHeader";
import { usePathname } from "next/navigation";

export const HeaderPage = () => {
  const [ativo, setAtivo] = useState(false);
  const pathname = usePathname();

  function toggle() {
    setAtivo(!ativo);
  }

  function closeMenu() {
    setAtivo(false);
  }

  return (
    <header className="border-b border-black">
      <div className="max-w-7xl lg:px-7  m-auto flex lg:justify-between md:justify-between py-5 items-center">
        <Link href="/">
          <div className=" flex items-center ml-4 lg:ml-0">
            <div className="h-12 px-4 lg:text-base text-sm w-64 lg:w-full bg-blue-900 rounded flex items-center justify-center text-white font-bold">
              ARRUDA BOMBAS HIDRAÚLICAS
            </div>
          </div>
        </Link>
        <button
          className="lg:hidden  absolute right-5"
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
            className={`flex lg:h-auto ${ativo ? 'animeLeftMobile bg-white w-full z-40 top-[80px] justify-center items-center h-80 from-[#253043] to-[#35558E] absolute flex flex-col left-0' : "h-0 overflow-hidden"
              }`}
            onClick={closeMenu}
          >
            <LiHeader href="/" nome="Inicio" isActive={pathname === '/'} />
            <LiHeader href="/bomba-de-concreto" nome="Bomba de concreto" isActive={pathname === '/bomba-de-concreto'} />
            <LiHeader href="/o-que-e-bomba-de-concreto" nome="O Que é Bomba de Concreto?" isActive={pathname === '/o-que-e-bomba-de-concreto'} />
            <LiHeader href="/#contato" nome="Contato" isActive={pathname === '/#contato'} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

/*
 <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="h-12 px-4 bg-blue-900 rounded flex items-center justify-center text-white font-bold">
              ARRUDA BOMBAS HIDRAÚLICAS
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Início
              </Link>
              <Link href="/bomba-de-concreto" className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Bomba de concreto
              </Link>
              <Link href="/o-que-e" className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                O Que é Bomba de Concreto?
              </Link>
              <Link href="/contato" className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
*/