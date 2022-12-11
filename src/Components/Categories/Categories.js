import React from "react";
import Container from "../../UI/Container";
import CategoryCard from "./CategoryCard";
// import ArtImg from "../../Images/Art-img.png";
// import CollectiblesImg from "../../Images/Collectibles-img.png";
// import MusicImg from "../../Images/Music-img.png";
// import PhotographyImg from "../../Images/Photography-img.png";
// import VideoImg from "../../Images/Video-img.png";
// import UtilityImg from "../../Images/Utility-img.png";
// import SportImg from "../../Images/Sport-img.png";
// import VirtualWorldsImg from "../../Images/VirtualWorlds-img.png";
// import Camera from "../../Icons/Camera.svg";
// import Basketball from "../../Icons/Basketball.svg";
// import MusicNotes from "../../Icons/MusicNotes.svg";
// import VideoCamera from "../../Icons/VideoCamera.svg";
// import Planet from "../../Icons/Planet.svg";
// import PaintBrush from "../../Icons/PaintBrush.svg";
// import MagicWand from "../../Icons/MagicWand.svg";
// import Swatches from "../../Icons/Swatches.svg";
const Categories = () => {
  const categories = [
    {
      id: 1,
      category: "art",
      icon: "./Icons/PaintBrush.svg",
      img: "./Images/Art-img.png",
    },
    {
      id: 2,
      category: "collectibles",
      icon: "./Icons/Swatches.svg",
      img: "./Images/Collectibles-img.png",
    },
    {
      id: 3,
      category: "music",
      icon: "./Icons/MusicNotes.svg",
      img: "./Images/Music-img.png",
    },
    {
      id: 4,
      category: "photography",
      icon: "./Icons/Camera.svg",
      img: "./Images/Photography-img.png",
    },
    {
      id: 5,
      category: "video",
      icon: "./Icons/VideoCamera.svg",
      img: "./Images/Video-img.png",
    },
    {
      id: 6,
      category: "utility",
      icon: "./Icons/MagicWand.svg",
      img: "./Images/Utility-img.png",
    },
    {
      id: 7,
      category: "sport",
      icon: "./Icons/Basketball.svg",
      img: "./Images/Sport-img.png",
    },
    {
      id: 8,
      category: "virtual worlds",
      icon: "./Icons/Planet.svg",
      img: "./Images/VirtualWorlds-img.png",
    },
  ];

  return (
    <Container>
      <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-6">
        Browse categories
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] min-[900px]:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            img={category.img}
            icon={category.icon}
            category={category.category}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
