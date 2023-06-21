import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "components/Container/style";
import { Title } from "components/WhyOur/style";
import BlueButton from "components/BlueButton";
import * as Style from "./style";

const Category = () => {
  const [data, setData] = useState([]);
  const sekletMap = Array.from({ length: 4 });

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_CATEGORY_URL}`);

    if (res.status === 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Style.CategoryWrapper>
      <Title>Категории</Title>
      <Container>
        <Style.CategoryCards>
          {data.length ? data.map((el) => {
                return (
                  <Style.CategoryCard>
                    <Style.CardItemsWrapper>
                      <Style.CardEntry>{el.text}</Style.CardEntry>
                      <Link to="/category">
                        <Style.CardBtn>Перейти</Style.CardBtn>
                      </Link>
                    </Style.CardItemsWrapper>

                    <Style.CardImg src={el.img} />
                  </Style.CategoryCard>
                );
              }): sekletMap.map((_, el) => (
                  <Style.SkeletonCard className="skeleton-card" />
              ))}
        </Style.CategoryCards>
      </Container>
      <Link to="/catalog">
        <BlueButton text={"Все категории"} />
      </Link>
    </Style.CategoryWrapper>
  );
};

export default Category;
