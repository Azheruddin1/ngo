import React from 'react'
import ladki1 from '../../assets/Images/ladki1.png'
import ladki2 from '../../assets/Images/ladki2.png'
import ladki3 from '../../assets/Images/ladki3.png'
import ladki4 from '../../assets/Images/ladki4.jpg'
import ladki6 from '../../assets/Images/ladki6.jpeg'
import ladki8 from '../../assets/Images/ladki8.jpg'

import Image from 'next/image'

const cardsData = [
    {
        image:ladki1,
        heading:"Chairman of Ngo",
        name:"Dr Firoz  Baig",
    },
    {
        image:ladki2,
        heading:"Treasurer of Ngo",
        name:"ASLAM BAIG",
    },
    {
        image:ladki3,
        heading:"Founder, Principal Consultant",
        name:"Lorraine Wong",
    },
    {
        image:ladki4,
        heading:"Founder, Principal Consultant",
        name:"Lorraine Wong",
    },
  
  
    {
        image:ladki8,
        heading:"Genral Secreatary",
        name:"HEENA BANO ",
    },
]

const TeamCard = () => {

    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-10  place-items-center  ">
           {
                cardsData.map((element , index) => (
                    <div key={index} className="flex flex-col gap-y-6">
                       <Image src={element.image} className="rounded-xl object-cover md:min-w-[60px] md:min-h-[40px] lg:min-h-[150px] lg:min-w-[300px] lg:max-w-[100%] lg:max-h-[300px]" />
                       <div className="space-y-5">
                          <p className="text-blue-600 font-medium text-[14px] tracking-wide">{element.heading}</p>
                          <p>{element.name}</p>
                       </div>
                    </div>
                ))
           }
        </div>
    )
}
export default TeamCard