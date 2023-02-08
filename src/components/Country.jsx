import React from "react";

const Country = () => {
  return (
    <div className="mt-7 flex flex-col w-4/5 mx-auto">
      <div className="overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
          alt="countryImage"
        />
      </div>
      <div className="pl-3 pt-4">
        <h3 className="mb-2 font-bold">Germany</h3>
        <p className="text-sm mb-1">Population:</p>
        <p className="text-sm mb-1">Region:</p>
        <p className="text-sm">Capital:</p>
      </div>
    </div>
  );
};

export default Country;
