'use client'
import { FC, ReactNode, HTMLAttributes, forwardRef } from 'react';
import {createDomMotionComponent ,DOMMotionComponents,MotionProps} from "framer-motion";
type MotionTagName = keyof DOMMotionComponents;
interface MotionContainerProps  extends MotionProps  {
  container?: {
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
  tag:MotionTagName ,
  className?:string
}

const MotionContainer: FC<MotionContainerProps> = ({ children, container,className,tag,...props}) => {
    const motion = {
       element: createDomMotionComponent(tag)
      }
  return (
    <motion.element    initial="hidden"
    animate="visible" variants={container} className={className} {...props}>
      {children}
    </motion.element>
  );
};

export default MotionContainer;
