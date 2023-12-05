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
    <div className='w-full h-[85vh] flex flex-row justify-between px-[50px]'>
      <div className='flex flex-col items-start justify-start w-[45%] h-full mt-[150px]'>
        <h1 className='text-[white] font-[600] text-[35px]'>
          {title}
        </h1>
        <p className='text-[white] font-[300] text-[15px] mt-[30px]'>
          {description}
        </p>
        <button onClick={scrollToPortfolio} className='border-[2px] border-[#B4B4B4] w-[150px] h-[40px] mt-[40px] hover:bg-[#26273f] duration-300'>
          <h1 className='text-[white]'>К работам</h1>
        </button>
      </div>
      <div className='flex justify-center items-center w-1/2 h-full'>
        <Tilt>
          <Image src={profile} alt='img' className='w-[650px] h-[370px]' />
        </Tilt>
      </div>
    </div>
  );
};

export default Welocme;
