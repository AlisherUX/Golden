import React, { useContext, useEffect, useState } from "react";
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
import MainContext from "reducer/CartContext";
import { useParams } from "react-router-dom";

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const sekletMap = Array.from({length: 2 });
  const {likeItems, cartItems} = useContext(MainContext)
  const categoryText = type.toLocaleLowerCase();

  async function getProduct() {
    const res = await axios.get(
        `${process.env.REACT_APP_PRODUCTCARD_URL}?category=${categoryText}`
    );
    if (res.status === 200) {
        setData(res.data);
    }
}

  useEffect(() => {
    getProduct();
  }, [type]);
  
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
             data={el}
             like={likeItems.find(item => item.id === el.id)}
             select={cartItems.find(item => item.id === el.id)}
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
