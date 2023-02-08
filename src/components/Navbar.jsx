import React from 'react';
import {MdDarkMode,MdOutlineDarkMode} from "react-icons/md"


const Navbar = props => {
  return (
    <div className='flex space justify-between p-4 shadow-md'>
        <div className='font-extrabold'>Where in the world?</div>
        <div className='flex justify-center align-middle gap-2'><span className='pt-1'><MdDarkMode/></span>DarkMode</div>
    </div>
  )
}



export default Navbar