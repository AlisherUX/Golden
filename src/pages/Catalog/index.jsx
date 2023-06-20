import React from "react";
import Header from "components/Header";
import * as Style from "./style";
import { Container } from "components/Container/style";
import { Title } from "components/WhyOur/style";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import { data } from "./data";
import { Wrapper } from "pages/Category/style";

const Catalog = () => {

  return (
    <Wrapper>
      <Header />
      <Container>
        <Style.CtalogBreadCrumbs aria-label="breadcrumb">
          <Style.CatalogLink
            className="link"
            underline="hover"
            color="inherit"
            to="/"
          >
            Главная
          </Style.CatalogLink>
          <Style.CatalogTypography color="text.primary">
            Каталог
          </Style.CatalogTypography>
        </Style.CtalogBreadCrumbs>

        <Style.CatalogContent>
          <Title>Категории</Title>

          <Style.CatalogCards>
            {data.map((el) => {
              return (
                <Link to='/category'>
                  <Style.CatalogCard key={el.id}>
                    <Style.CatalogCardImg src={el.img} />
                    <Style.CatalogCardTxt>{el.text}</Style.CatalogCardTxt>
                  </Style.CatalogCard>
                </Link>
              );
            })}
          </Style.CatalogCards>
        </Style.CatalogContent>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Catalog;
