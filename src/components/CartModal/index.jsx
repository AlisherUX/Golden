import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import { Button } from "@mui/material";
import { BlackCross } from "assets/images";
import ModalItem from "./ModalItem";
import { EmptyText } from "components/LikeModal/style";
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
        <Style.ModalInnerWrapper>
          <Style.TopContentWrapper>
            <Style.TopContentTitle variant="p">Корзина</Style.TopContentTitle>
            <Button style={{ minWidth: "30px" }} onClick={handleModal}>
              <BlackCross />
            </Button>
          </Style.TopContentWrapper>
          <Style.ChoosedProductsWrapper>
            {data.length ? (
              <Style.ChoosedProductsWrapper>
                {data.map((el) => (
                  <ModalItem key={el.id} product={el} />
                ))}

                <Style.MainPriceContent>
                  <Style.MainPriceWrapper>
                    <Style.PriceBox>
                      <Style.TotalText>Итого:</Style.TotalText>
                      <Style.Price>{total.toLocaleString()}₽</Style.Price>
                    </Style.PriceBox>
                    <Style.OrderButton>Оформить заказ</Style.OrderButton>
                  </Style.MainPriceWrapper>

                  <Style.ContinueButton>
                    Продолжить покупки
                  </Style.ContinueButton>
                </Style.MainPriceContent>

              </Style.ChoosedProductsWrapper>
            ) : (
              <EmptyText>Your card modal is empty</EmptyText>
            )}
          </Style.ChoosedProductsWrapper>
        </Style.ModalInnerWrapper>
      </Modal>
    </div>
  );
}
