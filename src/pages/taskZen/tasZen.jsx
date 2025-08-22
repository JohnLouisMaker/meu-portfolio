import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import TaskZenBanner from "../../assets/taskzen.png";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TaskZen() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Header className="no-header-margin" />

      {/* Hero Section */}
      <section className="text-center mt-0 pt-6">
        <motion.h1
          className="relative z-10 font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl mb-8 mt-0"
          variants={fadeIn}
        >
          TaskZen
        </motion.h1>
        <motion.img
          src={TaskZenBanner}
          alt="Banner do Projeto TaskZen"
          className="mx-auto w-[90vw] max-w-2xl rounded-lg shadow-lg mb-12"
          variants={fadeIn}
        />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.a
            href="https://task-zen-final.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <button className="bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-600 hover:to-blue-800 text-white font-raleway-bold px-8 py-3 lg:text-xl rounded-lg shadow-md transition duration-200">
              Ver Projeto Com Vercel
            </button>
          </motion.a>
          <motion.a
            href="https://github.com/JohnLouisMaker/task-zen-final"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-500 hover:to-gray-700 text-white font-raleway-bold lg:text-xl px-8 py-3 rounded-lg shadow-md transition duration-200">
              Ver Código No GitHub
            </button>
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="my-15"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre o TaskZen
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <p>
            O TaskZen é uma aplicação web moderna e minimalista para
            gerenciamento de tarefas, desenvolvida com foco na simplicidade e
            experiência do usuário. Combinando design elegante com
            funcionalidade intuitiva, oferece uma abordagem zen para organizar
            seu dia a dia.
          </p>
        </div>
      </motion.section>

      {/* Why TaskZen? Section */}
      <motion.section
        className="my-15"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Por que TaskZen?
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Interface Zen: Design limpo e relaxante</li>
            <li>Gradientes Dinâmicos: Visual fluido e moderno</li>
            <li>Totalmente Responsivo: Funciona em qualquer dispositivo</li>
            <li>Performance Otimizada: Carregamento rápido com Vite</li>
            <li>Sistema de Autenticação: Login e cadastro</li>
            <li>Recuperação de Senha: Sistema via EmailJS</li>
          </ul>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="my-15"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Funcionalidades
        </h2>
        <div className="font-outfit text-white max-w-3xl mx-auto px-12 sm:px-16 md:px-12 lg:px-15 space-y-6 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              Página Inicial
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Landing page atrativa com depoimentos</li>
              <li>Navegação intuitiva</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              Autenticação Completa
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cadastro de usuários</li>
              <li>Login de usuários</li>
              <li>Recuperação de senha via email</li>
              <li>Validação de dados em tempo real</li>
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              Gerenciamento de Tarefas
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
            <h3 className="flex items-center gap-2 font-raleway-bold text-xl text-blue-400 mb-2">
              Design & UX
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
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="my-15"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
                <td className="px-4 py-3 border-b border-zinc-700">EmailJS</td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Envio de emails
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-zinc-700">
                  JSONBin.io
                </td>
                <td className="px-4 py-3 border-b border-zinc-700">
                  Armazenamento de usuários
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">React Icons</td>
                <td className="px-4 py-3">Ícones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
}
