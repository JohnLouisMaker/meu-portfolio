import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import EyeOnTheSkyBanner from "../../assets/eots.png";

export default function EyeOnTheSky() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header className="no-header-margin" />

      <section className="text-center mt-0 pt-6">
        <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl mb-8 mt-0">
          Eye On The Sky
        </h1>
        <img
          src={EyeOnTheSkyBanner}
          alt="Banner do Projeto Eye On The Sky"
          className="mx-auto w-[90vw] max-w-2xl rounded-lg shadow-lg mb-12 animate-slide-up"
        />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://eye-on-the-sky.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-600 hover:to-blue-800 text-white font-raleway-bold px-8 py-3 lg:text-xl rounded-lg shadow-md transition duration-200">
              Ver Projeto Com Vercel
            </button>
          </a>
          <a
            href="https://github.com/JohnLouisMaker/eye-on-the-sky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-500 hover:to-gray-700 text-white font-raleway-bold lg:text-xl px-8 py-3 rounded-lg shadow-md transition duration-200">
              Ver Código No GitHub
            </button>
          </a>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre o Eye On The Sky
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <p>
            Eye On The Sky é uma aplicação React moderna que exibe diariamente a
            Astronomy Picture of the Day (APOD) da NASA, proporcionando uma
            experiência visual imersiva do universo com tradução automática para
            português brasileiro.
          </p>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Por que Eye On The Sky?
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Imagem Astronômica Diária oficial da NASA</li>
            <li>Tradução automática para português brasileiro</li>
            <li>Design moderno com gradientes cósmicos e efeitos visuais</li>
            <li>Responsivo para todos dispositivos</li>
            <li>Suporte para imagens e vídeos</li>
            <li>Performance rápida com Vite</li>
          </ul>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Funcionalidades
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-6 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              🌌 Conteúdo Diário da NASA
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Busca diária da imagem/vídeo oficial via API da NASA</li>
              <li>Exibição de título, data, créditos e descrição detalhada</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              🌍 Tradução Automática
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Tradução da descrição para português brasileiro em tempo real
              </li>
              <li>Planejamento para suportar múltiplos idiomas no futuro</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              🎨 Design Espacial
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gradientes roxos e índigo com efeitos glassmorphism</li>
              <li>Tipografia personalizada com fontes YapariTrial e Gantari</li>
              <li>Cards translúcidos com bordas neon e sombras dinâmicas</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              ⚡ Performance & Usabilidade
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Responsivo para desktop e mobile</li>
              <li>Carregamento rápido com Vite</li>
              <li>Animações suaves e interface intuitiva</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Tecnologias
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <table className="min-w-full bg-zinc-800 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-blue-600 text-left text-blue-400 font-semibold">
                  Tecnologia
                </th>
                <th className="px-4 py-2 border-b-2 border-blue-600 text-left text-blue-400 font-semibold">
                  Uso
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">React</td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Biblioteca principal
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">Vite</td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Build tool e servidor dev
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Tailwind CSS
                </td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Estilização e responsividade
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">Axios</td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Cliente HTTP para requisições
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">NASA APOD API</td>
                <td className="px-4 py-3">
                  Fonte oficial dos dados astronômicos
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}
