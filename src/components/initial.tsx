"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
        <div className="relative bg-[#f8fafc] overflow-hidden lg:pt-12 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            className="flex flex-col lg:flex-row items-center justify-between"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible">
                            <div className="sm:text-center lg:text-left lg:w-1/2">
                                <motion.h1
                                    className="text-4xl tracking-tight font-bold text-[#1e3a8a] lg:w-[520px] sm:text-5xl md:text-[64px]"
                                    variants={itemVariants}>
                                    Bombeamento de Alta Precisão
                                </motion.h1>
                                <motion.p className="mt-3 lg:text-[18px] text-gray-500" variants={itemVariants}>
                                    Na Arruda Bombas, oferecemos soluções avançadas para o bombeamento de concreto usinado. Descubra como
                                    nossa tecnologia pode elevar seu projeto a um novo nível. Entre em contato e encontre a melhor solução
                                    do mercado.
                                </motion.p>
                                <motion.div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start" variants={itemVariants}>
                                    <div className="rounded-md shadow">
                                        <Link
                                            href="#contato"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#f7f7f7f7] bg-blue-600 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                                        >
                                            Fazer Orçamento
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            href="/Catálogo_Arruda_Bombas.pdf"
                                            className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-900 md:py-4 md:text-lg md:px-10">
                                            Baixar Catálogo
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div
                                className="lg:w-1/2 mt-10 lg:mt-0 lg:block hidden"
                                variants={itemVariants}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="h-full flex items-end justify-end">
                                    <Image
                                        src="/img/foto_principal.png"
                                        alt="Foto Carretinha elétrica"
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