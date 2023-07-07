import React, { useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "components/Container/style";
import { BannerArrow } from "assets/images";
import BlueButton from "components/BlueButton";
import * as Style from "./style";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "./data";

const Banner = () => {
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
    <Style.BannerWrapper>
      <Container>
        <Swiper
          cssMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            el: ".pagination-bullets",
            type: "bullets",
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            {data.map((el) => {
              return (
                <Style.BannerContent key={el.id}>
                  <Style.BannerImg src={el.img} alt={el.title} />

                  <Style.BannerEntries>
                    <Style.BannerTitle>
                      <span>{el.title}</span>
                      {el.titleItem}
                    </Style.BannerTitle>

                    <Style.BannerText>
                      <span>{el.text}</span>
                      <span>{el.description}</span>
                    </Style.BannerText>

                    <Style.BannerPrice>
                      <span>Цена</span>

                      <Style.Prices>
                        <Style.NowPrice>{el.nowprice}</Style.NowPrice>
                        <Style.OldPrice>{el.oldprice}</Style.OldPrice>
                      </Style.Prices>
                    </Style.BannerPrice>
                    <BlueButton text={"Добавить в корзину"} />
                  </Style.BannerEntries>
                </Style.BannerContent>
              );
            })}
          </SwiperSlide>
          
          <SwiperSlide>
            {data.map((el) => {
              return (
                <Style.BannerContent key={el.id}>
                  <Style.BannerImg src={el.img} alt={el.title} />

                  <Style.BannerEntries>
                    <Style.BannerTitle>
                      <span>{el.title}</span>
                      {el.titleItem}
                    </Style.BannerTitle>

                    <Style.BannerText>
                      <span>{el.text}</span>
                      <span>{el.description}</span>
                    </Style.BannerText>

                    <Style.BannerPrice>
                      <span>Цена</span>

                      <Style.Prices>
                        <Style.NowPrice>{el.nowprice}</Style.NowPrice>
                        <Style.OldPrice>{el.oldprice}</Style.OldPrice>
                      </Style.Prices>
                    </Style.BannerPrice>
                    <BlueButton text={"Добавить в корзину"} />
                  </Style.BannerEntries>
                </Style.BannerContent>
              );
            })}
          </SwiperSlide>
          {/* a */}
          <SwiperSlide>
            {data.map((el) => {
              return (
                <Style.BannerContent key={el.id}>
                  <Style.BannerImg src={el.img} alt={el.title} />

                  <Style.BannerEntries>
                    <Style.BannerTitle>
                      <span>{el.title}</span>
                      {el.titleItem}
                    </Style.BannerTitle>

                    <Style.BannerText>
                      <span>{el.text}</span>
                      <span>{el.description}</span>
                    </Style.BannerText>

                    <Style.BannerPrice>
                      <span>Цена</span>

                      <Style.Prices>
                        <Style.NowPrice>{el.nowprice}</Style.NowPrice>
                        <Style.OldPrice>{el.oldprice}</Style.OldPrice>
                      </Style.Prices>
                    </Style.BannerPrice>
                    <BlueButton text={"Добавить в корзину"} />
                  </Style.BannerEntries>
                </Style.BannerContent>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </Container>

      <Style.SwiperNavigation>
        <Style.BannerButtons ref={prevElRef}>
          <BannerArrow style={{ transform: "rotate(180deg)" }} />
        </Style.BannerButtons>
        <div className="pagination-bullets"></div>
        <Style.BannerButtons ref={nextElRef}>
          <BannerArrow />
        </Style.BannerButtons>
      </Style.SwiperNavigation>
    </Style.BannerWrapper>
  );
};

export default Banner;
