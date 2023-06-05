import { createGlobalStyle } from "styled-components";
import { flex } from "./flex";
import { adaptiveValue, colors } from "./variable";

export const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
 }

 .swiper {
   width: 100%;
  ${adaptiveValue("height", 726, 450)};
 }
 
 .swiper-slide {
   text-align: center;
   font-size: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
   
  @media (max-width: 660px) {
     margin-top: 130px;
  }
 }
 
 .swiper-slide img {
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

 .swiper-pagination-bullets {
    ${flex.center}
    gap: 12px;
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
`;
