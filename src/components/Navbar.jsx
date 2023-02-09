import React from 'react';
import {MdDarkMode,MdOutlineDarkMode} from "react-icons/md"


const Navbar = props => {
  return (
    <div className='flex space justify-between p-4 shadow-md sm:py-6'>
        <div className='font-extrabold sm:text-xl tracking-wide'>Where in the world?</div>
        <div className='flex justify-center align-middle gap-2 sm:text-lg'><span className='pt-1 sm:text-xl pt-[0.20rem]'><MdDarkMode/></span>DarkMode</div>
    </div>
  )
}



export default Navbar