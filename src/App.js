import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Trending from "./Components/Trending/Trending";
import Creators from "./Components/Creators/Creators";
import Categories from "./Components/Categories/Categories";
import NFTs from "./Components/NFTs/NFTs";
import Auction from "./Components/Auction/Auction";
import How from "./Components/How/How";
import FormContainer from "./Components/Form/FormContainer";
import Footer from "./Components/Footer/Footer";
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
      <How />
      <FormContainer />
      <Footer />
    </>
  );
};

export default App;
