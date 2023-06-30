import React from "react";
import * as Style from "./style";
import { Handle9, TrashCan } from "assets/images";
import { NowPrice } from "components/Banner/style";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice } = product;

  return (
    <Style.CardContent>
      <Style.ProductImg>
        <img src={img} alt="" />
      </Style.ProductImg>
      <Style.UserActionContent>
        <Style.LeftActionsWrapper>
          <Style.CardTitle>{cardTxt}</Style.CardTitle>
        </Style.LeftActionsWrapper>

        <Style.RightActionsWrapper>
          <Style.DeleteButton>
            <TrashCan />
            Удалить
          </Style.DeleteButton>
          <NowPrice style={{fontSize: "16px"}}>{nowPrice}</NowPrice>
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
