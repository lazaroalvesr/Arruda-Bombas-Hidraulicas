import { LiHeaderProps } from "@/lib/interface";
import Link from "next/link";

export const LiHeader = ({ href, nome, isActive }: LiHeaderProps) => {
    return (
        <li className="relative"> 
            <Link href={href} className="text-[20px] lg:text-[19px] md:text-[14px] text-black block">
                {nome}
            </Link>
            {isActive && (
                <div className="absolute bg-[#001659] w-2/4 h-0.5 bottom-0.5 left-0"></div>
            )}
        </li>
    );
};
