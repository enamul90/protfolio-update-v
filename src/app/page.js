import HeroComponent from "@/component/HeroComponent.js";
import Profile from "@/component/Profile.js";
import Service from "@/component/Service.js";
import Summary from "@/component/Summary.js";
import ProjectComponent from "@/component/ProjectComponent.js";
import WorkExperience from "@/component/WorkExperience.js";
import Footer from "@/component/Footer.js";
import Nave from "@/component/Nave.js";



export default function Home() {


  return (
     <div className="overflow-hidden ">
         <Nave />
         <HeroComponent />
         <Profile />
         <Service />
         <Summary />
         <ProjectComponent />
         <WorkExperience />
         <Footer />
     </div>
  );
}
