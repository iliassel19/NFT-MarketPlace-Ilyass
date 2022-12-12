import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Trending from "./Components/Trending/Trending";
import Creators from "./Components/Creators/Creators";
import Categories from "./Components/Categories/Categories";
import NFTs from "./Components/NFTs/NFTs";
import Auction from "./Components/Auction/Auction";
const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Trending />
      <Creators />
      <Categories />
      <NFTs />
      <Auction />
    </>
  );
};

export default App;
