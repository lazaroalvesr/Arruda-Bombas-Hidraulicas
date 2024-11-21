"use client"

import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const DesenvolvimentoPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    return (
        <section className="relative min-h-[600px] w-full lg:mt-12">
            <div className="absolute inset-0">
                <Image
                    src="/img/desenvolvimento.png"
                    alt="Engineer working on technical drawings"
                    className="object-cover w-full h-full"
                    width={1200}
                    height={600}
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32" data-aos="fade-right">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Desenvolvimento de Equipamentos Sob Medida
                    </h1>

                    <p className="text-gray-200 text-lg mb-8">
                        Na Arruda Bombas, projetamos cada equipamento com precisão para atender às necessidades específicas do seu projeto. Com engenharia avançada e inovação, garantimos eficiência máxima no bombeamento de concreto usinado. Nossos equipamentos são testados e aperfeiçoados para oferecer desempenho superior em qualquer condição.
                    </p>

                    <button
                        className="bg-[#00238C] hover:bg-[#001a66] text-white px-8 py-6 h-auto text-lg group flex items-center gap-2 rounded-md">
                        <span>
                            <Image
                                src="/img/WhatsApp_Icon.png"
                                alt="Icone do Whatsapp"
                                width={34}
                                height={34}
                            />
                        </span>
                        <Link href="/#contato" target="_blank" rel="noopener noreferrer">
                            Fazer Orçamento
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}