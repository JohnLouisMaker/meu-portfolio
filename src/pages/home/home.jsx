import { useState } from "react";
import { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import mySelf from "../../assets/Myself.png";
import TaskZenBanner from "../../assets/taskzen.png";
import PDFSimples from "../../assets/pdf-site.png";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  const [openSkill, setOpenSkill] = useState(null);

  const skills = [
    {
      id: "html5",
      Icon: FaHtml5,
      title: "HTML5",
      experience: "Intermediário a Avançado",
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
      experience: "Intermediário a Avançado",
      description:
        "CSS3 é usado para estilizar e deixar o site responsivo, com animações e layouts modernos.",
      color: "text-blue-600",
    },
    {
      id: "js",
      Icon: IoLogoJavascript,
      title: "JavaScript",
      experience: "Básico a Intermediário",
      description:
        "JavaScript traz interatividade à página, manipulando eventos e dados dinamicamente.",
      color: "text-yellow-300",
    },
    {
      id: "react",
      Icon: FaReact,
      title: "React",
      experience: "Intermediário",
      description:
        "React é uma biblioteca JavaScript para construir interfaces de usuário de forma eficiente e reativa.",
      color: "text-cyan-400",
    },
    {
      id: "java",
      Icon: FaJava,
      title: "Java",
      experience: "Básico",
      description:
        "Java é uma linguagem de programação amplamente utilizada, conhecida por sua portabilidade e robustez.",
      color: "text-red-600",
    },
    {
      id: "mysql",
      Icon: SiMysql,
      title: "MySQL",
      experience: "Básico",
      description:
        "MySQL é um banco de dados relacional muito usado para armazenar informações organizadas.",
      color: "text-blue-500",
    },
  ];

  const projects = [
    {
      id: "taskzen",
      img: TaskZenBanner,
      title: "TaskZen",
      description:
        "Uma ToDo List com sistema de login e criação de conta, feita com React e JSON Server.",
      navigate: "/taskZen", // <- troca isso
    },
    {
      id: "pdfsimples",
      img: PDFSimples,
      title: "PDF Simples",
      description:
        "Um gerador de PDF simples, feito com React e uma API para conversão de HTML em PDF.",
      navigate: "/pdfSimples", // <- troca isso também
    },
  ];

  const card =
    "bg-zinc-900 py-8 px-6 rounded-xl shadow-lg w-64 sm:w-46 md:w-48 lg:w-52 h-52 flex flex-col items-center justify-center text-center hover:scale-110 transform transition-all duration-200 cursor-pointer";

  const projectCard =
    "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-96 flex flex-col items-center text-center hover:scale-110 transition-transform duration-200";

  useEffect(() => {
    if (openSkill !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openSkill]);

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="relative text-center pt-13 lg:pt-26 sm:pt-26 md:pt-26 xl:pt-26">
        <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
          Olá, eu sou João Luis!
        </h1>
        <img
          src={mySelf}
          alt="Foto de João Luis"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mask-img transition-transform duration-300 opacity-0 animate-slide-up"
        />
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre Mim
        </h2>

        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
          <p>
            Tenho 18 anos e sou desenvolvedor web com foco em front-end,
            apaixonado por tecnologia e design de interfaces.
          </p>
          <p>
            Atualmente curso Análise e Desenvolvimento de Sistemas na
            Unifametro, sempre buscando aprender mais e me superar a cada
            projeto. Participei da Geração Tech (Desenvolvimento Web), o que
            fortaleceu ainda mais minha base na área.
          </p>
          <p>
            Estou em busca de oportunidades que me desafiem e me permitam
            crescer na área tech.
          </p>
          <p>
            Sou movido a café, boas ideias e vontade de fazer a diferença por
            meio do código.
          </p>
          <p className="italic text-center">
            Hobbies: boa música, automobilismo e games.
          </p>
        </div>
      </section>

      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Habilidades
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:max-w-2xl md:max-w-2xl mx-auto">
          {skills.map(({ Icon, title, id, color }) => (
            <div
              key={id}
              className={card}
              onClick={() => setOpenSkill(id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setOpenSkill(id);
              }}
            >
              <Icon className={`w-20 h-24 mb-4 lg:w-25 lg:h-28 ${color}`} />
              <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {openSkill && (
          <>
            {/* Fundo escuro que fecha o modal */}
            <div
              className="fixed inset-0 bg-black/65 z-50"
              onClick={() => setOpenSkill(null)}
            ></div>

            {/* Modal com rolagem interna personalizada */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 bg-zinc-900 p-6 rounded-xl shadow-xl text-white sm:w-11/12 sm:max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenSkill(null)}
                  className="text-white text-3xl hover:text-zinc-300"
                  aria-label="Fechar modal"
                >
                  <FiX />
                </button>
              </div>

              {skills
                .filter((skill) => skill.id === openSkill)
                .map(({ Icon, title, description, experience, color }) => (
                  <div
                    key={title}
                    className="space-y-4 flex flex-col items-center text-center"
                  >
                    <Icon className={`w-20 h-24 lg:w-25 lg:h-28 ${color}`} />

                    <h3 className="text-2xl font-raleway-bold mb-2 text-white">
                      {title}
                    </h3>

                    <div className="text-left max-w-xl w-full space-y-3">
                      <h4 className={`font-outfit text-base ${color}`}>
                        Experiência:{" "}
                        <strong className="font-semibold">{experience}</strong>
                      </h4>

                      <pre className="font-outfit text-base text-zinc-200 whitespace-pre-wrap">
                        {description}
                      </pre>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </section>

      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 mt-19 text-center">
          Projetos
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {projects.map(({ id, title, description, img, navigate }) => (
            <Link to={navigate} key={id}>
              <div className={projectCard}>
                <img
                  src={img}
                  alt={`Projeto ${title}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="font-outfit text-gray-300 text-sm">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
