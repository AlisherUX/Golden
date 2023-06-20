import React from "react";
import * as Style from "./style";
import { Cross, Present, Tick } from "../../assets/images";
import { NowPrice, OldPrice, Prices } from "../Banner/style";


const ProductCard = ({cash, oldPrice, nowPrice, id, img, cardTxt}) => {
  return (
          <Style.ProductCardContent to={`/product/detail/${id}`}>
            <Style.CardImgWrapper>
              <Style.CardImg src={img}/>
              <Style.PresentWrapper>
                <Present/>
                Подарок
              </Style.PresentWrapper>
              {/* <Style.SaleStiker>SALE</Style.SaleStiker> */}
              <Style.StockStiker>
                {cash ? <Tick /> : <Cross />}
                {cash ? "В наличии" : "Нет в наличии"}
              </Style.StockStiker>
            </Style.CardImgWrapper>

            <Style.ProductCardInfoWrapper>
              <Style.MiniTxt>{cardTxt}</Style.MiniTxt>
              <Prices>
                <NowPrice style={{ fontSize: "20px" }}>{oldPrice}</NowPrice>
                <OldPrice style={{ fontSize: "18px" }}>{nowPrice}</OldPrice>
              </Prices>
            </Style.ProductCardInfoWrapper>
          </Style.ProductCardContent>
  );
};

export default ProductCard;
