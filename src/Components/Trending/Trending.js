import React from "react";
import Container from "../../UI/Container";
import TrendingCollection from "./TrendingCollection";
const Trending = () => {
  return (
    <Container>
      <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold">
        Trending collection
      </h2>
      <p className="text-base lg:text-[18px] capitalize text-white opacity-80">
        Checkout our weekly updated trending collection
      </p>
      <div className="flex items-center gap-4 lg:gap-6 lg:mt-16 mt-12 justify-center md:gap-8">
        <TrendingCollection
          primaryImg="./Images/Primary-Animal-img.png"
          secondaryImg="./Images/Secondary-Animal-img.png"
          tertiaryImg="./Images/Tertiary-Animal-img.png"
          alt="animal."
        />
        <TrendingCollection
          primaryImg="./Images/Primary-Mushroom-img.png"
          secondaryImg="./Images/Secondary-Mushroom-img.png"
          tertiaryImg="./Images/Tertiary-Mushroom-img.png"
          alt="mushroom."
          className="hidden md:block"
        />
        <TrendingCollection
          primaryImg="./Images/Primary-Robot-img.png"
          secondaryImg="./Images/Secondary-Robot-img.png"
          tertiaryImg="./Images/Tertiary-Robot-img.png"
          alt="robot."
          className="hidden lg:block"
        />
      </div>
    </Container>
  );
};

export default Trending;
