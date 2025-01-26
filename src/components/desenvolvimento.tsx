"use client"

import { PhoneIcon as WhatsappIcon, ArrowRight, PenToolIcon as Tool, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const message = "Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento.";
const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

export default function SecaoEquipamento() {
    const features = [
        "Engenharia avançada e inovação",
        "Testes rigorosos de qualidade",
        "Eficiência máxima garantida",
        "Suporte técnico especializado",
    ]

    return (
        <section className="relative min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/img/desenvolvimento.jpg"
                    alt="Foto blueprint projeto"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-12 lg:grid-cols-2 lg:gap-8"
                >
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600"
                            >
                                <Tool className="mr-2 h-4 w-4" />
                                Equipamentos Personalizados
                            </motion.div>
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Desenvolvimento de Equipamentos Sob Medida
                            </h2>
                        </div>

                        <p className="text-lg leading-8 text-gray-300">
                            Na Arruda Bombas, projetamos cada equipamento com precisão para atender às necessidades específicas do seu
                            projeto. Com engenharia avançada e inovação, garantimos eficiência máxima no bombeamento de concreto
                            usinado.
                        </p>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center text-gray-300"
                                >
                                    <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-[#f7f7f7f7] hover:bg-blue-700 h-11 px-8">
                                <WhatsappIcon className="mr-2 h-5 w-5" />
                                Fazer Orçamento
                            </Link>

                            <Link href="/bomba-de-concreto" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-[#f7f7f7f7] hover:bg-white/10">
                                Ver mais
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="lg:mt-0"
                    >
                        <div className="rounded-lg bg-card text-card-foreground shadow-sm bg-white/10 backdrop-blur-sm border-0">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Por que escolher nossos equipamentos?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="rounded-full bg-blue-600/10 p-2">
                                            <CheckCircle className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold text-white">Qualidade Superior</h4>
                                            <p className="mt-1 text-gray-300">
                                                Equipamentos testados e aperfeiçoados para oferecer desempenho superior em qualquer condição.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="rounded-full bg-blue-600/10 p-2">
                                            <Tool className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold text-white">Personalização Total</h4>
                                            <p className="mt-1 text-gray-300">
                                                Cada equipamento é projetado especificamente para suas necessidades únicas.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
