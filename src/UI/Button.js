import React from "react";

const Button = (props) => {
  return (
    <button
      className={`opacity-0 text-white flex items-center justify-center gap-2 px-8 rounded-[20px] h-[60px] font-work text-base font-semibold transition-all capitalize ${
        props?.className && props.className
      } ${
        props.filled
          ? "bg-cta hover:bg-cta-h"
          : "border-[2px] border-cta opacity-100 hover:bg-bgSec"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
