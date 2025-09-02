import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, img, title, description, navigate }) {
  return (
    <Link to={navigate} key={id}>
      <motion.div
        className="bg-zinc-900 py-4 px-4 rounded-xl shadow-lg w-72 sm:w-80 md:w-96 flex flex-col items-center text-center transition-transform duration-200 cursor-pointer hover:scale-105"
        variants={{}}
        initial="hidden"
        whileInView="visible"
      >
        <img src={img} alt={title} className="w-full h-50 object-cover rounded-md mb-4" />
        <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">{title}</h3>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
