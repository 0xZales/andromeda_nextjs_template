'use client'
import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
interface ProviderProps {
  children: ReactNode
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5
    }
  }
};
const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <AnimatePresence  >
      <motion.div variants={container}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Provider;