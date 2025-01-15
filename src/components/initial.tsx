"use client"

import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const IntialPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative  pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="sm:text-center lg:text-left lg:w-1/2" data-aos="fade-right">
                                <h1 className="text-4xl tracking-tight font-bold text-[#1e3a8a] lg:w-[520px] sm:text-5xl md:text-[64px]">Bombeamento de Alta Precisão</h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Na Arruda Bombas, oferecemos soluções avançadas para o bombeamento de concreto usinado. Descubra como nossa tecnologia pode elevar seu projeto a um novo nível. Entre em contato e encontre a melhor solução do mercado.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link href="#contato"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10">
                                            Fazer Orçamento
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link href="/Catálogo_Arruda_Bombas.pdf" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white border-blue-900 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                            Baixar Catálogo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:block hidden ml-12" data-aos="fade-left">
                                <div className="bg-blue-900 h-full rounded-lg shadow-xl flex items-center justify-center text-white text-xl">
                                    <Image
                                        src="/img/img_Initial.png"
                                        alt="Foto Carretinha elétrica"
                                        width={400}
                                        height={553}
                                        className="lg:flex hidden md:flex lg:w-[400px] md:w-[309px] md:mr-8 w-auto h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}