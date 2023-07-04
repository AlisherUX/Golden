import React, { useContext } from "react";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice } from "components/Banner/style";
import MainContext from "reducer/CartContext";

const ModalItem = ({ product }) => {
  const { img, cardTxt, nowPrice, id } = product;
  const {removeFromLike} = useContext(MainContext)

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
          <Style.DeleteButton onClick={() => removeFromLike(id)}>
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
