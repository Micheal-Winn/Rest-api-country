import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const CountryDetail = () => {
  return (
    <>
      {/*to change base on dark mode */}
      <div className="px-7 py-9 sm:w-4/5 mx-auto">
        <button className="flex items-center gap-1 ml border-2 w-20 px-2 py-1 rounded-lg shadow-sm text-sm sm:w-24 px-4 py-2">
          <HiArrowLeft className="" />
          <span>Back</span>
        </button>
        <div className="mt-11 ">
          <div className="w-[264px]  sm:w-full">
            <img
              className="w-full h-auto"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              alt="countrylog"
            />
          </div>
          <div className="pt-7">
            <h3 className="mb-3 font-bold sm:text-3xl tracking-wider mb-5">
              Germany
            </h3>
            <div className="sm:flex justify-between mb-6">
              <div>
                <p className="text-xs sm:text-base mb-5">Native Name:</p>
                <p className="text-xs mt-2 sm:text-base mb-5">Population:</p>
                <p className="text-xs mt-2 sm:text-base mb-5">Region:</p>
                <p className="text-xs mt-2 sm:text-base mb-5">Sub Region:</p>
                <p className="text-xs mt-2 sm:text-base">Capital:</p>
              </div>
              <div className="pt-7 sm:pt-0">
                <p className="text-xs sm:text-base mb-5">Top Level Domain:</p>
                <p className="text-xs mt-2 sm:text-base mb-5">Currencies:</p>
                <p className="text-xs mt-2 sm:text-base">Language:</p>
              </div>
            </div>
            <div className="pt-7 sm:flex gap-5">
              <h3 className="mb-3 sm:mb-0 flex items-center">
                Border Countries:
              </h3>
              <div className="flex gap-1 sm:gap-3">
                <button className="flex items-center justify-center   border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs px-12 py-2">
                  France
                </button>
                <button className="flex items-center justify-center gap-1 border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs px-12 py-2">
                  Germany
                </button>
                <button className="flex items-center justify-center gap-1  border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs px-12 py-2">
                  Netherlands
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
