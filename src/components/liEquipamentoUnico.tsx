import { liEquipamentoProps } from "@/lib/interface"

export const LiEquipamentoUnico = ({ text, titulo }: liEquipamentoProps) => {
    return (
        <li className="lg:text-[20px] list-disc text-sm"><span className="font-bold">{titulo}</span> {text}</li>
    )
}