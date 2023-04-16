import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from 'html-react-parser';

export const classNameOptimization = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const parseHtml=(content:string)=>{
  const parsedContent = parse(content)
  return parsedContent
}
export const converTDate=(rawDate:string)=>{
  const date = new Date(rawDate);
  const options = {year:"numeric",month:'long',day:'numeric'}
  return date.toLocaleString('en-us',{year:"numeric",month:'long',day:'numeric'})
}