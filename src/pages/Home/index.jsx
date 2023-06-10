import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Statistic from "../../components/Statistic";
import WhyOur from "../../components/WhyOur";
import Category from "../../components/Category";
import Product from "../../components/Product";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Statistic/>
      <WhyOur/>
      <Category/>
      <Product/>
      <Contact/>
    </div>
  );
};

export default Home;
