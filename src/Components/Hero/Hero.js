import React from "react";
import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import HeroStates from "./HeroStates";
const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-start md:flex-row md:items-center md:gap-8">
        <div className="">
          <h1 className="text-h3 leading-tight md:text-[48px] lg:text-[80px] text-white capitalize font-work font-regular tracking-tighter md:leading-[1.05] mb-6 font-medium">
            Discover digital art & collect NFTs
          </h1>
          <p className="w-full text-base lg:text-h5 font-work text-white opacity-90 capitalize mb-6">
            NFT Market UI created with anima for figma. collect, but and sell
            art from more than 20k NFT artists.
          </p>
          <Button filled={true} className="opacity-100 hidden md:flex">
            <img
              src="./Icons/RocketLaunch.svg"
              alt="Rocket icon"
              className="w-5 h-5"
            />
            <p className="xl:text-[18px]">Get started</p>
          </Button>

          <HeroStates className="hidden md:flex" />
        </div>

        <Card>
          <img
            src="./Images/Hero-img.png"
            alt="Digital painting of a samurai astronaut looking into sky."
            className="w-full h-3/4 object-cover"
          />
          <div className="py-4 pl-4">
            <h5 className="text-h5 text-white font-work font-semibold mb-1">
              Space Walking
            </h5>
            <div className="flex items-center gap-3">
              <img
                src="./Images/Avatars/Avatar14.png"
                alt="AnimaKid user profil"
                className="w-6"
              />
              <p className="text-[14px] text-white font-work opacity-80">
                AnimaKid
              </p>
            </div>
          </div>
        </Card>
        <Button
          filled={true}
          className="opacity-100 flex w-full mt-12 md:hidden"
        >
          <img
            src="./Icons/RocketLaunch.svg"
            alt="Rocket icon"
            className="w-5 h-5"
          />
          <p className="xl:text-[18px]">Get started</p>
        </Button>

        <HeroStates className="flex w-full md:hidden" />
      </div>
    </Container>
  );
};

export default Hero;
