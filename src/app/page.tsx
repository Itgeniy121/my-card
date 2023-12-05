import Welocme from "@/components/sections/Home/Welocme/Welocme";
import MyStack from "@/components/sections/Home/MyStack/MyStack";
import Portfolio from "@/components/sections/Home/Portfolio/Portfolio";
import Contacts from "@/components/sections/Home/Contacts/Contacts";
import {getWelcomeContent, getCardsContent} from "@/utils/GetStrapiContent";
const Home = async () => {
  const welcomeContent = await getWelcomeContent()
  const[cards] = await Promise.all([await getCardsContent()])
  return (
    <div className="w-full pt-[30px]">
      <Welocme title={welcomeContent.data[0].attributes.Bittitle} description={welcomeContent.data[0].attributes.Description[0].children[0].text}/>
      <MyStack/>
      <Portfolio cards={cards.data}/>
      <Contacts/>
    </div>
  )
};

export default Home;
