import React from "react";
import { MdDarkMode} from "react-icons/md";
import useColorMode from "../darkMode/useColorMode";

const Navbar = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const toggleTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <div className="dark:bg-[#2B3743] flex space justify-between p-4 shadow-md sm:py-6 lg:py-8 xl:px-16 dark:text-white">
      <div className=" font-extrabold sm:text-xl tracking-wide lg:text-2xl xl:text-[1.7rem]">
        Where in the world?
      </div>
      <button
        onClick={toggleTheme}
        className="flex justify-center align-middle gap-2 sm:text-lg lg:text-xl xl:text-2xl"
      >
        <span className="pt-1 sm:text-xl sm:pt-[0.20rem] lg:pt-[0.4rem] xl:pt-[0.28rem] xl:text-2xl ">
          <MdDarkMode />
        </span>
        DarkMode
      </button>
    </div>
  );
};

export default Navbar;
