'use client'
import { FC, ReactNode, HTMLAttributes, forwardRef } from 'react';
import {createDomMotionComponent ,MotionProps} from "framer-motion";
interface MotionContainerProps  extends MotionProps  {
  variant?: {

  },
  tag: 'div' | 'ul' | 'li',
  className?:string
}

const MotionContainer: FC<MotionContainerProps> = ({ children, variant,className,tag,...props}) => {
    const motion = {
      element: createDomMotionComponent(tag),
      }
  return (
    <motion.element    initial="hidden"
    animate="visible" variants={variant} className={className} {...props}>
      {children}
    </motion.element>
  );
};

export default MotionContainer;
