import React from "react";
import Banner from "./banner/Banner";
import Card from "./hero/Card";
import Hero from "./hero/Hero";
import Product from "./product/Product";

const Home = () => {
  return (
    <>
      <Hero />  
      <Card />
      <Product />
      <Banner />
    </>
  );
};

export default Home;
