import { React, useState } from "react";
import Logo from "../../Icons/Logo.svg";
import NavigationList from "./NavigationList";

const Navigation = () => {
  const [openNav, isOpenNav] = useState(false);
  const mobileMenuHandler = () => {
    isOpenNav((prevState) => !prevState);
  };
  return (
    <div className="py-8 px-6 max-w-[1340px] mx-auto xl:px-20 2xl:px-24 flex items-center justify-between">
      <button className="opacity-0 animate-show transition-transform hover:scale-110">
        <img src={Logo} alt="Logo" />
      </button>
      <NavigationList menuState={openNav} />
      <button
        className="z-40 w-9 h-9 relative overflow-hidden min-[900px]:hidden"
        onClick={mobileMenuHandler}
      >
        <span
          className={`block  h-[2px] bg-white absolute left-0 transition-all duration-200 delay-100 ${
            openNav ? "w-full top-1/2 rotate-[135deg]" : "top-2 w-3/4 rotate-0"
          }`}
        ></span>
        <span
          className={`block w-full h-[2px] bg-white origin-left absolute top-1/2 transition-all duration-200 ${
            openNav ? "left-[100%] opacity-0" : "left-0 opacity-100"
          }`}
        ></span>
        <span
          className={`block  h-[2px] bg-white absolute left-0 transition-all duration-200 delay-100 ${
            openNav ? "w-full top-1/2 rotate-[-135deg]" : "top-7 w-3/4 rotate-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Navigation;
