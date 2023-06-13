import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Statistic from "../../components/Statistic";
import WhyOur from "../../components/WhyOur";
import Category from "../../components/Category";
import Product from "../../components/Product";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

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
      <Footer/>
    </div>
  );
};

export default Home;
