import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import { Button } from "@mui/material";
import { BlackCross } from "assets/images";
import ModalItem from "./ModalItem";
import {
  EmptyText,
  ChoosedProductsWrapper,
  ModalInnerWrapper,
  TopContentWrapper,
  TopContentTitle,
} from "components/LikeModal/style";
import MainContext from "context/CartContext";

export default function CartModal({ cartModal, handleModal, data }) {
  const { cartItems } = useContext(MainContext);

  const total = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.nowPrice * currentValue.quantity,
    0
  );

  return (
    <div>
      <Modal
        open={cartModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalInnerWrapper>
          <TopContentWrapper>
            <TopContentTitle variant="p">Корзина</TopContentTitle>
            <Button style={{ minWidth: "30px" }} onClick={handleModal} aria-label="button">
              <BlackCross />
            </Button>
          </TopContentWrapper>

          {data.length ? (
            <ChoosedProductsWrapper>
              {data.map((el) => (
                <ModalItem key={el.id} product={el} />
              ))}

              <Style.MainPriceContent>
                <Style.MainPriceWrapper>
                  <Style.PriceBox>
                    <Style.TotalText>Итого:</Style.TotalText>
                    <Style.Price>{total}₽</Style.Price>
                  </Style.PriceBox>
                  <Style.OrderButton aria-label="button">Оформить заказ</Style.OrderButton>
                </Style.MainPriceWrapper>

                <Style.ContinueButton aria-label="button">Продолжить покупки</Style.ContinueButton>
              </Style.MainPriceContent>
            </ChoosedProductsWrapper>
          ) : (
            <EmptyText>Your cart modal is empty</EmptyText>
          )}
        </ModalInnerWrapper>
      </Modal>
    </div>
  );
}
