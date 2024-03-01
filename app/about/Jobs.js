import React from 'react'

const jobsList = [
    {
        number:"01",
        jobHeading:"Digital Marketing Specialist (intern)",
        jobType:"Remote",
        desc:"Are you a digital marketing specialist or somone who die to learn how marketing streategy works",
        button:"Learn more"
    },
    {
      number:"02",
      jobHeading:"Digital Marketing Specialist (intern)",
      jobType:"Remote",
      desc:"Are you a digital marketing specialist or somone who die to learn how marketing streategy works",
      button:"Learn more"
  }
]

const Jobs = () => {

    return (
        <div className="flex flex-col ">
          <div>
          {
            jobsList.map((element , index) => (
                <div key={index} className="flex flex-col mx-auto lg:flex-row mt-6 bg-pink-50  transition-all duration-200 items-center justify-between px-5 py-2 gap-x-4 lg:p-7 lg:gap-x-12 rounded-lg">
                     <div className="lg:text-3xl ">
                        {element.number}
                      </div>
                      <div className="flex flex-col lg:gap-2">
                        <p className="font-medium text-center lg:text-xl">{element.jobHeading}</p>
                        <p className="text-center">{element.jobType}</p>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <p className="lg:text-[12px]  lg:w-[98%] pt-3 lg:pt-12">{element.desc}</p>
                        <button className="lg:w-fit md:w-fit bg-black text-white px-4 py-2 mt-3 hover:bg-blue-600 hover:text-white transition-all duration-200  rounded-full">
                            {element.button}
                        </button>
                      </div>
                </div>
            ))
          }
          </div>

          <div className="">
            <button className="py-2 px-5 hover:bg-blue-600 transition-all duration-200 text-white bg-black rounded-full mt-8 flex ">
              see all jobs
            </button>
          </div>
          
        </div>
    )
}

export default Jobs