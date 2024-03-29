import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import * as Style from "./style";
import { TrashCan } from "assets/images";
import { NowPrice, OldPrice, Prices } from "components/Banner/style";
import Raiting from "components/Raiting";
import MainContext from "context/CartContext";

const ModalItem = ({ product, select }) => {
  const { img, cardTxt, nowPrice, oldPrice, id } = product;
  const { removeFromLike } = useContext(MainContext);
  const { addToCart, removeFromCart } = useContext(MainContext);

  const CartToggle = () => {
    return select ? removeFromCart(id) : addToCart(product);
  };

  return (
    <Style.CardContent>
        <Style.ProductImg to='/product'>
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
          <IconButton style={{ borderRadius: "10px" }}>
            <Style.Button aria-label="button" onClick={CartToggle}>
              {select ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon />}
            </Style.Button>
          </IconButton>

          <IconButton style={{ borderRadius: "10px" }}>
            <Style.Button aria-label="button" onClick={() => removeFromLike(id)}>
              <TrashCan />
            </Style.Button>
          </IconButton>
        </Style.RightActionsWrapper>
      </Style.UserActionContent>
    </Style.CardContent>
  );
};

export default ModalItem;
