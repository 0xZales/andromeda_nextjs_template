'use client'
import { FC, ReactNode, HTMLAttributes, forwardRef } from 'react';
import {createDomMotionComponent ,DOMMotionComponents} from "framer-motion";
type MotionTagName = keyof DOMMotionComponents;
interface MotionContainerProps extends HTMLAttributes<HTMLElement>  {
  container: {
    hidden: { opacity: number, scale: number },
    visible: {
      opacity: number,
      scale: number,
      transition: {
        delayChildren: number,
        staggerChildren: number
      }
    }
  },
  tag:MotionTagName 
}

const MotionContainer: FC<MotionContainerProps> = ({ children, container,className,tag}) => {
    const motion = {
       element: createDomMotionComponent(tag)
      }
  return (
    <motion.element animate='visible' initial='hidden' variants={container} className={className}>
      {children}
    </motion.element>
  );
};

export default MotionContainer;
