import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as Style from "./style";
import { Container } from "../../components/Container/style";
import { Title } from "../../components/WhyOur/style";
import Footer from "../../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_CATALOG_URL}`);

    if (res.status === 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Style.Catalog>
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
            {data?.map((el) => {
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
    </Style.Catalog>
  );
};

export default Catalog;
