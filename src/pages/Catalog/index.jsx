import React from "react";
import Header from "components/Header";
import * as Style from "./style";
import { Container } from "components/Container/style";
import { Title } from "components/WhyOur/style";
import Footer from "components/Footer";
import { data } from "./data";
import { Wrapper } from "pages/Category/style";
import CatalogCard from "components/CatalogCard";

const Catalog = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Style.BreadCrumbs aria-label="breadcrumb">
          <Style.BreadCrumbLink
            className="link"
            underline="hover"
            color="inherit"
            to="/"
          >
            Главная
          </Style.BreadCrumbLink>
          <Style.BreadCrumbTypography color="text.primary" variant="p">
            Каталог
          </Style.BreadCrumbTypography>
        </Style.BreadCrumbs>

        <Style.CatalogContent>
          <Title>Категории</Title>

          <Style.CatalogCards>
            {data.map((el) => (
              <CatalogCard
               card={el}
              />
            ))}
          </Style.CatalogCards>
        </Style.CatalogContent>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Catalog;
