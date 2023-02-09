import React from "react";


const Country = ({dummyData}) => {
  return (
    <div className="mt-7 flex flex-col w-4/5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-hidden lg:h-[220px]">
        <img
          className="w-full lg:h-full"
          src={dummyData.image}
          alt="countryImage"
        />
      </div>
      <div className="pl-3 py-4 sm:pt-5 sm:pl-16 xl:pl-8">
        <h3 className="mb-2 font-bold sm:text-2xl sm:mb-4">{dummyData.country}</h3>
        <p className="text-sm mb-1 sm:text-lg sm:mb-3">Population: <span className="text-gray-500">{Intl.NumberFormat('en-US').format(dummyData.population)}</span></p>
        <p className="text-sm mb-1 sm:text-lg sm:mb-3">Region: <span className="text-gray-500">{dummyData.region}</span></p>
      <p className="text-sm sm:text-lg sm:mb-3">Capital: <span className="text-gray-500">{dummyData.capital}</span></p>
      </div>
    </div>
  );
};

export default Country;
