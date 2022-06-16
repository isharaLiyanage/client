import React from "react";

import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
