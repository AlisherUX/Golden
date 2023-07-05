import React from "react";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice, oldPrice } = product;

  return (
    <Style.CardContent>
      <Style.ProductImg>
        <img src={img} alt="" />
      </Style.ProductImg>
      <Style.UserActionContent>
        <Style.LeftActionsWrapper>
          <Style.CardTitle>{cardTxt}</Style.CardTitle>
          <Raiting />
          <Prices>
            <NowPrice style={{ fontSize: "16px" }}>{nowPrice}</NowPrice>
            <OldPrice style={{ fontSize: "14px" }}>{oldPrice}</OldPrice>
          </Prices>
        </Style.LeftActionsWrapper>

        <Style.RightActionsWrapper>
          <Style.DeleteButton>
            <TrashCan />В корзину
          </Style.DeleteButton>
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
