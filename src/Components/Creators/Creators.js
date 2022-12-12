import React from "react";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import CreatorCard from "./CreatorCard";

const Creators = () => {
  const users = [
    {
      id: "c1",
      user: "Keepitreal",
      profil: "./Images/Avatars/Avatar1.png",
    },
    {
      id: "c2",
      user: "DigiLab",
      profil: "./Images/Avatars/Avatar2.png",
    },
    {
      id: "c3",
      user: "GravityOne",
      profil: "./Images/Avatars/Avatar3.png",
    },
    {
      id: "c4",
      user: "Juanie",
      profil: "./Images/Avatars/Avatar4.png",
    },
    {
      id: "c5",
      user: "BlueWhale",
      profil: "./Images/Avatars/Avatar5.png",
    },
    {
      id: "c6",
      user: "Mr Fox",
      profil: "./Images/Avatars/Avatar6.png",
    },
    {
      id: "c7",
      user: "Shroomie",
      profil: "./Images/Avatars/Avatar7.png",
    },
    {
      id: "c8",
      user: "Robotica",
      profil: "./Images/Avatars/Avatar8.png",
    },
    {
      id: "c9",
      user: "RustyRobot",
      profil: "./Images/Avatars/Avatar9.png",
    },
    {
      id: "c10",
      user: "AnimaKid",
      profil: "./Images/Avatars/Avatar14.png",
    },
    {
      id: "c11",
      user: "Dotgu",
      profil: "./Images/Avatars/Avatar15.png",
    },
    {
      id: "c12",
      user: "Ghiblier",
      profil: "./Images/Avatars/Avatar17.png",
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
            src="./Icons/RocketLaunch1.svg"
            alt="Rocket launch icon."
            className="w-5 h-5"
          />
          <p>View rankings</p>
        </Button>
        {users.map((user, i) => (
          <CreatorCard
            key={user.id}
            profil={user.profil}
            id={i + 1}
            user={user.user}
          />
        ))}
      </div>
    </Container>
  );
};

export default Creators;
