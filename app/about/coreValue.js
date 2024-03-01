import React from 'react'

const items = [
    {
     heading:"Quality",
     desc : "Delivering work that's top-notch should drive everything we do"
    },
    {
        heading:"Collaborative",
        desc : "We work alongside our clients' teams and within our team to deliver maximum impact. We value and respect the diversity of experiences that each of us bring.ng we do"
    },
    {
        heading:"Always Learning",
        desc : "We are always learning - whether that's on a client project or picking up a new hobby or two"
    },
]

const CoreValues = () => {

    return (
      <div className="flex lg:flex-row px-8 mt-32 mb-32 gap-32 ">
         <div className="lg:w-[40%] lg:text-[2.5rem] lg:font-medium">
           Our core values
         </div>
         <div className="flex flex-col lg:w-[60%] gap-y-10">
            {
               items.map((element, index) => (
                 <div key={index} className="flex flex-col gap-y-2">
                    <p className="text-xl font-medium">{element.heading}</p>
                    <p>{element.desc}</p>
                 </div>
               ))
            }
         </div>
      </div>
    )
}

export default CoreValues