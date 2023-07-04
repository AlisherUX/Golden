import React, { useContext } from "react";
import * as Style from "./style";
import { AddLike, Cross, Present, RemoveLike, Tick } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";
import { Button } from "pages/Product/style";
import MainContext from "reducer/CartContext";
import { IconButton } from "@mui/material";

const ProductCard = ({ cardTxt, cash, oldPrice, nowPrice, id, img, select, like }) => {
  const { addToCart, removeFromCart } = useContext(MainContext);
  const { addToLike, removeFromLike } = useContext(MainContext);

  const CartToggle = () => {
    return select ? removeFromCart(id) : addToCart(cardTxt, id, cash, nowPrice, oldPrice, img);
  };
  const LikeToggle = () => {
    return like ? removeFromLike(id) : addToLike(cardTxt, id, cash, nowPrice, oldPrice, img);
  };

  console.log(select);

  return (
    <Style.ProductCardContent to={`/product/detail/${id}`}>
      <Style.CardImgWrapper>
        <Style.CardImg src={img} alt="" />
        <Style.PresentWrapper>
          <Present />
          Подарок
        </Style.PresentWrapper>
        <Style.SaleStiker>SALE</Style.SaleStiker>
        <Style.StockStiker>
          {cash ? <Tick /> : <Cross />}
          {cash ? "В наличии" : "Нет в наличии"}
        </Style.StockStiker>
      </Style.CardImgWrapper>
      <Raiting />
      <Style.ProductCardInfoWrapper>
        <Style.MiniTxt>{cardTxt}</Style.MiniTxt>
        <Prices>
          <NowPrice style={{ fontSize: "20px" }}>{oldPrice}</NowPrice>
          <OldPrice style={{ fontSize: "18px" }}>{nowPrice}</OldPrice>
        </Prices>
        <Style.ButtonsContent>
          <Button
            onClick={CartToggle}
            style={{ paddingInline: "45px"}}
          >
            {select ? "Remove From Cart" : "Add To Cart"}
          </Button>

          <IconButton onClick={LikeToggle} color="primary"> { like ? <RemoveLike/> : <AddLike/>} </IconButton>
        </Style.ButtonsContent>
      </Style.ProductCardInfoWrapper>
    </Style.ProductCardContent>
  );
};

export default ProductCard;