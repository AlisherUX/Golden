import { createGlobalStyle } from "styled-components";
import { flex } from "./flex";
import { adaptiveValue, colors } from "./variable";

export const GlobalStyles = createGlobalStyle`

@font-face {
   font-family: "SF-ProText-Regular";
   src: url(/fonts/SF-ProText-Regular.ttf);
   font-weight: 400;
}

@font-face {
   font-family: "SF-ProText-SemiBold";
   src: url(/fonts/SF-ProText-SemiBold.ttf);
   font-weight: 600;
}

@font-face {
   font-family: "SF-ProText-Medium";
   src: url(/fonts/SF-ProText-Medium.ttf);
   font-weight: 500;
}

@font-face {
   font-family: "SF-ProText-Light";
   src: url(/fonts/SF-ProText-Light.ttf);
   font-weight: 300;
}

 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
 }

 .swiper {
   width: 100%;
   ${flex.alignCenter}
   
   @media (max-width: 660px) {
      margin-bottom: 32px;
   }
 }

 .swiper-slide {
   text-align: center;
   font-size: 18px;
   width: 100%;
 }
 
 .swiper-slide img {
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

 .swiper-pagination-bullets {
    ${flex.center}
   ${adaptiveValue("gap", 12, 32)};
 }

 .swiper-pagination-bullet {
    cursor: pointer;
    width: 6px;
    height: 6px;
    background-color: #65B4FF;
    transition: 0.2s;
 }

 .swiper-pagination-bullet-active {
  width: 8px;
  height: 8px;
  background-color: ${colors.primaryColor};
  position: relative;

  &:after{
    content: '';
    position: absolute;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    border: 1px solid #ADD7FF;
    background: transparent;
    border-radius: 50%;
  }
 }

 .swiper-button-disabled{
  opacity: 0.4;
 }

 .product-slides{
    @media (max-width: 660px) {
       max-width: 268px;
    }
 }
`;
