"use client"
import tg from "../../../public/tg.svg"
import vk from "../../../public/vk.svg"
import Image from "next/image";
const Header = () => {
    const scrollToContacts = () =>{
        const el = document.getElementById("contacts")
        el?.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <div className="w-full h-[15vh] px-[30px] flex items-center justify-between max-sm:px-[10px]">
        <div className="text-[white] text-[20px]">ItGeniy121</div>
        <div className="flex flex-row justify-between items-center w-[400px] max-sm:w-[200px]">
            <div onClick={() => location.href = "https://t.me/nDpSmm"} className="w-[45px] h-[45px] max-sm:w-[25px] max-sm:h-[25px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={tg} className="w-[30px] h-[30px] max-sm:w-[15px] max-sm:h-[15px]" alt="socials"/>
            </div>
            <div onClick={() => location.href = "https://vk.com/ndpsm"} className="w-[45px] h-[45px] max-sm:w-[25px] max-sm:h-[25px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <Image src={vk} className="w-[35px] h-[35px] max-sm:w-[15px] max-sm:h-[15px]" alt="socials"/>
            </div>
            <div onClick={() => location.href = "https://spb.hh.ru/resume/5216b20bff0c0a6e170039ed1f6b3254586d75"} className="w-[45px] h-[45px] max-sm:w-[25px] max-sm:h-[25px] border-[#B4B4B4] border-[2px] rounded-[45px] bg-[#272935] flex justify-center items-center hover:rotate-[360deg] duration-300 cursor-pointer">
                <h1 className="main max-sm:text-[10px]">hh</h1>
            </div>
            <button onClick={scrollToContacts} className="border-[2px] border-[#B4B4B4] w-[150px] h-[40px] hover:bg-[#26273f] duration-300 max-sm:w-[100px] max-sm:h-[30px]"><h1 className="text-[white] max-sm:text-[10px]">Все контакты</h1></button>
        </div>
    </div>
  )
};

export default Header;
