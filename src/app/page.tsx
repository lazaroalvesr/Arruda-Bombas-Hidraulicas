import { ContatoPage } from "@/components/contato";
import  SecaoEquipamento  from "@/components/desenvolvimento";
import { EquipamentosPage } from "@/components/equipamentos";
import { IntialPage } from "@/components/initial";

export default function Home() {
  return (
    <div>
      <IntialPage />
      <EquipamentosPage />
      <SecaoEquipamento />
      <ContatoPage />
    </div>
  );
}
