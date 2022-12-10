import React from "react";
import Container from "../../UI/Container";
import CategoryCard from "./CategoryCard";
import ArtImg from "../../Images/Art-img.png";
import CollectiblesImg from "../../Images/Collectibles-img.png";
import MusicImg from "../../Images/Music-img.png";
import PhotographyImg from "../../Images/Photography-img.png";
import VideoImg from "../../Images/Video-img.png";
import UtilityImg from "../../Images/Utility-img.png";
import SportImg from "../../Images/Sport-img.png";
import VirtualWorldsImg from "../../Images/VirtualWorlds-img.png";
import Camera from "../../Icons/Camera.svg";
import Basketball from "../../Icons/Basketball.svg";
import MusicNotes from "../../Icons/MusicNotes.svg";
import VideoCamera from "../../Icons/VideoCamera.svg";
import Planet from "../../Icons/Planet.svg";
import PaintBrush from "../../Icons/PaintBrush.svg";
import MagicWand from "../../Icons/MagicWand.svg";
import Swatches from "../../Icons/Swatches.svg";
const Categories = () => {
  const categories = [
    {
      id: 1,
      category: "art",
      icon: { PaintBrush },
      img: { ArtImg },
    },
    {
      id: 2,
      category: "collectibles",
      icon: { Swatches },
      img: { CollectiblesImg },
    },
    {
      id: 3,
      category: "music",
      icon: { MusicNotes },
      img: { MusicImg },
    },
    {
      id: 4,
      category: "photography",
      icon: { Camera },
      img: { PhotographyImg },
    },
    {
      id: 5,
      category: "video",
      icon: { VideoCamera },
      img: { VideoImg },
    },
    {
      id: 6,
      category: "utility",
      icon: { MagicWand },
      img: { UtilityImg },
    },
    {
      id: 7,
      category: "sport",
      icon: { Basketball },
      img: { SportImg },
    },
    {
      id: 8,
      category: "virtual worlds",
      icon: { Planet },
      img: { VirtualWorldsImg },
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] min-[900px]:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            img={[...Object.values(category.img)]}
            icon={[...Object.values(category.icon)]}
            iconAlt={[...Object.keys(category.icon)]}
            category={category.category}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
