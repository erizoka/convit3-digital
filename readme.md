# Convit3 Digital

<img src="/packages/docs/index.png" alt="Página Inicial">

> Projeto FullStack para gerenciamento de eventos - frontend web usando Next.js, backend usando Nest.js com Prisma e mobile usando React Native com Expo CLI e um Core com regras de negócio somente em Typescript

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `React - Next.js - Node.js - Yarn`
- Você tem uma máquina `Windows / Linux / Mac`. Projeto feito em Windows 11, porém deve ser compatível com qualquer sistema operacional.

## 🚀 Instalando Convit3.digital

Para instalar o convit3.digital, siga estas etapas:

Linux e macOS:

```
yarn
```

Windows:

```
yarn
```

## ☕ Usando Convit3.digital

Para rodar convit3.digital, siga essas etapas:

Alterar o .env do Backend e Mobile para conexão ao banco (na mesma rede)

```
npx prisma migrate dev
```

Este comando vai povoar o banco com eventos mockados, disponíveis no "/packages/core/src/constants/eventos.ts"

```
npm run dev
```

A execução é na raiz eventos/ do projeto pois todos as aplicações executam em paralelo; para alterar veja o package.json da raiz!

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/erizoka" title="Perfil">
        <img src="https://avatars.githubusercontent.com/u/115660153?v=4" width="100px;" alt="Foto da Erica no GitHub"/><br>
        <sub>
          <b>Erica Esteves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/leonardomleitao" title="Perfil">
        <img src="https://avatars.githubusercontent.com/u/1732820?v=4" width="100px;" alt="Foto do Leonardo"/><br>
        <sub>
          <b>Leonardo Leitão</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
