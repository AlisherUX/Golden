import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice } from "components/Banner/style";
import { Button, CardContent, CardTitle, LeftActionsWrapper, ProductImg, RightActionsWrapper } from "components/LikeModal/ModalItem/style";
import MainContext from "context/CartContext";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice, id, quantity } = product;
  const { removeFromCart, addOne, removeOne } = useContext(MainContext);
  let price = parseFloat(nowPrice);

  console.log(price);
  return (
    <CardContent>
        <ProductImg to='/product'>
          <img src={img} alt="" />
        </ProductImg>
      <Style.UserActionContent>
        <LeftActionsWrapper>
          <CardTitle>{cardTxt}</CardTitle>
          <Style.Counter>
            <Style.Characters aria-label="button" onClick={() => removeOne(id)}>-</Style.Characters>
            <Style.NumberWrapper>{quantity}</Style.NumberWrapper>
            <Style.Characters aria-label="button" onClick={() => addOne(id)}>+</Style.Characters>
          </Style.Counter>
        </LeftActionsWrapper>

        <RightActionsWrapper>
          <IconButton style={{ borderRadius: "10px" }}>
            <Button aria-label="button" onClick={() => removeFromCart(id)}>
              <TrashCan />
            </Button>
          </IconButton>
          <NowPrice style={{ fontSize: "16px" }}>
            {(price * quantity).toLocaleString()}₽
          </NowPrice>
        </RightActionsWrapper>
      </Style.UserActionContent>
    </CardContent>
  );
};

export default ModalItem;
