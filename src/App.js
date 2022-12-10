import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Trending from "./Components/Trending/Trending";
import Creators from "./Components/Creators/Creators";
import Categories from "./Components/Categories/Categories";
const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Trending />
      <Creators />
      <Categories />
    </>
  );
};

export default App;
