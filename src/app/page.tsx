import { ContatoPage } from "@/components/contato";
import { DesenvolvimentoPage } from "@/components/desenvolvimento";
import { EquipamentosPage } from "@/components/equipamentos";
import { IntialPage } from "@/components/initial";

export default function Home() {
  return (
    <div>
      <IntialPage />
      <EquipamentosPage />
      {/* <DesenvolvimentoPage /> */}
      <ContatoPage />
    </div>
  );
}
