
'use client'
import { FC, ReactNode, HTMLAttributes, forwardRef } from 'react';
import {createDomMotionComponent ,DOMMotionComponents} from "framer-motion";
type MotionTagName = keyof DOMMotionComponents;
interface MotionItemProps extends HTMLAttributes<HTMLElement> {
    item: {
        hidden: { y: number, opacity: number },
        visible: {
            y: number,
            opacity: number
        }
    },
    tag:MotionTagName 

};

const MotionItem: FC<MotionItemProps> = ({ children, item,className,tag}) => {
    const motion = {
        element: createDomMotionComponent(tag)
       }
   return (
     <motion.element animate='visible' initial='hidden' variants={item} className={className}>
       {children}
     </motion.element>
   );
 };
MotionItem.displayName= "MotionItem"
export default MotionItem;