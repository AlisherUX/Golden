import React, { useContext, useState } from "react";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice } from "components/Banner/style";
import MainContext from "reducer/CartContext";
import { Button } from "components/LikeModal/ModalItem/style";
import { IconButton } from "@mui/material";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice, id } = product;
  const { removeFromCart } = useContext(MainContext);
  const [count, setCount] = useState(1)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function decrement() {
    setCount((prev) => prev - 1)
  }

  return (
    <Style.CardContent>
      <Style.ProductImg>
        <img src={img} alt="" />
      </Style.ProductImg>
      <Style.UserActionContent>
        <Style.LeftActionsWrapper>
          <Style.CardTitle>{cardTxt}</Style.CardTitle>
          <Style.Counter>
            <Style.Characters onClick={() => decrement()} disabled={count == 1}>-</Style.Characters>
            <Style.NumberWrapper>{count}</Style.NumberWrapper>
            <Style.Characters onClick={() => increment()}>+</Style.Characters>
          </Style.Counter>
        </Style.LeftActionsWrapper>

        <Style.RightActionsWrapper>
          <IconButton style={{ borderRadius: "10px" }}>
            <Button onClick={() => removeFromCart(id)}>
              <TrashCan />
              Удалить
            </Button>
          </IconButton>
          <NowPrice style={{ fontSize: "16px" }}>{(nowPrice * count).toLocaleString()}</NowPrice>
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
