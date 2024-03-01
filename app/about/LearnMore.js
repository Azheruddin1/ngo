import Image from 'next/image'
import React from 'react'

import dono from '../../assets/Images/dono_bhen.jpg'
const LearnMore = () => {
    return (
        <div className="flex flex-col gap-32 items-center  lg:flex-row px-8 mt-20 ">
           <div className="flex flex-col lg:w-[48%] mt-10   justify-between gap-y-8">
              <h2 className="font-semibold text-[2.4rem]">
              We are proudly certified SHEmakes by the SHE Mark.
              </h2>
              <p className="w-full">
              The SHE Marks are the most inclusive and consumer-friendly business certifications verifying gender equality at companies that are run, creatively-driven, or owned by women.
              </p>
              <button className="w-fit bg-zinc-950 px-6 hover:bg-blue-800 transition-all duration-200 text-white py-2 rounded-full">
                Learn more 
              </button>
           </div>
           <div>
            <Image src={dono}  className="rounded-2xl object-cover"/>
           </div>
        </div>
    )
}

export default LearnMore