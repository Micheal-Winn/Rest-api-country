import React from 'react';
import {MdDarkMode,MdOutlineDarkMode} from "react-icons/md"


const Navbar = props => {
  return (
    <div className='flex space justify-between p-4 shadow-md sm:py-6 lg:py-8 xl:px-16'>
        <div className='font-extrabold sm:text-xl tracking-wide lg:text-2xl xl:text-[1.7rem]'>Where in the world?</div>
        <div className='flex justify-center align-middle gap-2 sm:text-lg lg:text-xl xl:text-2xl'><span className='pt-1 sm:text-xl sm:pt-[0.20rem] lg:pt-[0.4rem] xl:pt-[0.28rem] xl:text-2xl'><MdDarkMode/></span>DarkMode</div>
    </div>
  )
}



export default Navbar;