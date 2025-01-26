"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LiHeader } from "./LiHeader"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export const HeaderPage = () => {
  const [ativo, setAtivo] = useState(false)
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false);

  function toggle() {
    setAtivo(!ativo)
  }

  function closeMenu() {
    setAtivo(false)
  }
  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  }

  return (
    <header className="fixed w-full bg-[#f7f7f767]/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl lg:px-7 m-auto flex lg:justify-between md:justify-between py-4 items-center">
        <Link href="/" className="flex items-center justify-center gap-2 ml-5 lg:ml-0">
          <Image src="/icon.png" alt="Icone concreto" width={30} height={30} className="flex" />
          <h1 className="font-bold text-[#1f3b8b] w-44 lg:w-full md:w-72 text-sm sm:text-base">
            ARRUDA BOMBAS HIDRAÚLICAS
          </h1>
        </Link>
        <motion.button
          className="lg:hidden absolute right-5"
          onClick={toggle}
          whileTap={{ scale: 0.95 }}
          aria-label="Botão de abrir Menu Mobile"
        >
          <AnimatePresence mode="wait">
            {ativo ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/icons/x.svg" className="bg-[#f7f7f7]" alt="Ícone fechar menu" width={40} height={40} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/icons/menu-deep.svg" alt="Ícone abrir menu" width={40} height={40} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <nav className="lg:block">
          <AnimatePresence>
            {isClient && (ativo || !window.matchMedia("(max-width: 1024px)").matches) && (
              <motion.ul
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`flex lg:h-auto ${ativo
                    ? "bg-[#f7f7f7] w-full z-40 top-[70px] justify-center items-center h-80 absolute flex-col left-0"
                    : "lg:flex-row lg:relative lg:bg-transparent"
                  }`}
                onClick={closeMenu}
              >
                <motion.div variants={itemVariants}>
                  <LiHeader href="/" nome="Inicio" isActive={pathname === "/"} />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <LiHeader
                    href="/bomba-de-concreto"
                    nome="Bomba de concreto"
                    isActive={pathname === "/bomba-de-concreto"}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <LiHeader
                    href="/o-que-e-bomba-de-concreto"
                    nome="O Que é Bomba de Concreto?"
                    isActive={pathname === "/o-que-e-bomba-de-concreto"}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <LiHeader href="/#contato" nome="Contato" isActive={pathname === "/#contato"} />
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}