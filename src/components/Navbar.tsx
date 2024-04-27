import React from "react";
import Mode from "./Mode";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<boolean>;
}
const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  return (
    <div className="w-full flex justify-between items-center dark:text-white ">
      <h2 className="font-bold text-2xl text-black dark:text-white">
        devfinder
      </h2>
      <Mode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};
export default Navbar;
