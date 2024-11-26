'use client'
import { createContext, useCallback } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export interface ContextoMensagensProps {
    adicionarSucesso: (texto: string) => void
    adicionarErro: (texto: string) => void
}

const ContextoMensagens = createContext<ContextoMensagensProps>({} as any)

export function ProvedorContextoMensagens(props: any) {

    const adicionarMensagem = useCallback(
        (tipo: "success" | "error", texto: string) => {
            if (tipo === "success") {
                toast.success(texto);
            } else {
                toast.error(texto);
            }
        }, []
    )

    return (
        <ContextoMensagens.Provider value={{
            adicionarSucesso: (texto) => adicionarMensagem('success', texto),
            adicionarErro: (texto) => adicionarMensagem('error', texto)
        }}>
            {props.children}
        </ContextoMensagens.Provider>
    )
}

export default ContextoMensagens