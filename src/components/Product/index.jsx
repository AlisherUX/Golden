import React, { useRef, useState, useEffect } from "react";
import * as Style from "./style";
import { Container } from "../Container/style";
import { Title } from "../WhyOur/style";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BannerArrow, Cross, Tick } from "../../assets/images";
import { BannerButtons, NowPrice, OldPrice, Prices } from "../Banner/style";
import { Navigation } from "swiper";
import { data } from "./data";

const Product = () => {
  const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current);
      }
    }, []);
    return [wrapper, ref];
  };

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
              320:{
                slidesPerView: 1,
              },
              430:{
                slidesPerView: 2,
              },
              670:{
                slidesPerView: 3,
              },
              1180:{
                slidesPerView: 4,
              }
            }}
          >
            {data.map((el) => {
              return (
                <SwiperSlide className="product-slides" key={el.id}>
                  <Style.CardImgWrapper>
                    <img src={el.img} alt=""/>
                    <Style.PresentWrapper>
                      {el.presentIcon}
                      {el.present}
                    </Style.PresentWrapper>
                    <Style.SaleStiker>{el.sale}</Style.SaleStiker>
                    <Style.StockStiker>
                      {el.cash ? <Tick/> : <Cross/>}
                      {el.cash ? "В наличии" : "Нет в наличии"}
                    </Style.StockStiker>
                  </Style.CardImgWrapper>
                  <Style.ProductCardInfoWrapper>
                    <Style.MiniTxt>
                      {el.cardTxt}
                    </Style.MiniTxt>
                    <Prices>
                      <NowPrice style={{ fontSize: "20px" }}>{el.nowPrice}</NowPrice>
                      <OldPrice style={{ fontSize: "18px" }}>{el.oldPrice}</OldPrice>
                    </Prices>
                  </Style.ProductCardInfoWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Style.ProductSwiperWrapper>
      </Container>
    </Style.ProductWrapper>
  );
};

export default Product;
