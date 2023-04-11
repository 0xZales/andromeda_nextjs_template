import axios from "axios";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from 'html-react-parser';
export const fetchData = async (fileName: string) => {
  const res = await fetch( "http://localhost:3000/api/staticdata" ,{ 
    method:"POST",
    body:JSON.stringify({fileName}),
    // cache:'force-cache'
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};
export const classNameOptimization = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const parseHtml=(content:string)=>{
  const parsedContent = parse(content)
  return parsedContent
}
