import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
import SkillContent from "../../components/modal/skill";
import FormationContent from "../../components/modal/formation";

import mySelf from "../../assets/Myself.png";

import { skills } from "../../components/skill/skillInfo";
import { projects } from "../../components/projects/projectsInfo";
import { formation } from "../../components/formation/formationInfo";
import SkillCard from "../../components/skill/skill";
import ProjectCard from "../../components/projects/project";
import FormationCard from "../../components/formation/formation";

const variants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
};

export default function Home() {
  const [openModalId, setOpenModalId] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openModalId ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openModalId]);

  const cardClass =
    "bg-zinc-900 py-8 px-6 rounded-xl shadow-lg w-64 sm:w-46 md:w-48 lg:w-52 h-52 flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer hover:scale-105";

  const formationCard =
    "bg-zinc-900 py-6 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-78 flex flex-col items-center text-center transition-transform duration-200 cursor-pointer hover:scale-105";

  return (
    <motion.div
      className="min-h-screen bg-black"
      variants={variants.fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <section className="relative text-center pt-13 lg:pt-26">
        <motion.h1
          className="relative z-10  font-raleway-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl"
          variants={variants.fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Olá, eu sou João Luis!
        </motion.h1>
        <motion.img
          src={mySelf}
          alt="Foto de João Luis"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mask-img"
          variants={variants.fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </section>

      {/* Sobre Mim */}
      <motion.section
        className="my-15"
        variants={variants.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Sobre Mim
        </h2>
        <div className="font-outfit rounded-xl text-white max-w-3xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 space-y-4 text-left sm:text-justify text-base sm:text-lg lg:text-xl">
          <p>
            Tenho 18 anos e sou desenvolvedor web com foco em front-end, apaixonado por tecnologia e
            design de interfaces.
          </p>
          <p>
            Atualmente curso Análise e Desenvolvimento de Sistemas na Unifametro. Já participei da
            Geração Tech Web.
          </p>
          <p>Busco oportunidades que me desafiem e permitam crescer na área.</p>
          <p>Sou movido a café, boas ideias e vontade de fazer a diferença com código.</p>
          <p className="italic text-center">Hobbies: boa música, automobilismo e games.</p>
        </div>
      </motion.section>

      {/* Habilidades */}
      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:max-w-2xl md:max-w-2xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              {...skill}
              cardClass={cardClass}
              variants={variants.fadeIn}
              onClick={() => {
                setOpenModalId(skill.id);
                setModalType("skill");
              }}
            />
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Projetos
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="py-7">
        <h2 className="font-raleway-bold text-blue-600 text-2xl lg:text-3xl pb-8 text-center">
          Formação
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mx-auto ">
          {formation.map((form) => (
            <FormationCard
              key={form.id}
              {...form}
              formationClass={formationCard}
              variants={variants.fadeIn}
              onClick={() => {
                setOpenModalId(form.id);
                setModalType("formation");
              }}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!openModalId} onClose={() => setOpenModalId(null)}>
        {modalType === "skill" && <SkillContent skill={skills.find((s) => s.id === openModalId)} />}
        {modalType === "formation" && (
          <FormationContent formationItem={formation.find((f) => f.id === openModalId)} />
        )}
      </Modal>

      <Footer />
    </motion.div>
  );
}
