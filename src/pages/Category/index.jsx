import React, { useEffect, useState } from "react";
import * as Style from "./style";
import Header from "components/Header";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Product from "components/ProductSwiper";
import AboutProducts from "components/AboutProducts";
import { Container } from "components/Container/style";
import ProductCard from "components/ProductCard";
import {
  CatalogLink,
  CatalogTypography,
  CtalogBreadCrumbs,
} from "../Catalog/style";
import { Title } from "../../components/WhyOur/style";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

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

  return (
    <Style.Wrapper>
      <Header />
      <Container>
        <CtalogBreadCrumbs aria-label="breadcrumb">
          <CatalogLink
            className="link"
            underline="hover"
            color="inherit"
            to="/"
          >
            Главная
          </CatalogLink>
          <CatalogTypography color="text.primary">Каталог</CatalogTypography>
        </CtalogBreadCrumbs>
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
