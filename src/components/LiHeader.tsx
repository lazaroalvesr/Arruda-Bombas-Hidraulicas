import { LiHeaderProps } from "@/lib/interface";
import Link from "next/link";

export const LiHeader = ({ href, nome }: LiHeaderProps) => {
    return (
        <li className="relative"> 
            <Link href={href} className="text-gray-900 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                {nome}
            </Link>

        </li>
    );
};
