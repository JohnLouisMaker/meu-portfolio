import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import TaskZenBanner from "../../assets/taskzen.png";

export default function TaskZen() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header className="no-header-margin" />

      <section className=" text-center mt-0 pt-6">
        <h1 className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl mb-8 mt-0">
          TaskZen
        </h1>
        <img
          src={TaskZenBanner}
          alt="Banner do Projeto TaskZen"
          className="mx-auto w-[90vw] max-w-2xl rounded-lg shadow-lg mb-12"
        />
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre o TaskZen
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
          <p>
            O TaskZen é uma aplicação web moderna e minimalista para
            gerenciamento de tarefas, desenvolvida com foco na simplicidade e
            experiência do usuário. Combinando design elegante com
            funcionalidade intuitiva, oferece uma abordagem zen para organizar
            seu dia a dia.
          </p>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Por que TaskZen?
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Interface Zen: Design limpo e relaxante</li>
            <li>Gradientes Dinâmicos: Visual fluido e moderno</li>
            <li>Totalmente Responsivo: Funciona em qualquer dispositivo</li>
            <li>Performance Otimizada: Carregamento rápido com Vite</li>
            <li>Sistema de Autenticação: Login e cadastro</li>
            <li>Recuperação de Senha: Sistema via EmailJS</li>
          </ul>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Funcionalidades
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-6 text-justify text-base sm:text-lg lg:text-xl">
          <div>
            <h3 className="font-raleway-bold text-xl text-blue-400 mb-2">
              🏠 Página Inicial
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Landing page atrativa com depoimentos</li>
              <li>Navegação intuitiva</li>
            </ul>
          </div>
          <div>
            <h3 className="font-raleway-bold text-xl text-blue-400 mb-2">
              👤 Autenticação Completa
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cadastro de usuários</li>
              <li>Login de usuários</li>
              <li>Recuperação de senha via email</li>
              <li>Validação de dados em tempo real</li>
            </ul>
          </div>
          <div>
            <h3 className="font-raleway-bold text-xl text-blue-400 mb-2">
              📝 Gerenciamento de Tarefas
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Criar tarefas com título e descrição</li>
              <li>Marcar como concluída/pendente</li>
              <li>Interface drag-friendly</li>
              <li>Persistência automática no localStorage</li>
              <li>Feedback visual para tarefas concluídas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-raleway-bold text-xl text-blue-400 mb-2">
              🎨 Design & UX
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gradientes animados</li>
              <li>Backdrop blur effects</li>
              <li>Transições suaves</li>
              <li>Typography personalizada (Unageo)</li>
              <li>Scrollbar customizada</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-15">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Tecnologias
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-justify text-base sm:text-lg lg:text-xl">
          <div className="overflow-x-auto">
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
                    Framework principal
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-700">Vite</td>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    Build tool e dev server
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    React Router
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    Roteamento SPA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    Tailwind CSS
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    Styling e responsividade
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    EmailJS
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-700">
                    Envio de emails
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">JSONBin.io</td>
                  <td className="px-4 py-3">Armazenamento de usuários</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">React Icons</td>
                  <td className="px-4 py-3">Ícones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
