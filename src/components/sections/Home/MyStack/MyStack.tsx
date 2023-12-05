import Image from "next/image";
import next from "./imgs/next.svg"
import strapi from './imgs/strapi.webp'
import firebase from "./imgs/firebase.png"
import docker from "./imgs/docker.png"
import other from "./imgs/other.svg"
const MyStack = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full px-[50px] max-sm:px-[20px] max-lg:mt-[40px]">
        <h1 className="text-[white] font-[600] text-[30px] max-sml:text-[20px]">Стек технологий, которые я знаю</h1>
        <div className="flex flex-col items-start justify-start mt-[100px] max-lg:mt-[60px]">
            <h1 className="text-[white] font-[500] text-[25px] max-sm:text-[17px]">Frontend ⚙️ - <span className="text-[19px] max-sm:text-[14px] font-[300]">это лишь малая часть того стека, который я знаю</span></h1>
            <div className="flex flex-row mt-[30px] relative">
            <Image src={next} alt="stack"/>
            <Image src={strapi} alt="stack" className="w-[8%] absolute right-0"/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[70px] max-lg:mt-[40px]">
            <h1 className="text-[white] font-[500] text-[25px] max-sm:text-[17px]">Backend 👨‍💻 - <span className="text-[19px] font-[300] max-sm:text-[14px]">еще и в бэк немного могу</span></h1>
            <div className="flex flex-row mt-[30px]">
            <Image src={strapi} alt="stack" className="w-[50px] h-[50px] max-sm:w-[8%] max-sm:h-[0%]"/>
            <Image src={firebase} alt="stack" className="w-[50px] h-[50px] ml-[10px] max-sm:w-[8%] max-sm:h-[0%]"/>
            <Image src={docker} alt="stack" className="w-[50px] h-[50px] ml-[10px] max-sm:w-[8%] max-sm:h-[0%]"/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[70px] max-lg:mt-[40px]">
            <h1 className="text-[white] font-[500] text-[25px] max-sm:text-[17px]">Other 🦾</h1>
            <div className="flex flex-row mt-[30px] relative">
            <Image src={other} alt="stack"/>
            </div>
        </div>
    </div>
  )
};

export default MyStack;
