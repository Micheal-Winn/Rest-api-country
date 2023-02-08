import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const CountryDetail = () => {
  return (
    <>
      {/*to change base on dark mode */}
      <div className="px-7 py-9">
        <button className="flex items-center gap-1 ml border-2 w-20 px-2 py-1 rounded-lg shadow-sm text-sm ">
          <HiArrowLeft className="" />
          <span>Back</span>
        </button>
        <div className="mt-11">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              alt="countrylog"
            />
          </div>
          <div className="pt-7">
            <div>
              <div>
                <h3 className="mb-3 font-bold">Germany</h3>
                <p className="text-xs">Native Name:</p>
                <p className="text-xs mt-2">Population:</p>
                <p className="text-xs mt-2">Region:</p>
                <p className="text-xs mt-2">Sub Region:</p>
                <p className="text-xs mt-2">Capital:</p>
              </div>
              <div className="pt-7">
                <p className="text-xs">Top Level Domain:</p>
                <p className="text-xs mt-2">Currencies:</p>
                <p className="text-xs mt-2">Language:</p>
              </div>
            </div>
            <div className="pt-7">
              <h3 className="mb-3">Border Countries:</h3>
              <div className="flex gap-1">
                <button className="flex items-center justify-center gap-1 ml border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px]">
                  France
                </button>
                <button className="flex items-center justify-center gap-1 ml border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px]">
                  Germany
                </button>
                <button className="flex items-center justify-center gap-1 ml border-2 w-20 px-3 py-1 rounded-md shadow-sm text-[10px]">
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
