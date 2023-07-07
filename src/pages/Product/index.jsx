import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import * as Style from "./style";
import Footer from "components/Footer";
import ProductSwiper from "components/ProductSwiper";
import Header from "components/Header";
import Contact from "components/Contact";
import AboutProducts from "components/AboutProducts";
import { Container } from "components/Container/style";
import { Wrapper } from "pages/Category/style";
import { Demo, GrayLike, TickBox } from "assets/images";
import Raiting from "components/Raiting";
import { Feature, FeatureText } from "components/AboutProducts/style";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
// import { useParams } from "react-router-dom";

const ProductView = () => {
  // const { id } = useParams();
  // const productId = id.toLocaleLowerCase();
  const [data, setData] = useState([]);
  // const [title, setTitle] = useState(0);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_PRODUCTCARD_URL}`);

    if (res.status === 200) {
      setData(res.data);
    }
  }

  console.log(data.cardTxt);
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Style.BreadCrumbWrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" color="text.primary" href="/">
              Главная
            </Link>
            <Link underline="none" color="text.primary" href="/catalog">
              Каталог
            </Link>
            <Typography>Дверной Замок Golden Soft для офиса</Typography>
          </Breadcrumbs>
        </Style.BreadCrumbWrapper>
      </Container>

      <Container style={{ display: "flex", gap: "30px", marginBottom: "40px" }}>
        <Style.ProductImagesContent>
          <img src={Demo} alt="" />
        </Style.ProductImagesContent>

        <Style.ProductInfoContent>
          <Style.RaitingContent>
            JA182765
            <Raiting />
          </Style.RaitingContent>

          <Style.InfoTitle>{data.id}</Style.InfoTitle>

          <Style.Facilities>
            <Style.FacilitiesTitle>
              Подходит для установки на:
            </Style.FacilitiesTitle>
            <Wrapper style={{ display: "flex", gap: "12px" }}>
              <Feature>
                <TickBox />
                <FeatureText>Деревянную дверь</FeatureText>
              </Feature>
              <Feature>
                <TickBox />
                <FeatureText>Деревянную дверь</FeatureText>
              </Feature>
            </Wrapper>

            <Style.UserUnityWrapper>
              <Prices>
                <NowPrice>33 000₽</NowPrice>
                <OldPrice>37 000₽</OldPrice>
              </Prices>

              <Style.UserUnity>
                <Style.MainButton>Купить</Style.MainButton>

                <Style.LikeButton>
                  <GrayLike />В избранное
                </Style.LikeButton>
              </Style.UserUnity>
            </Style.UserUnityWrapper>

            <Accordion
              style={{ boxShadow: "none", backgroundColor: "#e6e6e6" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "#161C24", fontWeight: "600" }}>
                  Оплата
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#e6e6e6" }}>
                <Typography>
                  Оплата при получении товара, Картой онлайн, Google Pay,
                  Акционная оплата картой Visa, Безналичными для юридических
                  лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                  Оплата картой в отделении
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{ boxShadow: "none", backgroundColor: "#e6e6e6" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#161C24", fontWeight: "600" }}>
                  Монтаж и доставка
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "#e6e6e6", boxShadow: "none" }}
              >
                <Typography>
                  Оплата при получении товара, Картой онлайн, Google Pay,
                  Акционная оплата картой Visa, Безналичными для юридических
                  лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                  Оплата картой в отделении
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              style={{ boxShadow: "none", backgroundColor: "#e6e6e6" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography style={{ color: "#161C24", fontWeight: "600" }}>
                  Гарантии и выгода
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "#e6e6e6", boxShadow: "none" }}
              >
                <Typography>
                  Оплата при получении товара, Картой онлайн, Google Pay,
                  Акционная оплата картой Visa, Безналичными для юридических
                  лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                  Оплата картой в отделении
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Style.Facilities>
        </Style.ProductInfoContent>
      </Container>
      <ProductSwiper />
      <AboutProducts />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default ProductView;
