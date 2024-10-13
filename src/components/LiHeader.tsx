import { LiHeaderProps } from "@/lib/interface"
import Link from "next/link"

export const LiHeader = ({ href, nome  }: LiHeaderProps) => {
    return (
        <Link href={href} >
            <li className="text-[20px] lg:text-[17px] md:text-[14px] text-white">{nome}</li>
        </Link>
    )
}