import { createGlobalStyle } from "styled-components";
import { flex } from "./flex";
import { fonts } from "./variable";

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

 .product-slides{
    @media (max-width: 660px) {
       max-width: 268px;
    };
 };

 .error_message{
   color: red;
   font-size: 14px;
   font-family: ${fonts.sfReg};
 };

 ::-webkit-scrollbar{
   background: transparent;
 };

 ::-webkit-scrollbar-button{
   display: none;
 };

 ::-webkit-scrollbar-thumb{
   background-color: #92C5F6;
   border-radius: 4px;
   position: relative;
 };

.skeleton-card{
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.6s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
`;
