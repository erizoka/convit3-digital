"use client"
import DashboardEvento from "@/components/evento/DashboardEvento"
import FormSenhaEvento from "@/components/evento/FormSenhaEvento"
import useAPI from "@/data/hooks/useAPI"
import { Convidado, Evento } from "core"
import { use, useCallback, useState } from "react"

export default function PaginaAdminEvento(props: any) {
    const { httpPost } = useAPI()
    const params: any = use(props.params)
    const id = params.todos[0]
    const [senha, setSenha] = useState<string>(params.todos[1] ?? "")
    const [evento, setEvento] = useState<Partial<Evento>>()

    const presentes = evento?.convidados?.filter((c) => c.confirmado) ?? []
    const ausentes = evento?.convidados?.filter((c) => !c.confirmado) ?? []

    const totalGeral = presentes?.reduce((total: number, convidado: Convidado) => {
        return total + convidado.qtdeAcompanhantes + 1
    }, 0) ?? 0

    const obterEvento = useCallback(async function () {
        if (!id || !senha) return
        const eventoAtual = await httpPost('/eventos/acessar', { id, senha })
        setEvento(eventoAtual)
    }, [httpPost, id, senha])

    return (
        <div className="flex flex-col items-center">
            {evento ? (
                <DashboardEvento
                    evento={evento as Evento}
                    presentes={presentes}
                    ausentes={ausentes}
                    totalGeral={totalGeral}
                    atualizarListaConvidados={obterEvento}
                />
            ) : (
                <FormSenhaEvento
                    acessarEvento={obterEvento}
                    senha={senha}
                    setSenha={setSenha}
                />
            )}
        </div>
    )
}