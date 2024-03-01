import React from 'react'
import Image from 'next/image'
import pedh from '../../assets/Images/pedh.jpg'
import ladka_ladki from '../../assets/Images/ladka_ladki.jpg'
import message from '../../assets/Images/msg.svg'

const cardsData = [
    {
        image:ladka_ladki,
        desc:""
    },
    {
        image:message,
        desc:"Work remotely from anywhere with regular in-person meetings and social activities."
    },
    {
        image:message,
        desc:"Work remotely from anywhere with regular in-person meetings and social activities."
    },
    {
        image:message,
        desc:"Work remotely from anywhere with regular in-person meetings and social activities."
    },
    {
        image:message,
        desc:"Work remotely from anywhere with regular in-person meetings and social activities."
    },
   
    {
            image:pedh,
            desc:""  
     },
    
]

const DesignCard = () => {
    
    return (
        <div className="">
          <div className="grid lg:grid-cols-3 gap-5 mt-10">
            {
                cardsData.map((element , index) => (
                    <div key={index} className=" hover:bg-stone-100 cursor-pointer hover:rounded-xl">
                       {
                        index === 0 || index === element.length - 1 ? (
                           
                             <div>
                             <Image src={element.image} className="border-none rounded-xl" />
                             </div>
                          
                        ) : (
                            <div className="border-[1px] h-full p-6 rounded-xl gap-y-10 justify-between flex flex-col">
                               <div className="mx-auto">
                                  <Image src={element.image}/>
                                </div>
                                <div className=" text-zinc-500">
                                  {element.desc}
                                </div>
                            </div>
                        )
                       }
                    </div>
                ))
            }
          </div>
        </div>
    )
}

export default DesignCard