import React from "react";

const HeroStates = (props) => {
  return (
    <div className={`${props.className} items-center justify-between mt-8`}>
      <div className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Total Sale</p>
      </div>
      <div className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">100k+</h5>
        <p className="text-white text-[20px] font-work">Auctions</p>
      </div>
      <div className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Artists</p>
      </div>
    </div>
  );
};

export default HeroStates;
