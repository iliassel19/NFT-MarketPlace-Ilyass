import React from "react";
import Container from "../../UI/Container";
import Form from "../../UI/Form";

const FormContainer = () => {
  return (
    <Container>
      <div className="w-full h-full bg-bgSec p-8 md:py-8 md:px-12 lg:py-12 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 rounded-[20px]">
        <div className="md:self-stretch flex-[0.5]">
          <img
            src="./Images/Subscribe-img.png"
            alt="Astronaut reading newspaper NFT"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full flex-[0.5]">
          <h2 className="text-h5 md:text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-2 leading-tight">
            Join our weekly digest
          </h2>
          <p className="text-base lg:text-[18px] capitalize text-white opacity-80 mb-8 leading-normal">
            Get exclusive promotions & updates straight to your Inbox.
          </p>
          <Form />
        </div>
      </div>
    </Container>
  );
};

export default FormContainer;
