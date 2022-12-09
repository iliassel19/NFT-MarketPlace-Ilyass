import React from "react";

const NavigationItem = (props) => {
  return (
    <li
      className={`font-work font-semibold text-base text-white opacity-0 -translate-x-5 min-[900px]:translate-x-0 min-[900px]:-translate-y-5 transition-colors ${props.className} hover:text-cta group`}
    >
      <button>{props.children}</button>
    </li>
  );
};

export default NavigationItem;
