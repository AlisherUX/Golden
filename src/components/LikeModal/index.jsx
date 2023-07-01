import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import * as Style from "./style";
import { BlackCross, Handle10, Handle9, TrashCan } from "assets/images";
import ModalItem from "./ModalItem";

export default function LikeModal({ likeModal, handleLikeModal, data }) {
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
          <Style.ChoosedProductsWrapper>
            {data.map((el) => (
              <ModalItem key={el.id} product={el} />
            ))}
          </Style.ChoosedProductsWrapper>
        </Style.ModalInnerWrapper>
      </Modal>
    </div>
  );
}
