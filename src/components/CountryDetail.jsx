import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const CountryDetail = () => {
  return (
    <>
      {/*to change base on dark mode */}
      <div className="px-7 py-9 sm:w-4/5 mx-auto xl:w-[95%]">
        <button className="flex items-center gap-1  border-2 w-20 px-2 py-1 rounded-lg shadow-sm text-sm sm:w-24 sm:px-4 sm:py-2 lg:w-[170px] lg:py-5 lg:px-8 lg:text-2xl lg:gap-3 xl:w-[190px] xl:px-11 xl:py-3 xl:mt-10">
          <HiArrowLeft className="" />
          <span>Back</span>
        </button>
        <div className="mt-11 xl:flex gap-[10%] xl:mt-20">
          <div className="w-[264px]  sm:w-full xl:w-[45%]">
            <img
              className="w-full h-auto xl:h-full"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              alt="countrylog"
            />
          </div>
          <div className="pt-7 lg:pt-14 xl:pt-0 xl:w-[45%]">
            <h3 className="mb-3 font-bold sm:text-3xl tracking-wider sm:mb-5 lg:text-4xl lg:mb-20 xl:mb-10">
              Germany
            </h3>
            <div className="sm:flex justify-between mb-6 lg:mb-12">
              <div>
                <p className="text-xs sm:text-base mb-5 lg:text-2xl lg:mb-9">Native Name:</p>
                <p className="text-xs mt-2 sm:text-base mb-5 lg:text-2xl lg:mb-9">Population:</p>
                <p className="text-xs mt-2 sm:text-base mb-5 lg:text-2xl lg:mb-9">Region:</p>
                <p className="text-xs mt-2 sm:text-base mb-5 lg:text-2xl lg:mb-9">Sub Region:</p>
                <p className="text-xs mt-2 sm:text-base lg:text-2xl">Capital:</p>
              </div>
              <div className="pt-7 sm:pt-0">
                <p className="text-xs sm:text-base mb-5 lg:text-2xl lg:mb-9">Top Level Domain:</p>
                <p className="text-xs mt-2 sm:text-base mb-5 lg:text-2xl lg:mb-9">Currencies:</p>
                <p className="text-xs mt-2 sm:text-base lg:text-2xl">Language:</p>
              </div>
            </div>
            <div className="pt-7 sm:flex gap-5 xl:gap-3">
              <h3 className="mb-3 sm:mb-0 flex items-center lg:text-2xl xl:text-xl">
                Border Countries:
              </h3>
              <div className="flex gap-1 sm:gap-3">
                <button className="flex items-center justify-center   border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs sm:px-12 sm:py-2 lg:text-lg lg:px-16">
                  France
                </button>
                <button className="flex items-center justify-center gap-1 border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs sm:px-12 sm:py-2 lg:text-lg lg:px-16">
                  Germany
                </button>
                <button className="flex items-center justify-center gap-1  border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px] sm:text-xs sm:px-12 sm:py-2 lg:text-lg lg:px-16">
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
