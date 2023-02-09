import React from "react";

const Country = () => {
  return (
    <div className="mt-7 flex flex-col w-4/5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
          alt="countryImage"
        />
      </div>
      <div className="pl-3 py-4 sm:pl-6 sm:pt-5">
        <h3 className="mb-2 font-bold sm:text-2xl sm:mb-4">Germany</h3>
        <p className="text-sm mb-1 sm:text-lg sm:mb-3">Population:</p>
        <p className="text-sm mb-1 sm:text-lg sm:mb-3">Region:</p>
        <p className="text-sm sm:text-lg sm:mb-3">Capital:</p>
      </div>
    </div>
  );
};

export default Country;
