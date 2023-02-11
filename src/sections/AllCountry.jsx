/* eslint-disable no-unused-vars */
import React from "react";
import { DummyData } from "../data/DummyData";
import Country from "../components/Country";
import Searchbar from "../components/Searchbar";

const AllCountry = ()=> (
    <div className="dark:bg-[#202D36] pt-6 sm:pt-10">
        <Searchbar/>
        <div className="dark:bg-[#202D36] lg:grid lg:grid-cols-2 xl:grid-cols-4">
        {DummyData.map((country,i)=>(
            <Country dummyData={country} key={i}/>
        ))}
    </div>
    </div>
);

export default AllCountry;