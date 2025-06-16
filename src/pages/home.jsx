import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FiX } from "react-icons/fi";

import mySelf from "../assets/Myself.png";
import TaskZenBanner from "../assets/taskzen.png";
import PDFSimples from "../assets/pdf-site.png";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Home() {
  const [openSkill, setOpenSkill] = useState(null);

  const skills = [
    {
      id: "html5",
      Icon: FaHtml5,
      title: "HTML5",
      description:
        "HTML5 é a linguagem principal para criar a estrutura das páginas web, com vários recursos novos e poderosos.",
      color: "text-orange-400",
    },
    {
      id: "css3",
      Icon: FaCss3Alt,
      title: "CSS3",
      description:
        "CSS3 é usado para estilizar e deixar o site responsivo, com animações e layouts modernos.",
      color: "text-blue-600",
    },
    {
      id: "js",
      Icon: IoLogoJavascript,
      title: "JavaScript",
      description:
        "JavaScript traz interatividade à página, manipulando eventos e dados dinamicamente.",
      color: "text-yellow-300",
    },
    {
      id: "mysql",
      Icon: SiMysql,
      title: "MySQL",
      description:
        "MySQL é um banco de dados relacional muito usado para armazenar informações organizadas.",
      color: "text-blue-700",
    },
  ];

  const card =
    "bg-zinc-900 py-8 px-6 rounded-xl shadow-lg w-64 sm:w-40 md:w-48 lg:w-52 h-52 flex flex-col items-center justify-center text-center hover:scale-105 transform transition-all duration-200 cursor-pointer";

  const projectCard =
    "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-96 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200";

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
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
          Sobre Mim
        </h2>

        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-10 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
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
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
          Habilidades
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
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
            <div
              className="fixed inset-0 bg-black/65 z-50"
              onClick={() => setOpenSkill(null)}
            ></div>

            <div className="fixed top-1/2 left-1/2 w-75 p-6 bg-zinc-900 rounded-xl shadow-xl z-60 transform -translate-x-1/2 -translate-y-1/2 text-center text-white sm:w-11/12 sm:max-w-md
            lg:max-w-2xl">
              <button
                onClick={() => setOpenSkill(null)}
                className="text-white text-3xl mb-4 float-right hover:text-zinc-300"
                aria-label="Fechar modal"
              >
                <FiX />
              </button>

              {skills
                .filter((skill) => skill.id === openSkill)
                .map(({ title, description }) => (
                  <div key={title}>
                    <h3 className="text-2xl font-raleway-bold mb-4">{title}</h3>
                    <p className="font-outfit text-base">{description}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </section>

      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 mt-19 text-center">
          Projetos
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          <div className={projectCard}>
            <img
              src={TaskZenBanner}
              alt="Projeto TaskZen"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
              TaskZen
            </h3>
            <p className="font-outfit text-gray-300 text-sm">
              Uma ToDo List com sistema de login e criação de conta, feita com
              React e JSON Server.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={PDFSimples}
              alt="Projeto PDF-Simples!"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
              PDF-Simples!
            </h3>
            <p className="font-outfit text-gray-300 text-sm">
              Um site simples para converter alguns arquivos em PDF de forma
              rápida e prática.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={mySelf}
              alt="Projeto Quiz"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
              Projeto 3
            </h3>
            <p className="font-outfit text-gray-300 text-sm">
              Quiz interativo em Java sobre temas sociais e cidadania.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={mySelf}
              alt="Projeto Portfolio"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-raleway-bold text-white text-xl font-semibold mb-2">
              Projeto 4
            </h3>
            <p className="font-outfit text-gray-300 text-sm">
              Portfolio pessoal com React Router, estilização moderna e
              responsiva.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal / Menu centralizado que abre ao clicar numa habilidade */}
    </div>
  );
}
