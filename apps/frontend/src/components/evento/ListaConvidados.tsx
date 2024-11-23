import { Convidado } from "core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadoProps {
    convidados: Convidado[]
}

export default function ListaConvidado(props: ListaConvidadoProps) {
    return (
        <div>
            <ul className="flex flex-col gap-2">
                {props.convidados.map((convidado) => (
                    <ConvidadoItem key={convidado.id} convidado={convidado} />
                ))}
            </ul>
        </div>
    )
}