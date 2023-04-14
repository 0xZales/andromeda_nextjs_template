'use client'
import { FC, ReactNode, HTMLAttributes, forwardRef } from 'react';
import { createDomMotionComponent, DOMMotionComponents,MotionProps } from "framer-motion";
type MotionTagName = keyof DOMMotionComponents;
interface MotionItemProps extends MotionProps{
    item?: {
    },
    tag: MotionTagName,
    className?:string
};
// HTMLAttributes<HTMLElement>,
// className, 
const MotionItem: FC<MotionItemProps> = ({ children, item, tag,className,...props }) => {
    const motion = {
        element: createDomMotionComponent(tag)
    }
    return (
        <motion.element variants={ item} {...props}
        className={className}
        >
            {children}
        </motion.element>
    );
};
MotionItem.displayName = "MotionItem"
export default MotionItem;