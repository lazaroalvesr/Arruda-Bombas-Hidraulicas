"use client"

import Link from "next/link"
import { CardEquipamentos } from "./cardEquipamentos"
import { motion } from "framer-motion"
import { EquipamentoProps } from "@/lib/interface";

export const EquipamentosPage = () => {
    const equipamentos: EquipamentoProps[] = [
        {
            id: 1,
            name: "Carretinha Pequena",
            price: "R$ 185.000",
            image: "/img/eletrica.png",
            link: "/bomba-de-concreto/carretinha-pequena",
        },
        {
            id: 2,
            name: "Carretinha Rebocável",
            price: "A consultar",
            image: "/img/rebocavel.png",
            link: "/bomba-de-concreto/carretinha-rebocavel",
        },
        {
            id: 3,
            name: "P700",
            price: "R$ 165.000",
            image: "/img/p700.png",
            link: "/bomba-de-concreto/p700",
        },
        {
            id: 4,
            name: "Caminhão MultiMix",
            price: "R$ 185.000",
            image: "/img/betoneira.png",
            link: "/bomba-de-concreto/multimix",
        },
        {
            id: 5,
            name: "Betonbomba",
            price: "R$ 165.000",
            image: "/img/betonbomba.png",
            link: "/bomba-de-concreto/betonbomba",
        },
    ]

    return (
        <section className="bg-[#fff7f79e]">
            <div className="max-w-[1444px] flex m-auto items-center justify-center lg:my-0 lg:py-[60px] pb-20" id="equipamento">
                <div className="flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-center text-[#1a237e] mb-12"
                    >
                        Nossos Equipamentos!
                    </motion.h2>
                    <div className="flex pt-[52px] lg:w-[1200px] lg:gap-y-8 md:w-[800px] justify-center md:gap-[20px] md:flex-wrap lg:flex-row lg:gap-[21px] flex-col md:flex-row gap-y-8 ">
                        {equipamentos.map((equipamento, index) => (
                            <motion.div
                                key={equipamento.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ delay: index * 0.1 }}>
                                <CardEquipamentos
                                    title={equipamento.name}
                                    src={equipamento.image}
                                    href={equipamento.link}
                                    price={equipamento.price}
                                />
                            </motion.div>
                        ))}                         
                    </div>
                    <Link href="/bomba-de-concreto" rel="noopener noreferrer">
                        <button className="bg-blue-600 text-[#f7f7f7f7] hover:bg-blue-700 mt-[53px] hover:scale-105 cursor-pointer transition-transform duration-300  rounded-[10px] w-[282px] h-[48px] text-[18px]">Ver mais</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
