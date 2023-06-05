import React, {useRef, useEffect, useState} from 'react'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from '../Container/style';
import * as Style from "./style";
import { BannerArrow, BannerImg } from '../../assets/images';
import BlueButton from '../BlueButton';

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
    <div>

    <Style.BannerWrapper>
       
        <Swiper
        cssMode={true}
        navigation={{
            prevEl,
            nextEl,
        }}
        pagination={{
          el: ".pagination-bullets",
          type: "bullets",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{overflow: "visible"}}
      >
        <SwiperSlide style={{background:"red"}}>
          <Container>
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
          </Container>
        </SwiperSlide>
{/* a */}
        <SwiperSlide>
          <Container>
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
          </Container>
        </SwiperSlide>
{/* a */}
        <SwiperSlide>
          <Container>
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
          </Container>
        </SwiperSlide>
      </Swiper>
        
      <Style.SwiperNavigation>
        <Style.BannerButtons ref={prevElRef}>
            <BannerArrow style={{transform: "rotate(180deg)"}}/>
        </Style.BannerButtons>
        <div className="pagination-bullets"></div>
        <Style.BannerButtons ref={nextElRef}>
           <BannerArrow/>
        </Style.BannerButtons>
      </Style.SwiperNavigation>
    </Style.BannerWrapper>
    yhjyhggliugiugl
    </div>
  )
}

export default Banner;