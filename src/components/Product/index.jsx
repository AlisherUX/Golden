import React, { useRef, useState, useEffect } from "react";
import * as Style from "./style";
import { Container } from "../Container/style";
import { Title } from "../WhyOur/style";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BannerArrow, Handle4, Handle5, Handle6, Handle7, Present, Tick } from "../../assets/images";
import { BannerButtons, NowPrice, OldPrice, Prices } from "../Banner/style";
import { Navigation } from "swiper";

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
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle4} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>33 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>37 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle5} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>7 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>8 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle6} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>33 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>30 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle7} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>9 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>12 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle5} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>13 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>20 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle6} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>30 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>37 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle7} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>33 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>37 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle4} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                  В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>20 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>29 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <Style.CardImgWrapper>
                <img src={Handle6} alt="" />
                <Style.PresentWrapper>
                  <Present/>
                  Подарок
                </Style.PresentWrapper>
                  <Style.SaleStiker>SALE</Style.SaleStiker>
                <Style.StockStiker>
                  <Tick/>
                В наличии
                </Style.StockStiker>
              </Style.CardImgWrapper>
              <Style.ProductCardInfoWrapper>
                <Style.ProductCardTxt>Дверной Замок Golden Soft для отеля</Style.ProductCardTxt>
                <Prices>
                  <NowPrice style={{fontSize: "20px"}}>18 000₽</NowPrice>
                  <OldPrice style={{fontSize: "18px"}}>26 000₽</OldPrice>
                </Prices>
              </Style.ProductCardInfoWrapper>
            </SwiperSlide>
          </Swiper>
        </Style.ProductSwiperWrapper>
      </Container>
    </Style.ProductWrapper>
  );
};

export default Product;
