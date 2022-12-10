import React from "react";

const Container = (props) => {
  return (
    <div className="px-6 py-12 md:py-16 max-w-[1280px] mx-auto sm:px-9 xl:px-32 lg:py-20">
      {props.children}
    </div>
  );
};

export default Container;
