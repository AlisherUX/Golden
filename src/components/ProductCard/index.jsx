import React, { useContext } from "react";
import * as Style from "./style";
import { AddLike, Cross, Present, RemoveLike, Tick } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";
import { MainButton } from "pages/Product/style";
import MainContext from "context/CartContext";
import { IconButton } from "@mui/material";

const ProductCard = ({ data, select, like }) => {
  const { id, cardTxt, img, cash, nowPrice, oldPrice } = data;
  const { addToCart, removeFromCart } = useContext(MainContext);
  const { addToLike, removeFromLike } = useContext(MainContext);

  const CartToggle = () => {
    return select ? removeFromCart(id) : addToCart(data);
  };
  const LikeToggle = () => {
    return like ? removeFromLike(id) : addToLike(data);
  };
  
  return (
    <Style.ProductCardContent>
      <Style.CardLink to={`/product/detail/${id}`}>
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
      </Style.CardLink>
      <Style.ProductCardInfoWrapper>
      <Raiting />
        <Style.MiniTxt>{cardTxt}</Style.MiniTxt>
        <Prices>
          <NowPrice style={{ fontSize: "20px" }}>{oldPrice}</NowPrice>
          <OldPrice style={{ fontSize: "18px" }}>{nowPrice}</OldPrice>
        </Prices>
        <Style.ButtonsContent>
          <MainButton onClick={CartToggle} style={{ paddingInline: "45px" }}>
            {select ? "Remove" : "Add"}
          </MainButton>

          <IconButton onClick={LikeToggle} color="primary">
            {like ? <RemoveLike /> : <AddLike />}
          </IconButton>
        </Style.ButtonsContent>
      </Style.ProductCardInfoWrapper>
    </Style.ProductCardContent>
  );
};

export default ProductCard;
