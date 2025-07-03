import CinezaBanner from "../../assets/cineza.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function Cineza() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header className="no-header-margin" />

      <section className="text-center mt-0 pt-6">
        <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl mb-8 mt-0">
          Cineza
        </h1>
        <img
          src={CinezaBanner}
          alt="Banner do Projeto Cineza"
          className="mx-auto w-[90vw] max-w-2xl rounded-lg shadow-lg mb-12 animate-slide-up"
        />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://cineza-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-600 hover:to-blue-800 text-white font-raleway-bold px-8 py-3 lg:text-xl rounded-lg shadow-md transition duration-200">
              Ver Projeto Com Vercel
            </button>
          </a>
          <a
            href="https://github.com/JohnLouisMaker/cineza"
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
          Sobre o Cineza
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <p>
            Cineza é uma plataforma web para descoberta de filmes, construída
            com React, Tailwind CSS e Vite. Utiliza a API do TMDb para exibir os
            filmes mais populares, bem avaliados e lançamentos recentes com uma
            interface elegante e responsiva.
          </p>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Por que Cineza?
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Descubra filmes populares, lançamentos e mais</li>
            <li>
              Design inspirado em cinemas modernos com destaques em azul cósmico
            </li>
            <li>Experiência responsiva em todos os dispositivos</li>
            <li>Busca inteligente com sugestões em tempo real</li>
            <li>Integração com a API oficial do TMDb</li>
            <li>Carregamento otimizado com Vite</li>
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
              🎭 Interface Cinematográfica
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Design moderno com paleta escura e destaques em azul</li>
              <li>Tipografia personalizada e animações suaves</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              🔍 Busca Inteligente
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Resultados em tempo real com sugestões dinâmicas</li>
              <li>Pesquisa por título ou gênero</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              📱 Responsividade
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Compatível com desktop, tablets e smartphones</li>
              <li>Menu hamburger e layout adaptativo</li>
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
                  Framework principal da interface
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">Vite</td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Build tool e servidor de desenvolvimento
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
                  Cliente HTTP para chamadas à API
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">TMDb API</td>
                <td className="px-4 py-3">
                  Fonte de dados sobre filmes e séries
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
