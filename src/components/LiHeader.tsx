"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface LiHeaderProps {
  href: string
  nome: string
  isActive: boolean
}

export const LiHeader = ({ href, nome, isActive }: LiHeaderProps) => {
  return (
    <motion.li
      className={`lg:ml-8 my-4 lg:my-0 text-center ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className="hover:text-blue-600 transition-colors">
        {nome}
      </Link>
    </motion.li>
  )
}

