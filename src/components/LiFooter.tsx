import { LiFooterProps } from "@/lib/interface"
import Link from "next/link"

export const LiFooter = ({ nome, href }: LiFooterProps) => {
    return (
        <li>
            <Link href={href} className="text-gray-600 hover:text-[#00238C] transition-colors text-sm">
                {nome}
            </Link>
        </li>
    )
}