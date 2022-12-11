import React from "react";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import NFTCard from "./NFTCard";
import Eye from "../../Icons/Eye.svg";
import Avatar10 from "../../Images/Avatars/Avatar10.png";
import Avatar15 from "../../Images/Avatars/Avatar15.png";
import Avatar16 from "../../Images/Avatars/Avatar16.png";
import AstrofictionImg from "../../Images/Astrofiction-img.png";
import DistantGalaxyImg from "../../Images/DistantGalaxy-img.png";
import LifeEdenaImg from "../../Images/LifeEdena-img.png";

const NFTData = [
  {
    title: "Distant Galaxy",
    img: { DistantGalaxyImg },
    profil: { Avatar16 },
    name: "MoonDancer",
    className: "",
  },
  {
    title: "Life On Edena",
    img: { LifeEdenaImg },
    profil: { Avatar10 },
    name: "NebulaKid",
    className: "",
  },
  {
    title: "AstroFiction",
    img: { AstrofictionImg },
    profil: { Avatar15 },
    name: "Spaceone",
    className: "sm:hidden min-[900px]:flex",
  },
];
const NFTs = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 min-[900px]:grid-cols-3 gap-8">
        <div className="min-[900px]:col-span-2">
          <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-2">
            Discover more NFTs
          </h2>
          <p className="text-base lg:text-[18px] capitalize text-white opacity-80">
            Explore new trending NFTs
          </p>
        </div>
        <Button
          filled={false}
          className="order-10 sm:order-[unset] md:w-[220px] sm:justify-self-end"
        >
          <img src={Eye} alt="Eye icon" className="w-6 h-6" />
          <p>See all</p>
        </Button>
        {NFTData.map((NFT, i) => (
          <NFTCard
            key={`${i + 2} nft`}
            title={NFT.title}
            img={[...Object.values(NFT.img)]}
            profil={[...Object.values(NFT.profil)]}
            name={NFT.name}
            className={NFT.className}
          />
        ))}
      </div>
    </Container>
  );
};

export default NFTs;
