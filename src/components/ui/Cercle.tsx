import {FC,HTMLAttributes} from 'react';
interface CercleProps extends HTMLAttributes<HTMLDivElement>  {
  fill?:boolean,
  width:number,
  height:number,
};

const Cercle:FC<CercleProps> = ({ children, className,fill,height,width}) => {
  return (
    <div className={`absolute ${className} ${
        fill ? "bg-primary" : "bg-[#ffe6db]"
      } rounded-full flex items-center justify-center`} style={{ width: `${width}px`, height: `${height}px` }}>
        {children}
    </div>
  );
};

export default Cercle;