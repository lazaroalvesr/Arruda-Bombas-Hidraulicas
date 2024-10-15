import { LiFooterProps } from "@/lib/interface";
import Link from "next/link";

export const LiFooter = ({ href, nome }: LiFooterProps) => {
    return (
        <li className="text-[16px] md:text-[14px] text-black">
            <Link href={href} className="block"> 
                {nome}
            </Link>
        </li>
    );
};
