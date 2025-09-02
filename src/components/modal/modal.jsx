import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const variants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
};

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/65 z-50" onClick={onClose} aria-label="Fechar modal" />
      <motion.div
        className="custom-scrollbar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 bg-zinc-900 p-6 rounded-xl shadow-xl text-white max-h-[90vh] max-w-[90vw] w-full sm:w-auto overflow-y-auto"
        variants={variants.fadeIn}
        initial="hidden"
        animate="visible"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white text-3xl hover:text-zinc-300"
            aria-label="Fechar modal"
          >
            <FiX className="mb-2" />
          </button>
        </div>
        {children}
      </motion.div>
    </>
  );
}
