import React from "react";
import Header from "../../components/Header";
import Footer from "components/Footer";
import Statistic from "components/Statistic";
import { StatisticWrapper } from "components/Statistic/style";
import {
  BreadCrumbLink,
  BreadCrumbTypography,
  BreadCrumbs,
} from "pages/Catalog/style";
import { Container } from "components/Container/style";
import AboutBanner from "components/AboutBanner";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <BreadCrumbs aria-label="breadcrumb">
          <BreadCrumbLink
            className="link"
            underline="hover"
            color="inherit"
            to="/"
          >
            Главная
          </BreadCrumbLink>
          <BreadCrumbTypography color="text.primary" variant="p">
            О нас
          </BreadCrumbTypography>
        </BreadCrumbs>


        <AboutBanner/>
      </Container>
      <Statistic>
        <StatisticWrapper color={false} />
      </Statistic>
      <Footer />
    </div>
  );
};

export default AboutUs;
