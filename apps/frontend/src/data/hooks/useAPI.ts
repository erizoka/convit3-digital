import { useCallback } from "react";
import useMensagens from "./useMensagens";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const { adicionarErro } = useMensagens();

  const httpGet = useCallback(async function (caminho: string) {
    const url = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${url}`;

    const resposta = await fetch(urlCompleta);
    return extrairDados(resposta);
  }, []);

  const httpPost = useCallback(async function (caminho: string, body?: any) {
    const url = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${url}`;

    const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extrairDados(resposta);
  }, []);

  async function extrairDados(resposta: Response) {
    const conteudo = await resposta.json();

    if (!resposta.ok) {
      const mensagem = `Erro na requisição: ${resposta.statusText || "Desconhecido"}`;
      adicionarErro(conteudo.message);
      throw new Error(mensagem);
    }

    return conteudo;
  }

  return { httpGet, httpPost };
}
