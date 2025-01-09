"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image"
import { FormEvent, useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import Link from "next/link"
import { Mail, MapPin, Phone, Youtube, Instagram, Facebook } from "lucide-react"
import { sendGTMEvent } from '@next/third-parties/google'

export const ContatoPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: false,
            startEvent: 'DOMContentLoaded',
        });
    }, []);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [celular, setCelular] = useState('');
    const [equipment, setEquipment] = useState('');
    const [selectedMotor, setSelectedMotor] = useState('');
    const [successMessage, setSuccessMessage] = useState('')


    function sendEmail(e: FormEvent) {
        e.preventDefault()
        setSuccessMessage('Sua mensagem foi enviada com sucesso! Alguém irá responder o mais rápido possível.')

        sendGTMEvent({ event: 'buttonClicked', value: "BUY" });

        const templateParams = {
            from_name: name,
            message: `${mensagem}\n\nEquipamento: ${equipment}\nMotor: ${selectedMotor}`,
            email: email,
            celular: celular
        };

        emailjs.send("service_cy8i1cp", "template_5q7b1ps", templateParams, "MUihn924koQBFDrhZ")
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                setName('');
                setEmail('');
                setMensagem('');
                setCelular('');
                setEquipment('');
                setSelectedMotor('');
            }, (err) => {
                console.log('Erro:', err);
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEquipment(e.target.value);
    };

    const message = "Oi, tudo bem? Vim pelo site Arruda Bombas Hidráulicas, gostaria de solicitar um orçamento.";
    const whatsappLink = `https://api.whatsapp.com/send?phone=5519974105318&text=${encodeURIComponent(message)}`;

    return (
        <section className="lg:max-w-[1175px] items-center justify-center flex m-auto lg:my-[60px] my-[60px] relative" id="contato">
            <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-[#001659] font-semibold text-[28px] lg:text-[32px] ml-4 lg:ml-0">Entre em Contato</h1>
                <div className="flex lg:flex-row lg:gap-14 gap-6 lg:pt-16 pt-[52px]">
                    <div className="rounded-[10px] lg:flex hidden w-[320px] lg:w-[429px] md:hidden text-start h-[746px] bg-[#00238C]" data-aos="fade-down">
                        <div className="lg:p-8 p-6">
                            <h3 className="lg:text-2xl text-[15px] font-semibold pb-[24px] text-white">informações de contato</h3>
                            <p className="lg:text-[15px] w-full text-2xl md:text-base text-white">Estamos aqui para ajudar! Escolha a forma de comunicação que mais lhe convém e entre em contato conosco.</p>
                            <div className="pt-[80px] flex-col flex gap-[35px]">
                                <div className="flex items-center md:gap-3 lg:gap-6" >
                                    <Phone className="w-8 h-8" color='white' />
                                    <h2 className="lg:text-[15px] text-white md:text-xs">(19) 97410-5318</h2>
                                </div>
                                <Link href="mailto:arrudabombashidraulicas@gmail.com" className="flex items-center md:gap-3 lg:gap-6">
                                    <Mail className="w-8 h-8" color="white" />
                                    <h2 className="lg:text-[15px] text-white md:text-xs">arrudabombashidraulicas@gmail.com</h2>
                                </Link>
                                <div className="flex items-center md:gap-3 lg:gap-6">
                                    <MapPin className="w-8 h-8" color='white' />
                                    <h2 className="lg:text-[15px] text-white">Hortolândia - SP</h2>
                                </div>
                            </div>
                            <div className="flex items-center pt-[62px] gap-[12px]">
                                <Link href="https://www.youtube.com/@arrudabombas" target="_blank">
                                    <Youtube className="w-8 h-8" color='white' />
                                </Link>
                                <Link href="https://www.instagram.com/arrudabombashidraulicas7/" target="_blank">
                                    <Instagram className="w-8 h-8" color='white' />
                                </Link>
                                <Facebook className="w-8 h-8" color='white' />
                            </div>
                        </div>
                    </div>
                    <form className="pt-[30px] flex items-center  md:items-start flex-col gap-4" onSubmit={sendEmail} data-aos="fade-up">
                        <label htmlFor="" className="flex flex-col items-start font-medium text-[#001659] text-[20px]">
                            Nome
                            <input
                                placeholder="Nome Completo"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                required
                                className="lg:w-[726px] md:w-[500px] w-[330px] placeholder:text-sm outline-none font-normal border-b-2 mt-1 border-black  text-base h-[50px] pl-4" name="" id="" />
                        </label>
                        <label htmlFor="" className="flex flex-col items-start font-medium text-[#001659] text-[20px]">
                            Email
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="email@email.com"
                                required
                                className="lg:w-[726px]  md:w-[500px]  w-[330px] placeholder:text-sm outline-none  font-normal border-b-2 mt-1 border-black text-base h-[50px] pl-4" name="" id="" />
                        </label>
                        <label htmlFor="" className="flex flex-col items-start text-[#001659] text-[20px]">
                            Whatsapp
                            <input
                                placeholder="99 99999-9999"
                                type="number"
                                onChange={(e) => setCelular(e.target.value)}
                                value={celular}
                                required
                                className="lg:w-[726px] md:w-[500px]  w-[330px] placeholder:text-sm outline-none font-normal border-b-2 mt-1 border-black text-base h-[50px] pl-4" typeof="tel" name="" id="" />
                        </label>
                        <div className="flex gap-8 lg:flex-row flex-col md:flex-row">
                            <div className="flex flex-col items-start">
                                <label htmlFor="equipment-select">Equipamento de Interesse</label>
                                <select
                                    id="equipment-select"
                                    name="equipment"
                                    onChange={handleChange}
                                    className="lg:w-[302px] md:w-[210px] w-[330px] outline-none border-b-2 mt-1 border-black font-normal h-[50px] text-sm pl-4"
                                    required
                                >
                                    <option value="Escolha o equipamento" selected disabled className="text-gray-400">Escolha o equipamento</option>
                                    <option value="Carretinha Pequena" className="text-gray-800">Carretinha Pequena</option>
                                    <option value="Carretinha Rebocável" className="text-gray-800">Carretinha Rebocável</option>
                                    <option value="P700" className="text-gray-800">P700</option>
                                    <option value="Caminhão MultiMix" className="text-gray-800">Caminhão MultiMix</option>
                                    <option value="Betonbomba" className="text-gray-800">Betonbomba</option>
                                </select>
                            </div>

                            <div className="flex flex-col items-start">
                                {equipment === "Carretinha Pequena" && (
                                    <>
                                        <label htmlFor="motor-select">Escolha o Motor</label>
                                        <select
                                            id="motor-select"
                                            onChange={(e) => setSelectedMotor(e.target.value)}
                                            className="lg:w-[302px] md:w-[210px] w-[330px] outline-none border-b-2 mt-1 border-black font-normal h-[50px] text-sm pl-4"
                                            required
                                        >
                                            <option value="Escolha o motor" selected disabled className="text-gray-400">Escolha o motor</option>
                                            <option value="Motor Elétrico" className="text-gray-800">Motor Elétrico</option>
                                            <option value="Motor a Diesel" className="text-gray-800">Motor a Diesel</option>
                                        </select>
                                    </>
                                )}

                                {equipment === "Carretinha Rebocável" && (
                                    <>
                                        <label htmlFor="motor-select">Escolha o Motor</label>
                                        <select
                                            id="motor-select"
                                            onChange={(e) => setSelectedMotor(e.target.value)}
                                            className="lg:w-[302px] md:w-[210px] w-[300px] outline-none border-b-2 mt-1 border-black font-normal h-[50px] text-sm pl-4"
                                            required
                                        >
                                            <option value="Escolha o motor" selected disabled className="text-gray-400">Escolha o motor</option>
                                            <option value="Perkins 4CC" className="text-gray-800">Perkins 4CC</option>
                                            <option value="MWM 4CC" className="text-gray-800">MWM 4CC</option>
                                        </select>
                                    </>
                                )}
                            </div>
                        </div>
                        <label htmlFor="" className="flex flex-col items-start text-[#001659] font-medium text-[20px]">
                            Mensagem
                            <textarea
                                onChange={(e) => setMensagem(e.target.value)}
                                value={mensagem}
                                required
                                placeholder="Olá, gostaria de saber mais sobre as bombas de concreto. Qual é a capacidade de bombeamento?"
                                className="lg:w-[726px]  md:w-[500px]  w-[330px] placeholder:text-sm placeholder:w-[430px] font-normal text-base resize-none outline-none border-b-2 mt-1 border-black h-[194px] p-4" name="" id="" />
                        </label>
                        <div className="flex gap-28 ">
                            {successMessage && (
                                <div className="mt-4 w-96 text-green-600">{successMessage}</div>
                            )}
                            <button
                                className="bg-[#001659] right-0 absolute mt-[19px] md:right-4 cursor-pointer  text-white w-[224px] h-[48px] text-[22px] rounded-[10px]"
                                onClick={() => sendGTMEvent({ event: 'buttonClicked', value: "BUY" })}
                            >
                                Enviar
                            </button>
                        </div>
                    </form>

                </div>
                <p className="lg:text-base text-red-600 lg:mt-12 mt-[90px] px-8 lg:px-0 md:mx-4 text-sm">
                    Importante: Para a fabricação das Bombas de Concreto, é necessário que o caminhão de instalação seja fornecido pelo cliente, e ele deve estar equipado com sistema de freio a ar.
                </p>
            </div>
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
                    className="relative cursor-pointer group"
                >
                    <Image
                        src="/icons/whatsapp.png"
                        alt="Ícone WhatsApp"
                        width={70}
                        height={70}
                        className="hover:cursor-pointer"
                    />
                    <span className="absolute -left-24 transform top-[67px] -translate-x-1/2  -translate-y-full bg-gray-800 text-white text-base p-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Tem dúvidas? Vamos conversar!
                    </span>
                </Link>
            </div>
        </section>
    )
}