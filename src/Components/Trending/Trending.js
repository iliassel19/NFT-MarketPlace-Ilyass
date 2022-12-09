import React from "react";
import Container from "../../UI/Container";
import TrendingCollection from "./TrendingCollection";
import PrimaryAnimalImg from "../../Images/Primary-Animal-img.png";
import SecondaryAnimalImg from "../../Images/Secondary-Animal-img.png";
import TertiaryAnimalImg from "../../Images/Tertiary-Animal-img.png";
import PrimaryMushroomImg from "../../Images/Primary-Mushroom-img.png";
import SecondaryMushroomImg from "../../Images/Secondary-Mushroom-img.png";
import TertiaryMushroomImg from "../../Images/Tertiary-Mushroom-img.png";
import PrimaryRobotImg from "../../Images/Primary-Robot-img.png";
import SecondaryRobotImg from "../../Images/Secondary-Robot-img.png";
import TertiaryRobotImg from "../../Images/Tertiary-Robot-img.png";
const Trending = () => {
  return (
    <Container>
      <h2 className="text-h3 text-white capitalize font-work font-semibold">
        Trending collection
      </h2>
      <p className="text-[18px] capitalize text-white opacity-80">
        Checkout our weekly updated trending collection
      </p>
      <div className="flex items-center gap-4 lg:gap-6 mt-16 justify-center md:justify-between ">
        <TrendingCollection
          primaryImg={PrimaryAnimalImg}
          secondaryImg={SecondaryAnimalImg}
          tertiaryImg={TertiaryAnimalImg}
          alt="animal."
        />
        <TrendingCollection
          primaryImg={PrimaryMushroomImg}
          secondaryImg={SecondaryMushroomImg}
          tertiaryImg={TertiaryMushroomImg}
          alt="mushroom."
          className="hidden md:block"
        />
        <TrendingCollection
          primaryImg={PrimaryRobotImg}
          secondaryImg={SecondaryRobotImg}
          tertiaryImg={TertiaryRobotImg}
          alt="robot."
          className="hidden lg:block"
        />
      </div>
    </Container>
  );
};

export default Trending;
