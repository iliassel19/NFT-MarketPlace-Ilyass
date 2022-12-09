import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Trending from "./Components/Trending/Trending";
import Creators from "./Components/Creators/Creators";
const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Trending />
      <Creators />
    </>
  );
};

export default App;
