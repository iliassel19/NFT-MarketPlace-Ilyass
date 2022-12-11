import React from "react";
import NavigationItem from "./NavigationItem";
import Button from "../../UI/Button";
// import User from "../../Icons/User.svg";
const NavigationList = (props) => {
  return (
    <nav
      className={`z-20 absolute left-0 w-full h-[340px] bg-bgSec min-[900px]:bg-bg min-[900px]:h-auto min-[900px]:relative min-[900px]:w-auto transition-all duration-500 ${
        !props.menuState ? "top-[-100%]" : "top-0"
      }`}
    >
      <ul className="flex flex-col items-start justify-center gap-6 absolute bottom-12 left-8 min-[900px]:flex-row min-[900px]:items-center min-[900px]:relative min-[900px]:gap-8 min-[900px]:h-full min-[900px]:bottom-0 min-[900px]:left-0">
        <NavigationItem
          className={`animate-[fromTop_0.3s_0.3s_ease-in_forwards] ${
            props.menuState &&
            "animate-[fromLeft_0.4s_0.3s_ease-in-out_forwards]"
          }`}
        >
          Marketplace
        </NavigationItem>
        <NavigationItem
          className={`animate-[fromTop_0.3s_0.5s_ease-in_forwards] ${
            props.menuState &&
            "animate-[fromLeft_0.4s_0.5s_ease-in-out_forwards] min-[900px]:animate-none"
          }`}
        >
          Ranking
        </NavigationItem>
        <NavigationItem
          className={`min-[900px]:animate-[fromTop_0.3s_0.7s_ease-in_forwards] ${
            props.menuState &&
            "animate-[fromLeft_0.4s_0.7s_ease-in-out_forwards] min-[900px]:animate-none"
          }`}
        >
          Connect a wallet
        </NavigationItem>
        <Button
          filled={true}
          className={`${
            props.menuState &&
            "animate-[show_0.2s_1s_ease-out_forwards] min-[900px]:animate-none"
          } min-[900px]:animate-[fromTop_0.3s_0.9s_ease-in_forwards]`}
        >
          <img src="./Icons/User.svg" alt="User icon" className="w-6 h-6" />
          <p>Sign up</p>
        </Button>
      </ul>
    </nav>
  );
};

export default NavigationList;
