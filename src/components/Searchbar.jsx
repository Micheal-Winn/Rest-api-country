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
    <div className="mt-6 ml-6 sm:flex justify-between sm:w-[90%] sm:mx-auto sm:h-14 sm:mb-10 mt-11">
      <div className="bg-white w-[95%] flex relative sm:w-1/2">
        <div className="absolute top-[36%] left-4">
          <GoSearch className="text-lg text-gray-400" />
        </div>
        <input
          className="w-full h-full p-3 pl-14 bg-white rounded-md shadow-sm border-none focus-visible:outline-none "
          type={"text"}
          placeholder="Search for a country..."
        />
      </div>

      <div className="w-[60%] relative mt-8 flex rounded-lg sm:w-2/5 sm:mt-0">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-white w-full px-3 py-2 flex justify-between items-center font-light shadow-md rounded-lg tracking-wide"
        >
          <h5 className="text-sm sm:text-lg">Filter by Region</h5>
          {isOpen ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="absolute w-full left-0 top-[55px] rounded-lg overflow-hidden shadow-lg bg-white sm:top-16">
            {dummy.map((item, i) => (
              <div
                key={i}
                className="bg-white mt-4 flex items-start pl-3 hover:bg-gray-200 duration-300 ease-in py-2 sm:text-base"
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
