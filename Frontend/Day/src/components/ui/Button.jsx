import { motion } from "motion/react";

function Button({ children, onClick }) {
  return (
    <motion.button
      className="bg-accent text-textMain p-2 px-4 py-2"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;