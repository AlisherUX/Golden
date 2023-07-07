import styled from "styled-components";
import { flex } from "utils/flex";
import { colors, fonts } from "utils/variable";

const CardContent = styled.div`
  width: 100%;
  ${flex.justFlex}
  gap: 12px;
  border: 1px solid ${colors.gray};
`;

const ProductImg = styled.div`
  border: 1px solid ${colors.white};
  background-color: ${colors.whiteYellow};

  & > img {
    width: 136px;
    height: 120px;
    object-fit: contain;
  }
`;

const UserActionContent = styled.div`
  width: 100%;
  ${flex.justFlex}
`;

const LeftActionsWrapper = styled.div`
  width: 100%;
  ${flex.flexBetween}
  flex-direction: column;
`;

const RightActionsWrapper = styled.div`
  width: 100%;
  ${flex.flexBetween}
  flex-direction: column;
  align-items: flex-end;
`;

const CardTitle = styled.p`
  color: ${colors.dark};
  font-size: 16px;
  font-family: ${fonts.sfReg};
  line-height: 26px;
`;

const Button = styled.button`
  width: 100%;
  ${flex.justFlex}
  gap: 10px;
  color: ${colors.primaryColor};
  font-size: 16px;
  font-family: ${fonts.sfM};
  line-height: 26px;
  background-color: transparent;
  border: none;
`;

export {
  ProductImg,
  UserActionContent,
  CardContent,
  LeftActionsWrapper,
  RightActionsWrapper,
  CardTitle,
  Button
};
