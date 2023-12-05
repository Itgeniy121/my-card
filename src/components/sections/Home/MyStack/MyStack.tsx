import Image from "next/image";
import next from "./imgs/next.svg"
import strapi from './imgs/strapi.webp'
import firebase from "./imgs/firebase.png"
import docker from "./imgs/docker.png"
import other from "./imgs/other.svg"
const MyStack = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full px-[50px]">
        <h1 className="text-[white] font-[600] text-[30px]">Стек технологий, которые я знаю</h1>
        <div className="flex flex-col items-start justify-start mt-[100px]">
            <h1 className="text-[white] font-[500] text-[25px]">Frontend ⚙️ - <span className="text-[19px] font-[300]">это лишь малая часть того стека, который я знаю</span></h1>
            <div className="flex flex-row mt-[30px] relative">
            <Image src={next} alt="stack"/>
            <Image src={strapi} alt="stack" className="w-[50px] h-[50px] absolute right-0"/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[70px]">
            <h1 className="text-[white] font-[500] text-[25px]">Backend 👨‍💻 - <span className="text-[19px] font-[300]">еще и в бэк немного могу</span></h1>
            <div className="flex flex-row mt-[30px]">
            <Image src={strapi} alt="stack" className="w-[48px] h-[48px]"/>
            <Image src={firebase} alt="stack" className="w-[50px] h-[50px] ml-[10px]"/>
            <Image src={docker} alt="stack" className="w-[50px] h-[50px] ml-[10px]"/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[70px]">
            <h1 className="text-[white] font-[500] text-[25px]">Other 🦾</h1>
            <div className="flex flex-row mt-[30px] relative">
            <Image src={other} alt="stack"/>
            </div>
        </div>
    </div>
  )
};

export default MyStack;
