import { LiHeaderProps } from "@/lib/interface";
import Link from "next/link";

export const LiHeader = ({ href, nome }: LiHeaderProps) => {
    return (
        <li className="relative"> 
            <Link href={href} className="text-gray-900 hover:text-blue-900 px-3 py-2 text-base font-medium block w-72 lg:w-full text-center hover:bg-blue-100 rounded transition duration-200">
                {nome}
            </Link>

        </li>
    );
};
