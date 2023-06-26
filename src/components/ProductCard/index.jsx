import React, { useContext } from "react";
import * as Style from "./style";
import { Cross, Present, Tick } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";
import { Button } from "pages/Product/style";
import MainContext from "components/reducer/CartContext";


const ProductCard = (props) => {
  const {cash, oldPrice, nowPrice, id, img, cardTxt} = props.data;
  const {addToCart} = useContext(MainContext)
  return (
          <Style.ProductCardContent to={`/product/detail/${id}`}>
            <Style.CardImgWrapper>
              <Style.CardImg src={img}/>
              <Style.PresentWrapper>
                <Present/>
                Подарок
              </Style.PresentWrapper>
              <Style.SaleStiker>SALE</Style.SaleStiker>
              <Style.StockStiker>
                {cash ? <Tick /> : <Cross />}
                {cash ? "В наличии" : "Нет в наличии"}
              </Style.StockStiker>
            </Style.CardImgWrapper>
              <Raiting/>
            <Style.ProductCardInfoWrapper>
              <Style.MiniTxt>{cardTxt}</Style.MiniTxt>
              <Prices>
                <NowPrice style={{ fontSize: "20px" }}>{oldPrice}</NowPrice>
                <OldPrice style={{ fontSize: "18px" }}>{nowPrice}</OldPrice>
              </Prices>
              <Button onClick={() => addToCart(props.data)} style={{paddingInline: "106px", margin: "0 auto"}}>Add To Card</Button>
            </Style.ProductCardInfoWrapper>
          </Style.ProductCardContent>
  );
};

export default ProductCard;
