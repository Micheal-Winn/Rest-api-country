/* eslint-disable no-unused-vars */
import React from "react";
import { DummyData } from "../data/DummyData";
import Country from "../components/Country";

const AllCountry = ()=> (
    <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
        {DummyData.map((country,i)=>(
            <Country dummyData={country} key={i}/>
        ))}
    </div>
);

export default AllCountry;