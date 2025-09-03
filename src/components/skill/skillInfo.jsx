import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  {
    id: "html5",
    Icon: FaHtml5,
    title: "HTML5",
    experience: "Intermediário",
    description: `
Tenho domínio sobre a estrutura básica do HTML5 e uso frequente de elementos semânticos para criar páginas bem estruturadas e acessíveis.

Tags Semânticas:
- <header>
- <main>
- <section>
- <article>
- <footer>

Formulários:
- <form>
- <input>
- <textarea>
- <label>
- <button>

Estrutura e Organização:
- <div>
- <span>

Listas:
- <ul>
- <ol>
- <li>

Links e Mídia:
- <a>
- <img>
- <video>
- <audio>
    `,
    color: "text-orange-400",
  },
  {
    id: "css3",
    Icon: FaCss3Alt,
    title: "CSS3",
    experience: "Básico a Intermediário",
    description: `
Tenho conhecimento básico a intermediário em CSS3 e já consigo estilizar páginas com layouts simples e responsivos.

Consigo usar Flexbox, Grid e media queries para ajustar o layout em diferentes tamanhos de tela, além de aplicar cores, espaçamentos, fontes e alguns efeitos visuais básicos.

Gosto da parte visual do front-end e estou sempre buscando melhorar meu senso de design e aprender novas técnicas de estilização. Uso muito TailwindCSS e pretendo aprofundar mais.

Ainda tenho bastante a aprender, mas me viro bem no dia a dia com CSS para dar vida às interfaces.
    `,
    color: "text-blue-600",
  },
  {
    id: "js",
    Icon: IoLogoJavascript,
    title: "JavaScript",
    experience: "Básico",
    description: `
Atualmente estou desenvolvendo minhas habilidades em JavaScript, explorando os fundamentos da linguagem e construindo uma base sólida para aplicações mais interativas no futuro.

Tenho domínio dos primeiros conceitos e sintaxes essenciais, como:
- Exibição de mensagens com alert() e console.log()
- Estruturas condicionais como if/else e switch
- Conhecimentos iniciais sobre arrays e manipulação de dados
- Entendimento da lógica de execução sequencial e tomada de decisão

Além disso, venho estudando lógica de programação com foco em resolver problemas de forma clara e eficiente, praticando pequenos desafios e exercitando bastante o pensamento computacional.
    `,
    color: "text-yellow-300",
  },
  {
    id: "react",
    Icon: FaReact,
    title: "React",
    experience: "Intermediário",
    description: `
Tenho uma boa base em React e entendo conceitos fundamentais para construir interfaces dinâmicas e reativas.

Já utilizo hooks como useState() e useEffect() para gerenciar estado e efeitos colaterais. Sei trabalhar com componentes funcionais, organização em pages e services, e modularização com export default.

Também uso react-router para navegação entre rotas, criando experiências de usuário fluídas.

Atualmente estou aprendendo a consumir APIs externas, entendendo as diferenças entre tipos de APIs e como integrar dados ao front-end de forma eficiente.
    `,
    color: "text-cyan-400",
  },
  {
    id: "java",
    Icon: FaJava,
    title: "Java",
    experience: "Básico",
    description: `
Tenho conhecimentos básicos em Java, incluindo o uso de estruturas condicionais como if/else e switch, fundamentais para controle de fluxo e tomada de decisões no código.

Entendo e aplico a definição do método principal public static void main(String[] args), que funciona como ponto de entrada para execução dos programas Java.

Consigo criar e manipular vetores (arrays) em nível inicial, permitindo armazenar e acessar coleções de dados de forma eficiente.

Tenho consciência da importância da organização e clareza no código e estou focado em expandir meus conhecimentos, especialmente na programação orientada a objetos, para desenvolver aplicações mais robustas e estruturadas.
    `,
    color: "text-red-600",
  },
  {
    id: "mysql",
    Icon: SiMysql,
    title: "MySQL",
    experience: "Básico",
    description: `
Tenho conhecimentos básicos em MySQL, incluindo operações essenciais para manipulação e consulta de dados em bancos relacionais.

Consigo trabalhar com comandos como:
- SELECT, para consulta de dados;
- WHERE, para filtros e condições nas consultas;
- JOIN, para relacionar tabelas;
- INSERT, para inserção de dados;
- UPDATE, para atualização de dados;
- DELETE, para remoção de dados;
- CREATE, ALTER e DESCRIBE, para criação, modificação e inspeção de tabelas e estruturas;
- USE, para seleção do banco de dados em uso.

Também entendo conceitos básicos de modelagem de dados, tipos de dados como CHAR, VARCHAR, INT e DATE, e uso de operadores como LIKE para filtros avançados.

Sei copiar e puxar informações entre tabelas, garantindo consultas eficientes e integridade dos dados.
    `,
    color: "text-blue-500",
  },
  {
    id: "nodejs",
    Icon: FaNodeJs,
    title: "Node.js",
    experience: "Básico",
    description: `
Tenho noções iniciais de desenvolvimento com Node.js. Já trabalhei com projetos simples usando o framework Express para configurar rotas HTTP e estruturar APIs REST.

Sei organizar arquivos separando responsabilidades em pastas como models, routes e controllers. Tenho familiaridade com o ORM Sequelize, conseguindo definir models, criar migrations e conectar com um banco PostgreSQL.

Entendo conceitos básicos de HTTP como verbos (GET, POST, PUT, DELETE), códigos de status e requisições assíncronas com async/await.

Ainda estou aprendendo sobre middlewares, tratamento de erros e boas práticas de arquitetura, mas já consigo montar um backend funcional e persistir dados de forma simples.
    `,
    color: "text-green-500",
  },
];

export default skills;
