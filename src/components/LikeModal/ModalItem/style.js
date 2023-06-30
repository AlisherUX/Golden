import styled from "styled-components";
import { colors, fonts } from "utils/variable";

const CardContent = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const ProductImg = styled.div`
  width: 136px;
  height: 120px;
  border: 1px solid ${colors.white};
  background: #000;

  & > img {
    width: 136px;
    height: 120px;
    object-fit: contain;
  }
`;

const UserActionContent = styled.div`
  width: 100%;
  background: #000;
  display: flex;
`;

const LeftActionsWrapper = styled.div`
  width: 100%;
  background: red;
`;

const RightActionsWrapper = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const CardTitle = styled.p`
  color: ${colors.dark};
  font-size: 16px;
  font-family: ${fonts.sfReg};
  line-height: 26px;
`;

const DeleteButton = styled.button`
  width: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.primaryColor};
  font-size: 16px;
  font-family: ${fonts.sfM};
  line-height: 26px;
  background-color: transparent;
  border: none;
  cursor: not-allowed;
`;

export {
  ProductImg,
  UserActionContent,
  CardContent,
  LeftActionsWrapper,
  RightActionsWrapper,
  CardTitle,
  DeleteButton
};
