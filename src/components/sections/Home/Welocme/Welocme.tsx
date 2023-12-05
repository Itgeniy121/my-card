"use client";
import { FC } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import profile from "../../../../../public/prof.png";
interface Welcomeprops {
  title?: string;
  description?: string;
}
const Welocme: FC<Welcomeprops> = ({ title, description }) => {
  const scrollToPortfolio = () =>{
    const el = document.getElementById("portfolio")
    el?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className='w-full h-[85vh] flex flex-row justify-between px-[50px] max-lg:flex-col max-lg:h-full max-sm:px-[10px]'>
      <div className='flex flex-col items-start justify-start w-[50%] h-full mt-[150px] mr-[40px] max-lg:w-full max-lg:mt-[30px]'>
        <p className='text-[white] font-[600] text-[35px] h-[100px] leading-[40px] max-sm:text-[22px] max-sm:h-[60px] max-ssml:leading-[30px] max-ssml:h-[70px]'>
          {title}
        </p>
        <p className='text-[white] font-[300] text-[15px] max-sm:text-[10px]'>
          {description}
        </p>
        <button onClick={scrollToPortfolio} className='border-[2px] border-[#B4B4B4] w-[150px] h-[40px] mt-[40px] hover:bg-[#26273f] duration-300 max-sm:w-[100px] max-sm:h-[30px]'>
          <h1 className='text-[white] max-sm:text-[12px]'>К работам</h1>
        </button>
      </div>
      <div className='flex justify-center items-center w-1/2 h-full max-lg:w-full max-lg:mt-[40px]'>
        <Tilt>
          <Image src={profile} alt='img' className='w-[100%] h-[20%]' />
        </Tilt>
      </div>
    </div>
  );
};

export default Welocme;
