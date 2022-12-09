import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-bgSec overflow-hidden rounded-[20px] w-full flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default Card;
