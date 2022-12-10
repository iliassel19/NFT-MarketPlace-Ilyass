import React from "react";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import RocketLaunch from "../../Icons/RocketLaunch1.svg";
import Avatar1 from "../../Images/Avatars/Avatar1.png";
import Avatar2 from "../../Images/Avatars/Avatar2.png";
import Avatar3 from "../../Images/Avatars/Avatar3.png";
import Avatar4 from "../../Images/Avatars/Avatar4.png";
import Avatar5 from "../../Images/Avatars/Avatar5.png";
import Avatar6 from "../../Images/Avatars/Avatar6.png";
import Avatar7 from "../../Images/Avatars/Avatar7.png";
import Avatar8 from "../../Images/Avatars/Avatar8.png";
import Avatar9 from "../../Images/Avatars/Avatar9.png";
import Avatar14 from "../../Images/Avatars/Avatar14.png";
import Avatar15 from "../../Images/Avatars/Avatar15.png";
import Avatar17 from "../../Images/Avatars/Avatar17.png";
import CreatorCard from "./CreatorCard";

const Creators = () => {
  const users = [
    {
      id: 1,
      user: "Keepitreal",
      profil: { Avatar1 },
    },
    {
      id: 2,
      user: "DigiLab",
      profil: { Avatar2 },
    },
    {
      id: 3,
      user: "GravityOne",
      profil: { Avatar3 },
    },
    {
      id: 4,
      user: "Juanie",
      profil: { Avatar4 },
    },
    {
      id: 5,
      user: "BlueWhale",
      profil: { Avatar5 },
    },
    {
      id: 6,
      user: "Mr Fox",
      profil: { Avatar6 },
    },
    {
      id: 7,
      user: "Shroomie",
      profil: { Avatar7 },
    },
    {
      id: 8,
      user: "Robotica",
      profil: { Avatar8 },
    },
    {
      id: 9,
      user: "RustyRobot",
      profil: { Avatar9 },
    },
    {
      id: 10,
      user: "AnimaKid",
      profil: { Avatar14 },
    },
    {
      id: 11,
      user: "Dotgu",
      profil: { Avatar15 },
    },
    {
      id: 12,
      user: "Ghiblier",
      profil: { Avatar17 },
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 xl:grid-cols-4 md:gap-6">
        <div className="lg:col-span-2 xl:col-span-3">
          <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold">
            Top creators
          </h2>
          <p className="text-base lg:text-[18px] capitalize text-white opacity-80">
            Checkout Top rated creators on the NFT marketplace
          </p>
        </div>
        <Button filled={false} className="order-6 sm:order-[unset]">
          <img
            src={RocketLaunch}
            alt="Rocket launch icon."
            className="w-5 h-5"
          />
          <p>View rankings</p>
        </Button>
        {users.map((user) => (
          <CreatorCard
            key={user.id}
            profil={[...Object.values(user.profil)]}
            id={user.id}
            user={user.user}
          />
        ))}
      </div>
    </Container>
  );
};

export default Creators;
