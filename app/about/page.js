import React from "react";
import banner from '../../assets/Images/banner.jpg'
import Image from 'next/image'
import TeamCard from "./TeamCard";
import OurCorevalues from './coreValue'
import chotu from '../../assets/Images/chotu.jpg'
import LearnMore from "./LearnMore";
import DesignCard from "./DesignCard";
import LastPara from "../components/common/LastPara";
import Jobs from "./Jobs";
const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col max-w-[1380px] w-11/12 md:flex-col overflow-hidden mx-auto">
      {/*section 1 */}
      <div className="flex  flex-col lg:w-[1110px] lg:pl-72 gap-y-5 mx-auto  mt-16 ">
        <div className="mt-14 ">
          <p className="text-blue-600 font-medium">WHO WE ARE</p>
          <p className=" lg:text-3xl text-[2rem]">
            Our mission is to empower leaders <br /> to build great
            organizations for <br /> their people and communities
          </p>
        </div>

        <div className="flex flex-col mt-10 lg:mt-24">
            <div className="flex flex-col-reverse  lg:flex-row justify-between gap-10 items-center">
               <div className="lg:w-[40%] text-sm">
                  Our core work to help the womens child and helpless pepoles of our community 
                </div>
               <div className="lg:w-[50%]    lg:pl-20 lg:leading-6">
                  Our work is to provide nessessary help to those womens which are helpless and work 
                  for our society welfare. and for devlopment of our communities          
                </div>
            </div>
            <div className="">
                <Image className=" rounded-[2.5rem] mt-10" src={banner} />
            </div>
        </div>

      </div>

      {/*paragraph*/}
      <div className="text-center mx-auto w-[60%] font-semibold mb-36 mt-32 -pl-20">
        SAGEERA BANO MEMORIAL EDUCATIONAL TECHNICAL AND SOCIAL WELFARE SOCIETY 
        BURHANPUR MADHYA PARDESH
      </div>

      {/*section 2 */}
      <div className="flex flex-col px-8  gap-4 ">
        <div className="lg:text-[2.7rem] text-center lg:text-start text-[2rem] font-medium ">
            Our members 
        </div>
        <div className="mt-14">
            <TeamCard />
        </div>
      </div>

      {/*section 3*/}
      <div>
         <OurCorevalues />
      </div>

      {/*section 4*/}
      <div>
        <LearnMore />
      </div>

      {/*carrer*/}
      <div className=" flex flex-col ml-10  lg:ml-[23%] mt-12  lg:mt-36">
         <p className=" text-lg font-medium text-blue-600">Details of Achievements</p>
         <p className="lg:w-[60%] lg:text-[2.4rem] ">
           EDUCATION GROUP WEDDDINGS HEALTH CAMPS COVID RELIEF WORKS        
         </p>
      </div>

      </div>

      <div className="bg-zinc-900  h-[350px] mt-32">
         <div className="text-white flex flex-col items-center justify-center max-w-[1380px] mx-auto">
        
           <p className=" lg:w-[48%] mt-14 px-8 lg:py-5">
             Agriculture, Education and Litercay Enviorment and forests, Health and family welfare , Human rights , micro small and medium enterprises womens 
             devlopment and empowerment skills devlopment , animal husbandry dariying and fisheries , Art and Culture. Children , Dalit Uplifiment , Disaster managment drinking water food processing , Housing , Rural 
             devlopment and poverty allevivation youth affairs         
           </p>
           <div className="flex  flex-col items-center">
              <div className="">
                 <Image src={chotu} width={50} className="rounded-full"/>
              </div>
              <div >
                Sageera WebSite 
              </div>
           </div>
         </div>
      </div>

      <div className="flex flex-col max-w-[1380px] w-11/12 overflow-hidden mx-auto">
          {/*benefits section */}
          <div className="px-8 mt-20">
             <p className="text-3xl text-center lg:text-start font-medium">Benefits</p>
              <div>
                <DesignCard />
              </div>
          </div>

          {/*jobs opening */}
            <div className="text-3xl px-8 font-medium  mt-32">
               Jobs opening
            </div>

            {/*jobs section */}
            <div className="mt-10 px-8">
              <Jobs/> 
            </div>

            <div className="mx-auto text-center mt-20 ">
               <LastPara />
            </div>
         
      </div>
    
    </div>
  );
};

export default About;
