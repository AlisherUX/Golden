import React, { useState, useEffect, useContext } from "react";
import * as Style from "./style";
import { Container } from "components/Container/style";
import { Title } from "components/WhyOur/style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BannerArrow } from "../../assets/images";
import { BannerButtons } from "../Banner/style";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import MainContext from "reducer/CartContext";
import { useSwiperRef } from "hooks/useSwiperRef";

const ProductSwiper = () => {
  const [data, setData] = useState([]);
  const sekletMap = Array.from({ length: 4 });
  const { cartItems, likeItems } = useContext(MainContext);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_PRODUCTCARD_URL}`);
    if (res.status === 200) {
      setData(res.data);
    }
  }

  console.log(data.id, "from swiper");

  useEffect(() => {
    getData();
  }, []);

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  return (
    <Style.ProductWrapper>
      <Container>
        <Style.ProductTitleContent>
          <Title>Наши популярные продукты</Title>

          <Style.ProductNavigation>
            <BannerButtons ref={prevElRef}>
              <BannerArrow style={{ transform: "rotate(180deg)" }} />
            </BannerButtons>
            <BannerButtons ref={nextElRef}>
              <BannerArrow />
            </BannerButtons>
          </Style.ProductNavigation>
        </Style.ProductTitleContent>

        <Style.ProductSwiperWrapper>
          <Swiper
            navigation={{ prevEl, nextEl }}
            modules={[Navigation]}
            spaceBetween={30}
            freeMode={true}
            className="productSwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              830: {
                slidesPerView: 2,
              },
              670: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {data.length
              ? data.map((el) => {
                  return (
                    <SwiperSlide key={el.id}>
                      <ProductCard
                        data={el}
                        cardTxt={el.cardTxt}
                        img={el.img}
                        id={el.id}
                        cash={el.cash}
                        nowPrice={el.nowPrice}
                        oldPrice={el.oldPrice}
                        select={cartItems.find((item) => item.id === el.id)}
                        like={likeItems.find((item) => item.id === el.id)}
                      />
                    </SwiperSlide>
                  );
                })
              : sekletMap.map((_, el) => (
                  <SwiperSlide>
                    <Skeleton height={426} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </Style.ProductSwiperWrapper>
      </Container>
    </Style.ProductWrapper>
  );
};

export default ProductSwiper;
