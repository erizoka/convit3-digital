import { Evento } from "../evento";

const eventos: Evento[] = [
  {
    id: "9fcbeab1-f9ff-40b8-b4d7-70b206bd5866",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "44e7591b-b120-4bf0-a664-637733c38f4f",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "8a8edaf9-0625-4d18-aab4-248368bb0763",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "44557d53-a836-4945-a1ab-270b1dd6e397",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: "5e5503ab-fafb-4030-8308-a9a088d4081d",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    imagem:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "cb16db91-a533-4f3b-a269-c90188ebb047",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "8f151ec6-61b7-4073-bf55-8efa8550905f",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: "7ce490b6-84ac-4247-8606-fae36d4e1208",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    imagem:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "271e77d0-b835-4f60-9cab-cb5b61154cae",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "bd199bf2-c7c9-4199-82f2-065efe7febe4",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "e0cfad1d-dcac-48a2-9e78-ee5e369ce748",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "046de1ec-27fc-4d92-818a-a3491e2ff64d",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: new Date("2024-11-25T16:00:00Z"),
    local: "Florianópolis, SC",
    descricao:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    imagem:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "bf28c629-5ebb-45cf-9bc0-75d469db9513",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "43ab64c4-a2b2-41e2-b574-7940a4ce7419",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "d7258353-d4a7-49bf-b9d9-47bfdcf634f8",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Aniversário do João - 30 Anos",
    data: new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    imagem:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "7a4b0d09-47e3-4b2d-bf88-25a302d1fa79",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: "6ca4f48c-5203-4d37-a590-1731a3a214e9",
        nome: "José Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "b6e57670-0421-4a0d-ae80-5aa8d58034e7",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inauguração da Loja Estrela",
    data: new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    imagem:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "8eb1ed8f-95c6-415a-9db1-f235dc10ad01",
        nome: "Cláudia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: "933d0ebe-8025-476e-8f66-7fcb73438ce1",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "fba87d1d-9f6a-46b2-8748-d4ecd9427a9e",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reunião da Família Oliveira",
    data: new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reunião de fim de ano da família Oliveira.",
    imagem:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "cde788d1-f627-4e02-8990-9e43121cdf07",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: "546d32f6-3206-44fe-956e-a5c8ae67669c",
        nome: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
];

export default eventos;