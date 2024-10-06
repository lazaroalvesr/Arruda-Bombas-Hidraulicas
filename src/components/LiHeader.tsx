import { LiHeaderProps } from "@/lib/interface"
import Link from "next/link"

export const LiHeader = ({ href, nome  }: LiHeaderProps) => {
    return (
        <Link href={href} >
            <li className="text-[20px] md:text-[17px] text-white">{nome}</li>
        </Link>
    )
}