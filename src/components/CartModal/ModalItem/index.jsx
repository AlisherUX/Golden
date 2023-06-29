import React from "react";
import * as Style from "./style";
import { Handle9, TrashCan } from "assets/images";

const ModalItem = ({product}) => {
  const {img, cardTxt, nowPrice} = product
  
    return (
    <Style.CardContent>
      <Style.ProductImg>
        <img src={img} alt="" />
      </Style.ProductImg>
      <Style.UserActionContent>
        <Style.LeftActionsWrapper>
          <Style.CardTitle>Дверной Замок Golden Soft для офиса</Style.CardTitle>
        </Style.LeftActionsWrapper>

        <Style.RightActionsWrapper>
          <TrashCan />
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
