import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Statistic from "../../components/Statistic";
import WhyOur from "../../components/WhyOur";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Statistic/>
      <WhyOur/>
    </div>
  );
};

export default Home;
