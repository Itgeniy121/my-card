"use client"
import gh from "../../../../../public/gh.svg"
import Image from "next/image";
import tg from "../../../../../public/tg.svg"
import vk from "../../../../../public/vk.svg"
import mail from "../../../../../public/gmail.svg"
const Contacts = () => {
  return (
    <div id="contacts" className="w-full h-[300px] bg-[#26273f] flex flex-col py-[40px] px-[50px]">
        <h1 className="text-[#9f9fa0] font-[400] text-[25px]">Контакты для связи со мной</h1>
        <div className="flex flex-row justify-between items-center w-[30%] mt-[50px]">
        <div onClick={() => location.href = "https://t.me/nDpSmm"} className="w-[45px] h-[45px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={tg} className="w-[30px] h-[30px]" alt="socials"/>
            </div>
            <div onClick={() => location.href = "https://vk.com/ndpsm"} className="w-[45px] h-[45px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={vk} className="w-[35px] h-[35px]" alt="socials"/>
            </div>
            <div onClick={() => location.href = "https://spb.hh.ru/resume/5216b20bff0c0a6e170039ed1f6b3254586d75"} className="w-[45px] h-[45px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <h1 className="main">hh</h1>
            </div>
            <div onClick={() => location.href = "https://github.com/Itgeniy121"} className="w-[45px] h-[45px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={gh} className="w-[35px] h-[35px]" alt="socials"/>
            </div>
            <div onClick={() => location.href = "mailto:alekseylebedev322@gmail.com"} className="w-[45px] h-[45px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={mail} className="w-[32px] h-[32px]" alt="socials"/>
            </div>
        </div>
    </div>
  )
};

export default Contacts;
