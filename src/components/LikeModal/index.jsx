import React, { useContext } from "react";
import * as Style from "./style";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import MainContext from "context/CartContext";
import ModalItem from "./ModalItem";
import { BlackCross, } from "assets/images";

export default function LikeModal({ likeModal, handleLikeModal, data }) {
  const { cartItems } = useContext(MainContext);

  return (
    <div>
      <Modal
        open={likeModal}
        onClose={handleLikeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Style.ModalInnerWrapper>
          <Style.TopContentWrapper>
            <Style.TopContentTitle variant="p">Избранное</Style.TopContentTitle>
            <Button style={{ minWidth: "30px" }} onClick={handleLikeModal}>
              <BlackCross />
            </Button>
          </Style.TopContentWrapper>

          {data.length ? (
            <Style.ChoosedProductsWrapper>
              {data.map((el) => (
                <ModalItem key={el.id} product={el} select={cartItems.find((item) => item.id === el.id)}/>
              ))}
            </Style.ChoosedProductsWrapper>
          ) : (
            <Style.EmptyText>Your like modal is empty</Style.EmptyText>
          )}
        </Style.ModalInnerWrapper>
      </Modal>
    </div>
  );
}
