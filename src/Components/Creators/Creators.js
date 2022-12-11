import React from "react";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import RocketLaunch from "../../Icons/RocketLaunch1.svg";
import CreatorCard from "./CreatorCard";
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

const Creators = () => {
  const users = [
    {
      id: "c1",
      user: "Keepitreal",
      profil: { Avatar1 },
    },
    {
      id: "c2",
      user: "DigiLab",
      profil: { Avatar2 },
    },
    {
      id: "c3",
      user: "GravityOne",
      profil: { Avatar3 },
    },
    {
      id: "c4",
      user: "Juanie",
      profil: { Avatar4 },
    },
    {
      id: "c5",
      user: "BlueWhale",
      profil: { Avatar5 },
    },
    {
      id: "c6",
      user: "Mr Fox",
      profil: { Avatar6 },
    },
    {
      id: "c7",
      user: "Shroomie",
      profil: { Avatar7 },
    },
    {
      id: "c8",
      user: "Robotica",
      profil: { Avatar8 },
    },
    {
      id: "c9",
      user: "RustyRobot",
      profil: { Avatar9 },
    },
    {
      id: "c10",
      user: "AnimaKid",
      profil: { Avatar14 },
    },
    {
      id: "c11",
      user: "Dotgu",
      profil: { Avatar15 },
    },
    {
      id: "c12",
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
        {users.map((user, i) => (
          <CreatorCard
            key={user.id}
            profil={[...Object.values(user.profil)]}
            id={i + 1}
            user={user.user}
          />
        ))}
      </div>
    </Container>
  );
};

export default Creators;
