import { motion } from "framer-motion";

export default function SkillCard({ id, Icon, title, color, onClick, cardClass, variants }) {
  return (
    <motion.div
      key={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={cardClass}
    >
      <Icon className={`w-20 h-24 mb-4 ${color}`} />
      <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">{title}</h3>
    </motion.div>
  );
}
