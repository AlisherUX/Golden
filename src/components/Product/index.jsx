import React, { useRef, useState, useEffect } from "react";
import * as Style from "./style";
import { Container } from "../Container/style";
import { Title } from "../WhyOur/style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BannerArrow } from "../../assets/images";
import { BannerButtons } from "../Banner/style";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_PRODUCTCARD_URL}`);
    if (res.status == 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
              320: {
                slidesPerView: 1,
              },
              430: {
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
            {data?.map((el) => {
              return (
                <SwiperSlide key={el.id}>
                  <ProductCard
                    id={el.id}
                    img={el.img}
                    cash={el.cash}
                    cardTxt={el.cardTxt}
                    nowPrice={el.nowPrice}
                    oldPrice={el.oldPrice}
                  />
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
