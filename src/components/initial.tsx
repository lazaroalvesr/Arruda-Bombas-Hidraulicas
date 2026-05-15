"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { whatsappContact } from "@/lib/whatsappLink"

export const IntialPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    }

    return (
        <div className="relative bg-[#f8fafc] overflow-hidden lg:pt-8 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <main className="mt-10 mx-auto lg:max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            className="flex flex-col lg:flex-row items-center justify-between"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible">
                            <div className="sm:text-center lg:text-left w-full" >
                                <motion.h1 
                                    className="text-4xl tracking-tight font-bold     text-[#1e3a8a] lg:w-[800px] w-full sm:text-5xl md:text-[64px]"
                                    variants={itemVariants}>
                                    Bombas de Concreto <br />
                                    <span className="text-green-600">a partir de R$ 165.000</span>
                                </motion.h1>
                                <motion.p className="mt-8 lg:text-[18px] text-gray-600" variants={itemVariants}>
                                    Na Arruda Bombas, oferecemos <span className="font-bold">bombas de concreto</span> novas e robustas para suas obras.
                                    Com pressão de até 200 bar, nossos equipamentos são ideais para projetos residenciais,
                                    lajes, piscinas, edifícios e galpões. <br /> Fabricamos e entregamos em todo o Brasil.
                                </motion.p>
                                <motion.div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3" variants={itemVariants}>
                                    <a
                                        href={whatsappContact()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 mb-4 lg:mb-0 text-white font-bold rounded-md text-base md:text-lg transition-all shadow-lg hover:shadow-xl"
                                    >
                                        💬 Falar com Vendedor
                                    </a>

                                    <Link
                                        href="/Catálogo_Arruda_Bombas.pdf"
                                        className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-md text-base md:text-lg hover:bg-blue-50 transition-all"
                                    >
                                        📄 Baixar Catálogo
                                    </Link>
                                </motion.div>

                                <motion.div className="mt-6 flex flex-col gap-2 text-sm text-gray-600" variants={itemVariants}>
                                    <p>⚡ Resposta em minutos</p>
                                    <p>🚚 Entrega em todo Brasil</p>
                                </motion.div>
                            </div>
                            <motion.div
                                className="lg:w-1/2 mt-10 lg:mt-0 lg:block hidden"
                                variants={itemVariants}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="h-full flex items-end justify-end">
                                    <Image
                                        src="/img/photo-principal.png"
                                        alt="Bomba de Concreto Carretinha"
                                        width={400}
                                        height={553}
                                        className="lg:flex hidden md:flex lg:w-[440px] md:w-[309px] md:mr-8 w-auto h-auto"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    )
}