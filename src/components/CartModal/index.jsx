import * as React from "react";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import { Button } from "@mui/material";
import { BlackCross } from "assets/images";
import ModalItem from "./ModalItem";
import { EmptyText } from "components/LikeModal/style";

export default function CartModal({ cartModal, handleModal, data }) {
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
