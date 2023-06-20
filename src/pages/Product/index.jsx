import React from 'react';
import * as Style from "./style";
import Header from 'components/Header';
import ProductSwiper from 'components/ProductSwiper';
import Footer from 'components/Footer';
import Contact from 'components/Contact';
import AboutProducts from 'components/AboutProducts';
import { Container } from 'components/Container/style';
import MainImg from "../../assets/images/MainImg.png"
import { Wrapper } from 'pages/Category/style';
import { BreadCrumb } from 'components/BreadCrumbs/style';

const ProductView = () => {

  return (
    <Wrapper>
      <Header/>
      <Container>
        <BreadCrumb/>
      </Container>
      <Container style={{display: "flex"}}>
        <Style.ProductImagesContent>
          <Style.MainImg src={MainImg}/>
        </Style.ProductImagesContent>

        <Style.ProductInfoContent>

        </Style.ProductInfoContent>
      </Container>
      <ProductSwiper/>
      <AboutProducts/>
      <Contact/>
      <Footer/>
    </Wrapper>
  )
}

export default ProductView;