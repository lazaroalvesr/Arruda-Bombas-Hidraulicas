import { FooterSectionProps } from "@/lib/interface"
import { LiFooter } from "./LiFooter"

export const FooterSection = ({ links, titulo }: FooterSectionProps) => {
    return (
        <div className="space-y-4 pl-2 lg:pl-0">
            <h3 className="text-lg font-semibold text-[#00238C]">{titulo}</h3>
            <ul className="space-y-2">
                {links.map((item, index) => (
                    <LiFooter href={item.href === 'contato' ? '#' : item.href} key={index} nome={item.nome} />
                ))}
            </ul>
        </div>
    )
}