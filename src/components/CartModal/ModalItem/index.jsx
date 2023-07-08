import React, { useContext, useState } from "react";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice } from "components/Banner/style";
import MainContext from "context/CartContext";
import { Button } from "components/LikeModal/ModalItem/style";
import { IconButton } from "@mui/material";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice, id, quantity } = product;
  const { removeFromCart, addOne, removeOne } = useContext(MainContext);
  let price = parseFloat(nowPrice)

console.log(price)
  return (
    <Style.CardContent>
      <Style.ProductImg>
        <img src={img} alt="" />
      </Style.ProductImg>
      <Style.UserActionContent>
        <Style.LeftActionsWrapper>
          <Style.CardTitle>{cardTxt}</Style.CardTitle>
          <Style.Counter>
            <Style.Characters onClick={() => removeOne(id)}>-</Style.Characters>
            <Style.NumberWrapper>{quantity}</Style.NumberWrapper>
            <Style.Characters onClick={() => addOne(id)}>+</Style.Characters>
          </Style.Counter>
        </Style.LeftActionsWrapper>

        <Style.RightActionsWrapper>
          <IconButton style={{ borderRadius: "10px" }}>
            <Button onClick={() => removeFromCart(id)}>
              <TrashCan />
              Удалить
            </Button>
          </IconButton>
          <NowPrice style={{ fontSize: "16px" }}>{(price * quantity).toLocaleString()}₽</NowPrice>
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
