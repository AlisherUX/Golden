import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Statistic from "../../components/Statistic";
import WhyOur from "../../components/WhyOur";
import Category from "../../components/Category";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Statistic/>
      <WhyOur/>
      <Category/>
    </div>
  );
};

export default Home;
