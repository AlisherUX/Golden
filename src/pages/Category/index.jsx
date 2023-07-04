import React, { useEffect, useState } from "react";
import * as Style from "./style";
import Header from "components/Header";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Product from "components/ProductSwiper";
import AboutProducts from "components/AboutProducts";
import { Container } from "components/Container/style";
import ProductCard from "components/ProductCard";
import { Title } from "../../components/WhyOur/style";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { BreadCrumbLink, BreadCrumbTypography, BreadCrumbs } from "pages/Catalog/style";

const Category = () => {
  const [data, setData] = useState([]);
  const sekletMap = Array.from({ length: 8 });

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_PRODUCTCARD_URL}`);
    if (res.status === 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  console.log(data, "alalalalal");
  return (
    <Style.Wrapper>
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
          <BreadCrumbTypography color="text.primary" variant="p">Каталог</BreadCrumbTypography>
        </BreadCrumbs>
        <Title style={{ textAlign: "left", marginBottom: "32px" }}>
          Накладные электронные замки
        </Title>
      </Container>

      <Container>
        <Style.CardsWrapper>
          {data.length ? data.map((el) => {
            return <ProductCard
              id={el.id}
              img={el.img}
              cash={el.cash}
              cardTxt={el.cardTxt}
              nowPrice={el.nowPrice}
              oldPrice={el.oldPrice}
            />;
          }) : sekletMap.map((_, el) => <Skeleton width={288} height={426} />)}
        </Style.CardsWrapper>
      </Container>
      <Product />
      <AboutProducts />
      <Contact />
      <Footer />
    </Style.Wrapper>
  );
};

export default Category;
