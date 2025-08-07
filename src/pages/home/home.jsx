import { useState, useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import mySelf from "../../assets/Myself.png";
import TaskZenBanner from "../../assets/taskzen.png";
import EyeOnTheSky from "../../assets/eots.png";
import CinezaBanner from "../../assets/cineza.png";
import unifametroBanner from "../../assets/unifametro.png";
import gtech from "../../assets/gtech.png";
import cev from "../../assets/cev.png";
import certificadocev from "../../assets/certificado-cev.png";
import certificadogt from "../../assets/certificado-gt.jpg";
import formatura1 from "../../assets/formatura-1.jpg";
import formatura2 from "../../assets/formatura-2.jpg";
import formatura3 from "../../assets/formatura-3.jpg";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  const [openModalId, setOpenModalId] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (openModalId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModalId]);

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

Tabelas:
- <table>
- <thead>
- <tbody>
- <tfoot>
- <tr>
- <td>
- <th>
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
- GROUP BY, para agrupar resultados;
- ORDER BY, para ordenar dados;
- INSERT, para inserção de registros;
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

Ainda estou aprendendo sobre middlewares, tratamento de erros e boas práticas de arquitetura, mas já consigo montar um backend funcional e persistir dados de forma simples.`,
      color: "text-green-500",
    },
  ];

  const projects = [
    {
      id: "taskzen",
      img: TaskZenBanner,
      title: "TaskZen",
      description: "ToDo List com login, feita com React e JSON Server.",
      navigate: "/taskZen",
    },
    {
      id: "eye-on-the-sky",
      img: EyeOnTheSky,
      title: "Eye on the Sky",
      description: "Usa API da NASA para exibir foto e info diária.",
      navigate: "/eye-on-the-sky",
    },
    {
      id: "cineza",
      img: CinezaBanner,
      title: "Cineza",
      description: "Site de filmes/séries com API do TMDB.",
      navigate: "/cineza",
    },
  ];

  const formation = [
    {
      id: "unifametro",
      colorBanner: "bg-green-700",
      img: unifametroBanner,
      title: "Unifametro",
      area: "ADS - Análise E Desenvolvimento de Sistemas",
      periodo: "FEV 2025 - (Previsto) JUN 2027",
      cursando: true,
      certificado: null,
    },

    {
      id: "Geração Tech",
      colorBanner: "bg-white",
      img: gtech,
      title: "Projeto Geração Tech - IEL Ceará",
      area: "Desenvolvedor Web Full Stack - Online - 2.0",
      periodo: `
ABR 2025 - JUL 2025
Formatura 6 De Agosto De 2025
`,
      cursando: false,
      certificado: certificadogt,
      fotos: [formatura1, formatura2],
    },

    {
      id: "curso-em-video",
      colorBanner: "bg-blue-600",
      img: cev,
      title: "Curso em Vídeo",
      area: "CURSO HTML5 E CSS3: MÓDULO 1 DE 5 [40 HORAS]",
      periodo: "Concluído em 2025",
      cursando: false,
      certificado: certificadocev,
    },
  ];

  const card =
    "bg-zinc-900 py-8 px-6 rounded-xl shadow-lg w-64 sm:w-46 md:w-48 lg:w-52 h-52 flex flex-col items-center justify-center text-center hover:scale-110 transform transition-all duration-200 cursor-pointer";

  const projectCard =
    "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-96 flex flex-col items-center text-center hover:scale-110 transition-transform duration-200";

  const formationCard =
    "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-78 flex flex-col items-center text-center hover:scale-110 transition-transform duration-200";

  function renderSkillContent() {
    const skill = skills.find((s) => s.id === openModalId);
    if (!skill) return null;

    const { Icon, title, description, experience, color } = skill;

    return (
      <div className="custom-scrollbar space-y-4 flex flex-col items-center text-center">
        <Icon className={`w-20 h-24 ${color}`} />
        <h3 className="text-2xl font-raleway-bold mb-2">{title}</h3>
        <div className="mt-8 text-left max-w-xl w-full">
          <h4 className={`font-outfit text-base ${color}`}>
            Experiência: <strong>{experience}</strong>
          </h4>
          <pre className="font-outfit text-base text-zinc-200 whitespace-pre-wrap">
            {description}
          </pre>
        </div>
      </div>
    );
  }

  function renderFormationContent() {
    const formationItem = formation.find((f) => f.id === openModalId);
    if (!formationItem) return null;

    const { id, img, colorBanner, title, area, periodo, cursando, certificado, fotos } =
      formationItem;

    return (
      <div className="custom-scrollbar space-y-6 flex flex-col items-center text-center overflow-y-auto max-h-[65vh] px-4 sm:px-6 md:px-8 lg:px-12">
        {img && (
          <img
            src={img}
            alt={title}
            className={
              id === "Geração Tech"
                ? `${colorBanner} rounded-xl w-full max-w-[220px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[320px] h-auto p-10 shadow-md`
                : `${colorBanner} rounded-xl w-full max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] h-auto shadow-md`
            }
          />
        )}

        <h3 className="text-xl sm:text-2xl md:text-3xl font-raleway-bold mb-2">{title}</h3>

        <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] mb-1">
          {area}
        </p>

        <p className="text-zinc-400 italic text-xs sm:text-sm md:text-base mb-1 whitespace-pre-line ">{periodo}</p>
        {cursando && (
          <div className="px-4  rounded-lg shadow-inner">
            <h4 className="text-green-400 text-base sm:text-lg md:text-xl font-outfit italic tracking-wide">
              Cursando
            </h4>
          </div>
        )}

        {certificado && (
          <div className="mt-6 flex flex-col items-center">
            <h4 className="font-outfit text-base sm:text-lg md:text-xl mb-3 text-blue-400">
              Certificado:
            </h4>
            <img
              src={certificado}
              alt="Certificado"
              className="
                rounded-xl w-full
                max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]
                h-auto shadow-lg
              "
            />
          </div>
        )}
        {formationItem.fotos && formationItem.fotos.length > 0 && (
          <div className="mt-6 flex flex-col items-center">
            <h4 className="font-outfit text-base sm:text-lg md:text-xl mb-3 text-blue-400">
              Fotos:
            </h4>
            {formationItem.fotos.map((fotos, index) => (
              <img
                key={index}
                src={fotos}
                alt={`Foto ${index + 1}`}
                className="
          rounded-xl w-full
          max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]
          h-[430px] shadow-lg mb-4
        "
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />

        {/* Apresentação */}
        <section className="relative text-center pt-13 lg:pt-26">
          <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
            Olá, eu sou João Luis!
          </h1>
          <img
            src={mySelf}
            alt="Foto de João Luis"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mask-img transition-transform duration-300 opacity-0 animate-slide-up"
          />
        </section>

        {/* Sobre Mim */}
        <section className="my-15">
          <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
            Sobre Mim
          </h2>
          <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
            <p>
              Tenho 18 anos e sou desenvolvedor web com foco em front-end, apaixonado por tecnologia
              e design de interfaces.
            </p>
            <p>
              Atualmente curso Análise e Desenvolvimento de Sistemas na Unifametro. Já participei da
              Geração Tech Web.
            </p>
            <p>Busco oportunidades que me desafiem e permitam crescer na área.</p>
            <p>Sou movido a café, boas ideias e vontade de fazer a diferença com código.</p>
            <p className="italic text-center">Hobbies: boa música, automobilismo e games.</p>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-7">
          <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
            Habilidades
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:max-w-2xl md:max-w-2xl mx-auto">
            {skills.map(({ Icon, title, id, color }) => (
              <div
                key={id}
                className={card}
                onClick={() => {
                  setOpenModalId(id);
                  setModalType("skill");
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setOpenModalId(id);
                    setModalType("skill");
                  }
                }}
              >
                <Icon className={`w-20 h-24 mb-4 ${color}`} />
                <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section className="py-7">
          <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
            Projetos
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map(({ id, title, description, img, navigate }) => (
              <Link to={navigate} key={id}>
                <div className={projectCard}>
                  <img
                    src={img}
                    alt={`Projeto ${title}`}
                    className="w-full h-50 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="font-outfit text-gray-300 text-sm">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Formação */}
        <section className="py-7">
          <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
            Formação
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {formation.map(({ colorBanner, title, id, img }) => (
              <div
                key={id}
                className={formationCard}
                onClick={() => {
                  setOpenModalId(id);
                  setModalType("formation");
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setOpenModalId(id);
                    setModalType("formation");
                  }
                }}
              >
                {img && (
                  <img
                    src={img}
                    alt={title}
                    className={`${
                      id === "Geração Tech"
                        ? `${colorBanner} w-auto h-80 object-cover rounded-md mb-4 pt-25 pr-5 pl-5 pb-[90px]`
                        : colorBanner
                    } h-auto object-cover rounded-md mb-4`}
                  />
                )}

                <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {openModalId && (
          <>
            <div
              className="fixed inset-0 bg-black/65 z-50"
              onClick={() => setOpenModalId(null)}
            ></div>

            <div
              className={`custom-scrollbar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                z-60 bg-zinc-900 p-6 rounded-xl shadow-xl text-white
                w-70 sm:w-11/12 sm:max-w-md lg:max-w-2xl max-h-[90vh]
                ${modalType === "formation" ? "" : "overflow-y-auto"}`}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenModalId(null)}
                  className="text-white text-3xl hover:text-zinc-300"
                  aria-label="Fechar modal"
                >
                  <FiX className="mb-2" />
                </button>
              </div>

              {modalType === "skill" && renderSkillContent()}
              {modalType === "formation" && renderFormationContent()}
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
}
