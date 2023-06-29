import React, { useContext } from "react";
import * as Style from "./style";
import { Cross, Present, Tick } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";
import { Button } from "pages/Product/style";
import MainContext from "reducer/CartContext";


const ProductCard = ({data, select}) => {
  const {cash, oldPrice, nowPrice, id, img, cardTxt} = data;
  const {addToCart, removeFromCart} = useContext(MainContext)

  const CartToggle = () => {
    return select ? removeFromCart(id) : addToCart(data);
  };

  return (
          <Style.ProductCardContent to={`/product/detail/${id}`}>
            <Style.CardImgWrapper>
              <Style.CardImg src={img} alt=""/>
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
              <Button onClick={CartToggle} style={{paddingInline: "85px", margin: "0 auto"}}>{select ? "Remove From Cart" : "Add To Cart"}</Button>
            </Style.ProductCardInfoWrapper>
          </Style.ProductCardContent>
  );
};

export default ProductCard;
