import React from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";

const dummy = [
  {
    countryName: "Africa",
  },
  {
    countryName: "America",
  },
  {
    countryName: "Asia",
  },
  {
    countryName: "Europe",
  },
  {
    countryName: "Oceania",
  },
];

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <div className="dark:bg-[#202D36] ml-6 sm:flex justify-between sm:w-[90%] sm:mx-auto sm:h-14 sm:mb-10 xl:h-20">
      <div className="bg-white dark:text-white w-[95%] dark:bg-transparent flex relative sm:w-1/2 xl:w-[32%] xl:shadow-lg  xl:overflow-hidden xl:rounded-lg">
        <div className="absolute top-[36%] left-4 lg:top-[48%] xl:top-[38%]">
          <GoSearch className="text-lg text-gray-400 lg:text-2xl dark:text-white" />
        </div>
        <input
          className="w-full h-full p-3 pl-14 bg-white dark:placeholder-gray-500 dark:bg-[#2B3743] rounded-md shadow-sm border-none focus-visible:outline-none lg:py-9 lg:text-xl"
          type={"text"}
          placeholder="Search for a country..."
        />
      </div>

      <div className="w-[60%] relative mt-8 flex rounded-lg sm:w-2/5 sm:mt-0 xl:w-[20%]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-white dark:bg-[#2B3743] w-full px-3 py-2 flex justify-between items-center font-light shadow-md rounded-lg tracking-wide lg:py-9"
        >
          <h5 className="dark:text-white text-sm sm:text-lg lg:text-xl">Filter by Region</h5>
          {isOpen ? (
            <AiOutlineCaretDown className="h-8 dark:text-white" />
          ) : (
            <AiOutlineCaretUp className="h-8  dark:text-white" />
          )}
        </button>
        {isOpen && (
          <div className="absolute w-full left-0 top-[55px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-[#2B3743] dark:text-white   sm:top-16 lg:top-20 xl:top-[5.4rem]">
            {dummy.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#2B3743] flex items-start pl-3 hover:bg-gray-200 dark:hover:bg-black duration-300 ease-in py-2 sm:text-base lg:text-xl lg:py-4"
              >
                {item.countryName}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
