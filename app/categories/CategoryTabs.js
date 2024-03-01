"use client"
import React from "react";
import Link from 'next/link'
import { useState } from "react";

const links = [
    {
        title: "Small Business Technology",
        path: "/categoires/small-buisness"
    },
    {
        title: "Case Study",
        path: "/categories/case-study"
    },
    {
        title: "Healthcare",
        path: "/categories/healthcare"
    },
    {
        title: "No-code",
        path: "/categories/no-code"
    },
    {
        title: "Automation",
        path: "/categories/automation"
    },
    {
        title:"CDAP",
        path:"/harami"
    }
]

const CategoryTabs = () => {
     
    const [clickedButtons, setClickedButtons] = useState({});
    const [selectedCateogires , setSelectedCategories] = useState (null)


    const handleButtonClick = (index , path) => {
        setClickedButtons(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        setSelectedCategories(path)
    };
  
  return (
    <div className="flex max-w-[1380px] w-11/12 flex-row mb-10  mt-16 items-center justify-center space-x-5 mx-auto">
      {links.map((element, index) => (
        <div key={index} className="">
           <Link href={element.path}>
          <button
            onClick={() => handleButtonClick(index, element.path)}
            className={`border-zinc-200 hover:border-zinc-500 border-[1px] px-8 py-2 rounded-full 
                                        ${
                                          clickedButtons[index]
                                            ? "bg-black text-white"
                                            : ""
                                        }
                                        `}
          >
            {element.title}
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
