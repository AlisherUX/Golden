import styled from "styled-components";
import { flex } from "utils/flex";
import { colors, fonts } from "utils/variable";

const CardContent = styled.div`
  width: 100%;
  ${flex.justFlex}
  gap: 12px;
  border: 1px solid ${colors.gray};
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

const Counter = styled.div`
  width: 108px;
  ${flex.spaceBetween}
`;

const Characters = styled.button`
  width: 16px;
  height: 16px;
  color: ${colors.gray};
  ${flex.center}
  background: transparent;
  border: none;
  font-size: 23px;

  &:disabled{
    color: ${colors.lightGray};
  }
`;

const NumberWrapper = styled.div`
  padding-inline: 22px;
  padding-block: 5px;
  ${flex.center}
  border: 1px solid ${colors.white};
  color: #000;
`;

export {
  UserActionContent,
  CardContent,
  LeftActionsWrapper,
  NumberWrapper,
  Counter,
  Characters
};
