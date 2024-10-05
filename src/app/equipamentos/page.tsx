import { CardEquipamentos } from "@/components/cardEquipamentos";

export default function EquipamentosPage() {
    return (
        <section className="max-w-[1175px] flex m-auto items-start  lg:my-[120px] my-[60px]" id="equipamento">
            <div className="flex flex-col   m-auto">
                <div className="flex">
                    <h1 className="text-[#35558E] font-semibold text-[28px]  lg:text-[32px] ml-4 lg:ml-0">Equipamentos</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-12">
                    <CardEquipamentos
                        href="/equipamentos/carretinha-pequena"
                        src="/img/eletrica.png"
                        title="Carretinha Pequena"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/equipamentos/carretinha-rebocavel"
                        src="/img/rebocavel.png"
                        title="Carretinha Rebocável"
                        price="A consultar"
                    />
                    <CardEquipamentos
                        href="/equipamentos/p700"
                        src="/img/p700.png"
                        title="P700"
                        price="R$ 165.000"
                    />
                    <CardEquipamentos
                        href="/equipamentos/multimix"
                        src="/img/betoneira.png"
                        title="Caminhão MultiMix"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/equipamentos/betonbomba"
                        src="/img/betonbomba.png"
                        title="Betonbomba"
                        price="R$ 185.000"
                    />
                </div>
            </div>
        </section>
    )
}