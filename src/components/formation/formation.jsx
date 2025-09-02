import { motion } from "framer-motion";

export default function FormationCard({
  id,
  title,
  img,
  colorBanner,
  onClick,
  formationClass,
  variants,
}) {
  return (
    <motion.div
      key={id}
      className={formationClass}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {img && (
        <img
          src={img}
          alt={title}
          className={`${
            id === "Geração Tech"
              ? `${colorBanner} w-auto h-80 object-cover rounded-md mb-4 pt-25 pr-5 pl-5 pb-[90px]`
              : colorBanner
          } h-auto object-cover rounded-md mb-4`}
        />
      )}
      <h3 className="text-lg lg:text-2xl text-white font-raleway-bold">{title}</h3>
    </motion.div>
  );
}
