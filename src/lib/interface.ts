export interface CardEquipamentosProps {
    href: string
    src: string
    title: string
    price: string
}

interface Image {
    id: number;
    images: string;
}

export interface GaleriaFotos {
    images: Image[];
    galleryWidthProp: number;
}

export interface liEquipamentoProps {
    titulo: string;
    text: string
}

export interface EquipamentosCardProps {
    images: Image[];
    tituloEquipamento: string;
    preco: string;
    descricao: string
    motor?: {
        motor1?: string
        motor2?: string
    }
    especificacoes: especificacoes[],
    galleryWidthProp: number;
}

export interface especificacoes {
    tituloEspecificacoes: string,
    textEspecificacoes: string
}

export interface LiHeaderProps {
    href: string
    nome: string
    isActive: boolean
}

export interface LiFooterProps {
    href: string
    nome: string
}