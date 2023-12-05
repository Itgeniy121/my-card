'use client';
import { FC } from "react";
import Image from "next/image";
interface CardProps{
  img: any,
  title: string,
  description: string,
  href?: string,
  
}
const Card1: FC<CardProps> = ({img, title, description, href}) => {
  return(
    <div className="flex relative flex-col w-1/3 h-[290px] cursor-pointer max-lg:w-[70%] max-sm:w-[100%] max-ssml:h-[200px]" onClick={() => {if(href) {location.href = href}}}>
        <Image src={img} alt="case" className="w-full h-full hover:opacity-30 hover:z-0 duration-300 z-50"/>
        <div className="flex flex-col items-start justify-start absolute z-0 px-[30px] py-[20px] max-ssml:px-[5px] max-ssml:py-[5px] pointer-events-none">
          <h1 className="text-[white] text-[25px] max-ssml:text-[22px]">{title}</h1>
          <p className="text-[white] text-[18px] mt-[30px] max-ssml:mt-[15px] max-ssml:text-[11px]">{description}</p>
          <p className="text-[white] text-[13px] mt-[15px] max-ssml:mt-[10px] max-ssml:text-[11px] underline">Нажмите для просмтора</p>
        </div>
    </div>
  )
};

export default Card1;
