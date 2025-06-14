import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import mySelf from "../assets/Myself.png";
import TaskZenBanner from "../assets/taskzen.png";
import PDFSimples from "../assets/pdf-site.png";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const card =
  "bg-zinc-900 py-8 px-6 rounded-xl shadow-lg w-64 sm:w-40 md:w-48 lg:w-52 h-52 flex flex-col items-center justify-center text-center hover:scale-105 transform transition-all duration-200 opacity-0 translate-y-10 animate-slide-up";

const projectCard =
  "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-96 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 opacity-0 translate-y-10 animate-slide-up ";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* First Impressions Section */}
     <section className="relative text-center pt-13 lg:pt-26 sm:pt-26 md:pt-26 xl:pt-26">
  <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
    Olá, eu sou João Luis!
  </h1>
  <img
    src={mySelf}
    alt=""
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mask-img transition-transform duration-300 opacity-0 animate-slide-up"
  />
</section>


      {/* About Me Section */}
      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
          Sobre Mim
        </h2>

        <div className="font-raleway-light text-white pl-15 pr-12 sm:pl-18 sm:pr-30 md:pr-60 md:pl-25 lg:pr-64 lg:pl-37 space-y-1">
          <p>
            Tenho 18 anos e sou desenvolvedor web com foco em front-end,
            apaixonado por tecnologia e design de interfaces.
          </p>
          <p>
            Atualmente curso Análise e Desenvolvimento de Sistemas, sempre
            buscando aprender mais e me superar a cada projeto. Estou em busca
            de oportunidades que me desafiem e me permitam crescer na área tech.
          </p>
          <p>
            Sou movido a café, boas ideias e vontade de fazer a diferença por
            meio do código.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 text-center">
          Habilidades
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
          <div className={card}>
            <FaHtml5 className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-orange-400" />
            <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
              HTML5
            </h3>
          </div>

          <div className={card}>
            <FaCss3Alt className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-blue-600" />
            <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
              CSS3
            </h3>
          </div>

          <div className={card}>
            <IoLogoJavascript className="w-20 h-24 mb-4 md:mb-8 lg:mb-12 text-yellow-300" />
            <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">
              JavaScript
            </h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl pb-8 mt-19 text-center">
          Projetos
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          <div className={projectCard}>
            <img
              src={TaskZenBanner}
              alt="Projeto 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">TaskZen</h3>
            <p className="text-gray-300 text-sm">
              Uma ToDo List com sistema de login e criação de conta, feita com
              React e JSON Server.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={PDFSimples}
              alt="Projeto 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">
              PDF-Simples!
            </h3>
            <p className="text-gray-300 text-sm">
              Um site simples para converter alguns arquivos em PDF de forma
              rápida e prática.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={mySelf}
              alt="Projeto 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">Projeto 3</h3>
            <p className="text-gray-300 text-sm">
              Quiz interativo em Java sobre temas sociais e cidadania.
            </p>
          </div>

          <div className={projectCard}>
            <img
              src={mySelf}
              alt="Projeto 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">Projeto 4</h3>
            <p className="text-gray-300 text-sm">
              Portfolio pessoal com React Router, estilização moderna e
              responsiva.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
