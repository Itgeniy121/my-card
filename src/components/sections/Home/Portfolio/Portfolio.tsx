import Card1 from "@/components/cards/Card1";
import crm from "../../../../../public/crm.png"
import knk from "../../../../../public/knk.png"
import bobl from "../../../../../public/bobl.png"

import { FC } from "react";
interface portfolioProps{
  cards: any
}
const Portfolio: FC<portfolioProps> = ({cards}) => {
    return (
    <div id="portfolio" className="flex flex-col justify-start items-start w-full mt-[200px] max-lg:mt-[150px]">
        <h1 className="text-[white] font-[600] text-[30px] ml-[50px] max-sm:ml-[20px] max-xsml:text-[20px]">Это одни из моих проектов</h1>
        <div className="flex flex-row justify-between w-full items-center mt-[70px] max-lg:flex-col">
           <Card1 img={crm} title={cards[0].attributes.Title} description={cards[0].attributes.description} href={cards[0].attributes.link}/> 
           <Card1 img={knk} title={cards[2].attributes.Title} description={cards[2].attributes.description} href={cards[2].attributes.link}/> 
           <Card1 img={bobl} title={cards[1].attributes.Title} description={cards[1].attributes.description} href={cards[1].attributes.link}/> 
        </div>
    </div>
  )
};

export default Portfolio;
