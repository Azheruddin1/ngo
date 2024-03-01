"use client";
import React, { useState } from "react";
import Image from "next/image";
import small1 from "../../assets/Images/small.png";
import small2 from "../../assets/Images/small2.jpg";
import CategoryTabs from "./CategoryTabs";
import LastPara from "../components/common/LastPara";
import health1 from "../../assets/Images/healthcare.png";
import health2 from "../../assets/Images/health2.png";
import health3 from "../../assets/Images/health2.png";
import health5 from "../../assets/Images/health5.png";

const links = [
  {
    title: "Small Business Technology",
    path: "/categoires/small-buisness",
  },
  {
    title: "Case Study",
    path: "/categories/case-study",
  },
  {
    title: "Healthcare",
    path: "/categories/healthcare",
  },
  {
    title: "No-code",
    path: "/categories/no-code",
  },
  {
    title: "Automation",
    path: "/categories/automation",
  },
  {
    title: "CDAP",
    path: "/harami",
  },
];

const allCategories = [
  {
    title: "Small Business Technology",
    path: "/categoires/small-buisness",
    cards: [
      {
        title: "Small buisness Technology",
        image: small1,
        description:
          "5 Steps to Simplify Purchase Order Workflow with Airtable",
        month: "November",
        date: "12",
        year: "2022",
        min: "3min",
      },
      {
        title: "Small Business Technology",
        image: small2,
        description:
          "comes here for the successfull life you are frontend engineer",
        month: "Feb",
        date: "28",
        year: "2002",
        min: "123min",
      },
    ],
  },
  {
    title: "Healthcare",
    path: "/categories/healthcare",
    cards: [
      {
        title: "Healthcare",
        image: health1,
        description:
          "5 Steps to Simplify Purchase Order Workflow with Airtable",
        month: "November",
        date: "12",
        year: "2022",
        min: "3min",
      },
      {
        title: "Healthcare",
        image: health2,
        description:
          "comes here for the successfull life you are frontend engineer",
        month: "Feb",
        date: "28",
        year: "2002",
        min: "123min",
      },
    ],
  },
];

const Categories = () => {
  const [clickedButtons, setClickedButtons] = useState({});
  const [selectedCateogires, setSelectedCategories] = useState([]);
  const [togle, setTogle] = useState(false);

  const handleButtonClick = (index, path) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setSelectedCategories(path)
  };

  const selectedCategoriesObj = allCategories.find(
    (ct) => ct.path === selectedCateogires
  );

  return (
    <div>
      <div className="flex flex-col max-w-[1380px] mt-24 w-11/12 mx-auto overflow-hidden">
        <div className="border-b-[1px] flex flex-col gap-y-8 text-center border-zinc-100">
          <div className="flex flex-col mx-auto">
            <h2 className="text-[2.3rem] font-medium">Our Ngo Categories</h2>
          </div>
          <div className="flex flex-row mb-10 mx-auto space-x-12 justify-between">
            {links.map((element, index) => (
              <div key={index} className="">
                <button
                  onClick={() => {
                    handleButtonClick(index, element.path),
                      setTogle((prev) => !prev);
                  }}
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
              </div>
            ))}
          </div>
        </div>

        {/*cards batana hai */}
        <div className="mt-8">
          {selectedCategoriesObj && togle ? (
            <div className="grid lg:grid-cols-3 gap-10">
              {selectedCategoriesObj.cards.map((element, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:text-blue-500 transition-all duration-200"
                >
                  <Image className="rounded-xl" src={element.image} />
                  <div className="mt-8 space-y-4">
                    <p className="text-[12px]">{element.title}</p>
                    <p className="text-xl font-medium">{element.description}</p>
                    <div className="flex flex-row space-x-2 items-center">
                      <p>{element.month}</p>
                      <p>{element.date}</p>
                      <p>{element.year}</p>
                      <p>{element.min}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {allCategories.map((element, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:text-blue-500 transition-all duration-200"
                >
                  <div className="">
                    {element.cards.map((ele, index) => (
                      <div key={index} className="mt-8">
                        <Image src={ele.image} className="rounded-xl mb-8" />
                        <div className="mt-8">
                          <p className="text-[12px]">{ele.title}</p>
                          <p className="text-xl font-medium">
                            {element.description}
                          </p>
                          <div className="flex flex-row space-x-2 items-center">
                            <p>{ele.month}</p>
                            <p>{ele.date}</p>
                            <p>{ele.year}</p>
                            <p>{ele.min}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                
                </div>
              ))}
            </div>
          )}
        </div>

        {/*browse cateogires */}
        <div className="mt-32 text-center  ">
          <h1 className="text-3xl font-medium">Browse by Cateogory</h1>
          <p>Select a category to see more related content</p>

          <div>
            <CategoryTabs />
          </div>
        </div>

        <div className="mx-auto text-center mt-32">
          <LastPara />
        </div>
      </div>
    </div>
  );
};

export default Categories;
