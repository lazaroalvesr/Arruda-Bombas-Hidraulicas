/* eslint-disable */

"use client"

import Image from "next/image"
import { FormEvent, useState, } from "react"
import emailjs from '@emailjs/browser'
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { sendGTMEvent } from '@next/third-parties/google'
import { motion } from "framer-motion"
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { formatTelephone } from '@/lib/formattedPhone';

const equipamentos = [
    { name: "Carretinha Pequena", motores: ['Motor Elétrico', 'Motor a Diesel'] },
    { name: "Carretinha Rebocável", motores: ['Perkins 4CC', 'MWM 4CC'] },
    { name: "P700" },
    { name: "Caminhão MultiMix" },
    { name: "Betonbomba" }
];

export const ContatoPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [celular, setCelular] = useState('');
    const [equipment, setEquipment] = useState('');
    const [selectedMotor, setSelectedMotor] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    function sendEmail(e: FormEvent) {
        e.preventDefault()

        if (!name || !email || !celular || !mensagem || !equipment) {
            setErrorMessage('Por favor, preencha todos os campos para enviar a mensagem.')
            setSuccessMessage('')
            return
        }

        setSuccessMessage('Sua mensagem foi enviada com sucesso! Alguém irá responder o mais rápido possível.')
        setErrorMessage('')
        sendGTMEvent({ event: 'buttonClicked', value: "BUY" });

        const templateParams = {
            from_name: name,
            message: `${mensagem}\n\nEquipamento: ${equipment}\nMotor: ${selectedMotor}`,
            email: email,
            celular: celular
        };

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, templateParams, process.env.NEXT_PUBLIC_USER_ID as string)
            .then((response) => {
                setName('');
                setEmail('');
                setMensagem('');
                setCelular('');
                setEquipment('');
                setSelectedMotor('');
                setTimeout(() => {
                    setSuccessMessage('')
                }, 5000)
            }, (err) => {
                console.log('Erro:', err);
            });

    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEquipment(e.target.value);
        setSelectedMotor('')
    };

    const handleMotorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMotor(e?.target.value)
    }

    const selectedEquipamento = equipamentos.find(
        (equipmento) => equipmento.name === equipment
    )

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    const message = "Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento.";
    const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

    return (
        <section className="bg-[#f8fafc]">
            <div className="lg:max-w-[1175px] items-center justify-center flex m-auto lg:py-[60px] py-[80px] relative" id="contato">
                <div className="flex flex-col items-center text-center justify-center">
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 ">Entre em Contato</h2>
                        <p className="lg:text-lg px-4 lg:px-0 text-gray-600 max-w-2xl mx-auto">
                            Estamos aqui para ajudar! Escolha a forma de comunicação que mais lhe convém.
                        </p>
                    </motion.div>
                    <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-8 items-start mt-12">
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2 bg-[#f8fafc] rounded-2xl lg:w-[451px] md:w-[380px] md:hidden lg:flex shadow-xl p-8 border border-gray-100">
                            <div className="space-y-8 ">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-900">Informações de Contato</h3>
                                    <p className="text-gray-600">Nossa equipe está disponível para atender todas as suas necessidades.</p>
                                </div>

                                <div className="space-y-6">
                                    <div
                                        className="flex items-center space-x-4 hover:scale-105 transition .3s ease-in text-gray-600 hover:text-blue-600 ">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <Link
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            (19) 97410-5318</Link>
                                    </div>
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        href="mailto:arrudabombashidraulicas@gmail.com"
                                        className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="break-all lg:text-base text-[13px]">arrudabombashidraulicas@gmail.com</span>
                                    </motion.a>

                                    <div className="flex items-center space-x-4 text-gray-600">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span>Hortolândia - SP</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex space-x-6">
                                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-gray-500">
                                            <FiYoutube className="w-7 h-6" />
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-gray-500">
                                            <FaInstagram className="w-6 h-6" />
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-gray-500">
                                            <FiFacebook className="w-6 h-6" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-3 bg-[#f8fafc] rounded-2xl shadow-xl md:w-[700px] lg:w-fit p-8 border border-gray-100">
                            <form onSubmit={sendEmail}>
                                <div className='flex flex-col w-full  gap-4 text-[#333333]'>
                                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div className='flex flex-col text-start gap-2'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Nome
                                            </label>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className='bg-slate-100 p-3 rounded-md col-span-1 border-gray-200 border'
                                                placeholder='Digite seu nome Completo'
                                                required
                                            />
                                        </div>
                                        <div className='flex flex-col text-start gap-2'>
                                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                                                WhatsApp
                                            </label>
                                            <input
                                                type='tel'
                                                id='whatsapp'
                                                name='whatsapp'
                                                value={celular}
                                                onChange={(e) => setCelular(formatTelephone(e.target.value))}
                                                className='bg-slate-100 p-3 rounded-md col-span-1 border-gray-200 border'
                                                placeholder="(99) 99999-9999"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col col-span-2 text-start gap-2'>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type='text'
                                            id='email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='bg-slate-100 p-3 rounded-md border-gray-200 border'
                                            placeholder="seu@email.com"
                                            required
                                        />
                                    </div>
                                    <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:w-[710px] gap-4 justify-between'>
                                        <div className='grid gap-2 text-start'>
                                            <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                                                Equipamento de Interesse
                                            </label>
                                            <select
                                                id="equipment"
                                                name="equipment"
                                                onChange={handleChange}
                                                className="bg-slate-100 p-3 rounded-md col-span-1  w-80 lg:w-full border-gray-200 border"
                                                value={equipment}>
                                                <option disabled value="">
                                                    Escolha o equipamento
                                                </option>
                                                {equipamentos.map((equipamento, index) => (
                                                    <option key={index} value={equipamento.name}>
                                                        {equipamento.name}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                        {selectedEquipamento?.motores && (
                                            <div className="flex text-start flex-col gap-2">
                                                <label htmlFor="motor" className="block text-sm font-medium text-gray-700">
                                                    Escolha o Motor
                                                </label>
                                                <select
                                                    id="motor"
                                                    name="motor"
                                                    className="bg-slate-100 p-3 rounded-md w-80 lg:w-full border-gray-200 border"
                                                    value={selectedMotor}
                                                    required
                                                    onChange={handleMotorChange}>
                                                    <option disabled value="">
                                                        Escolha o motor
                                                    </option>
                                                    {selectedEquipamento.motores.map((motor, index) => (
                                                        <option key={index} value={motor}>
                                                            {motor}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="mensagem" className="block text-start text-sm font-medium">
                                            Mensagem
                                        </label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            value={mensagem}
                                            onChange={(e) => setMensagem(e.target.value)}
                                            className="bg-slate-100 p-3 rounded-md resize-none h-32 mt-2 border-gray-200 border w-full"
                                            placeholder="Digite sua mensagem aqui"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-between lg:flex-row md:flex-row flex-col-reverse lg:gap-14 gap-8 mt-2'>
                                    <div className='text-start text-sm flex'>
                                        {successMessage && (
                                            <div className="lg:mt-4 w-80 text-green-600">{successMessage}</div>
                                        )}
                                        {errorMessage && (
                                            <div className=" mt-4 w-80 text-red-600">{errorMessage}</div>
                                        )}
                                    </div>
                                    <button type='submit' className='bg-blue-600 py-2 text-nowrap px-12 h-fit rounded-md text-[#f7f7f7f7]'>
                                        Solicitar Orçamento
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div >
                    <div className="fixed right-10 bottom-10">
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                sendGTMEvent({
                                    event: 'whatsapp_click',
                                    event_category: 'Contact',
                                    event_label: 'Floating WhatsApp Button'
                                });
                            }}
                            className="relative cursor-pointer group">
                            <Image
                                src="/icons/whatsapp.png"
                                alt="Ícone WhatsApp"
                                width={50}
                                height={50}
                                className="hover:cursor-pointer lg:w-[50px]"
                            />
                            <span className="absolute transform top-[67px] lg:w-[220px] lg:-left-36 -left-32 w-[200px] -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-base p-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Tem dúvidas? Vamos conversar!
                            </span>
                        </Link>
                    </div>
                </div>
            </div >
        </section >
    )
}