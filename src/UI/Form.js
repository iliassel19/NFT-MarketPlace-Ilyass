import React from "react";
import Button from "./Button";
const Form = () => {
  return (
    <form action="#" className="w-full min-[900px]:ow-fit">
      <div className="w-auto flex flex-col gap-4 min-[900px]:flex-row min-[900px]:bg-white rounded-[20px]">
        <input
          placeholder="Enter your email here"
          className="outline-none border-none bg-white  rounded-full py-4 min-[900px]:rounded-none min-[900px]:bg-[transparent] w-full pl-6 min-[900px]:pl-4 placeholder:text-bgSec font-work placeholder:font-medium text-bg font-semibold"
        />
        <Button
          filled={true}
          className="rounded-full md:rounded-[20px] opacity-100 h-[48px] md:h-[60px]"
        >
          <img
            src="./Icons/EnvelopeSimple.svg"
            alt="Email icon"
            className="w-5 h-5"
          />
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default Form;
