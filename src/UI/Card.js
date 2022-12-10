import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-bgSec overflow-hidden rounded-[20px] w-full flex flex-col ${
        props?.className ? props.className : ""
      }`}
      key={props?.key ? props.key : ""}
    >
      {props.children}
    </div>
  );
};

export default Card;
