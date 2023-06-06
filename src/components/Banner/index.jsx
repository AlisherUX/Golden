import React, {useRef, useEffect, useState} from 'react'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from '../Container/style';
import { BannerArrow, BannerImg } from '../../assets/images';
import BlueButton from '../BlueButton';
import * as Style from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "./data";

const Banner = () => {
    const useSwiperRef = () => {
        const [wrapper, setWrapper] = useState(null);
        const ref = useRef(null);

        useEffect(() => {
            if (ref.current){
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
        className="mySwiper"
      >

        <SwiperSlide>
          {data.map((el) => {
            return(
            <Style.BannerContent key={el.id}>
              <img src={el.img} alt={el.title} />
            </Style.BannerContent>
            )
          })};
            <Style.BannerContent>
              {/* <Style.BannerImg src={BannerImg}/> */}
              
              <Style.BannerEntries>
                <Style.BannerTitle>
                <span>Golden Soft</span> GS-200Z-5 для офиса
                </Style.BannerTitle>

                <Style.BannerText>
                  <span>
                    Замок дверной электронный Golden Soft 
                    GS-200Z-5 имеет роскошный глянцевый 
                    блеск,четкие линии, красивые формы.
                  </span>
                  <span>
                    Подходит для установки на деревянную/межкомнатную дверь.
                  </span>
                </Style.BannerText>

                <Style.BannerPrice>
                  <span>Цена</span>

                  <Style.Prices>
                    <Style.BannerNowPrice>33 000₽</Style.BannerNowPrice>
                    <Style.BannerOldPrice>37 000₽</Style.BannerOldPrice>
                  </Style.Prices>
                </Style.BannerPrice>
                <BlueButton text={'Добавить в корзину'}></BlueButton>
              </Style.BannerEntries>
            </Style.BannerContent>
 
        </SwiperSlide>
{/* a */}
        <SwiperSlide>

          <Style.BannerContent>
              <Style.BannerImg src={BannerImg}/>
              
              <Style.BannerEntries>
                <Style.BannerTitle>
                <span>Golden Soft</span> GS-200Z-5 для офиса
                </Style.BannerTitle>

                <Style.BannerText>
                  <span>
                    Замок дверной электронный Golden Soft 
                    GS-200Z-5 имеет роскошный глянцевый 
                    блеск,четкие линии, красивые формы.
                  </span>
                  <span>
                    Подходит для установки на деревянную/межкомнатную дверь.
                  </span>
                </Style.BannerText>

                <Style.BannerPrice>
                  <span>Цена</span>

                  <Style.Prices>
                    <Style.BannerNowPrice>33 000₽</Style.BannerNowPrice>
                    <Style.BannerOldPrice>37 000₽</Style.BannerOldPrice>
                  </Style.Prices>
                </Style.BannerPrice>
                <BlueButton text={'Добавить в корзину'}></BlueButton>
              </Style.BannerEntries>
            </Style.BannerContent>

        </SwiperSlide>
{/* a */}
        <SwiperSlide>

          <Style.BannerContent>
              <Style.BannerImg src={BannerImg}/>
              
              <Style.BannerEntries>
                <Style.BannerTitle>
                <span>Golden Soft</span> GS-200Z-5 для офиса
                </Style.BannerTitle>

                <Style.BannerText>
                  <span>
                    Замок дверной электронный Golden Soft 
                    GS-200Z-5 имеет роскошный глянцевый 
                    блеск,четкие линии, красивые формы.
                  </span>
                  <span>
                    Подходит для установки на деревянную/межкомнатную дверь.
                  </span>
                </Style.BannerText>

                <Style.BannerPrice>
                  <span>Цена</span>

                  <Style.Prices>
                    <Style.BannerNowPrice>33 000₽</Style.BannerNowPrice>
                    <Style.BannerOldPrice>37 000₽</Style.BannerOldPrice>
                  </Style.Prices>
                </Style.BannerPrice>
                <BlueButton text={'Добавить в корзину'}></BlueButton>
              </Style.BannerEntries>
            </Style.BannerContent>
        </SwiperSlide>
      </Swiper>
          </Container>
        
      <Style.SwiperNavigation >
        <Style.BannerButtons ref={prevElRef}>
            <BannerArrow style={{transform: "rotate(180deg)"}}/>
        </Style.BannerButtons>
        <div className="pagination-bullets"></div>
        <Style.BannerButtons ref={nextElRef}>
           <BannerArrow/>
        </Style.BannerButtons>
      </Style.SwiperNavigation>
    </Style.BannerWrapper>
  )
}

export default Banner;