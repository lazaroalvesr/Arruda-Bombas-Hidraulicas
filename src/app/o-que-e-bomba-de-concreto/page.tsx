"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, ZoomIn, ArrowRight } from "lucide-react"

export default function ConcretePumpInfo() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const advantages = [
        {
            title: "Eficiência",
            description: "Reduz significativamente o tempo de aplicação do concreto, acelerando o cronograma da obra.",
        },
        {
            title: "Acesso Difícil",
            description: "Permite o bombeamento em áreas de difícil acesso, como andares altos ou locais apertados.",
        },
        {
            title: "Menos Desperdício",
            description:
                "Minimiza a perda de material, garantindo que o concreto chegue em boas condições ao ponto de aplicação.",
        },
        {
            title: "Melhor Acabamento",
            description: "Proporciona uma aplicação mais uniforme e precisa, resultando em acabamentos de maior qualidade.",
        },
    ]

    const applications = [
        {
            title: "Edificações",
            description: "Utilizadas em construções residenciais, comerciais e industriais",
        },
        {
            title: "Obras de Infraestrutura",
            description:
                "Essenciais em projetos como pontes, viadutos e túneis, onde grandes volumes de concreto são necessários.",
        },
        {
            title: "Estruturas de Concreto Armado",
            description:
                "Ideais para a construção de pilares, lajes e fundações que exigem precisão na colocação do material.",
        },
        {
            title: "Reformas e Manutenções",
            description: "Usadas em projetos de reforma onde o espaço é limitado e a precisão é crucial.",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f8fafc]  px-4 sm:px-6 pt-[140px] pb-[71px] lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-blue-900 mb-8">O que é Bomba de Concreto?</h1>

                <motion.div variants={fadeInUp} className="prose prose-lg max-w-none mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        A bomba de concreto é um equipamento essencial na construção civil, projetado para transportar e lançar
                        concreto de maneira eficiente e rápida. Com sua capacidade de bombear grandes volumes, ela é fundamental em
                        obras que exigem precisão e agilidade na aplicação do material.
                    </p>
                </motion.div>

                <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {["/img/P700/P700_1.png", "/img/P700/P700_2.png"].map((src, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <div className="relative h-64 overflow-hidden rounded-lg">
                                <Image
                                    src={src || "/placeholder.svg"}
                                    alt={`Bomba de concreto ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white w-8 h-8" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.section variants={fadeInUp} className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                        <ChevronRight className="w-6 h-6 mr-2" />
                        Como Funciona
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                            As bombas de concreto operam através de um sistema hidráulico que utiliza pistões ou parafusos. O concreto
                            é colocado em um cilindro e, ao ativar a bomba, é forçado a passar por tubulações até o local desejado. A
                            pressão gerada garante um fluxo contínuo, permitindo que o concreto chegue rapidamente ao ponto de
                            aplicação.
                        </p>
                    </div>
                </motion.section>

                <motion.section variants={staggerChildren} className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
                        <ChevronRight className="w-6 h-6 mr-2" />
                        Vantagens
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{advantage.title}</h3>
                                <p className="text-gray-600">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={staggerChildren} className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
                        <ChevronRight className="w-6 h-6 mr-2" />
                        Aplicações
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {applications.map((application, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{application.title}</h3>
                                <p className="text-gray-600">{application.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={fadeInUp} className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                        <ChevronRight className="w-6 h-6 mr-2" />
                        Conclusão
                    </h2>
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                        <p className="text-gray-700 leading-relaxed">
                            A bomba de concreto é um equipamento vital na construção civil, contribuindo para a eficiência e qualidade
                            dos projetos. Sua variedade de tipos e funcionalidades permite que sejam utilizadas em diversas
                            aplicações, tornando-as indispensáveis para empreiteiros e engenheiros.
                        </p>
                    </div>
                </motion.section>

                <motion.div variants={fadeInUp} className="flex justify-center">
                    <Link
                        href="/#contato"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors group">
                        Fazer Orçamento
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>

            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full h-[80vh]">
                        <Image
                            src={selectedImage || "/placeholder.svg"}
                            alt="Bomba de concreto ampliada"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>
            )}
        </div>
    )
}

