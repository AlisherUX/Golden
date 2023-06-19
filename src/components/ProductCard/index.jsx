import React from "react";
import * as Style from "./style";
import { Cross, Tick } from "../../assets/images";
import { NowPrice, OldPrice, Prices } from "../Banner/style";

const ProductCard = ({id, img, cash, presentIcon, cardTxt, nowPrice, oldPrice }) => {
  return (
           <Style.ProductCardContent key={id}>
             <Style.CardImgWrapper>
               <img src={img} alt="" />
               <Style.PresentWrapper>
                 {presentIcon}
                 Подарок
               </Style.PresentWrapper>
               <Style.SaleStiker>SALE</Style.SaleStiker>
               <Style.StockStiker>
                 {cash ? <Tick /> : <Cross />}
                 {cash ? "В наличии" : "Нет в наличии"}
               </Style.StockStiker>
             </Style.CardImgWrapper>
 
             <Style.ProductCardInfoWrapper>
               <Style.MiniTxt>{cardTxt}</Style.MiniTxt>
               <Prices>
                 <NowPrice style={{ fontSize: "20px" }}>{nowPrice}</NowPrice>
                 <OldPrice style={{ fontSize: "18px" }}>{oldPrice}</OldPrice>
               </Prices>
             </Style.ProductCardInfoWrapper>
           </Style.ProductCardContent>
  );
};

export default ProductCard;
