import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors } from "../../utils/variable";

const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: inset 0px -1px 0px #c4cdd5;
`;

const HeaderNavWrapper = styled.div`
  width: 100%;
  padding-block: 20px;
  ${flex.spaceBetween};
  ${adaptiveValue("padding-block", 20, 10)}
`;

const HeaderNav = styled.div`
  ${flex.spaceBetween};
  gap: 32px;
  ${adaptiveValue("gap", 32, 10)}
`;

const HeaderLink = styled.a`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 20, 15)}
`;

const HeaderBtn = styled.button`
  background-color: Transparent;
  height: 20px;
  border: none;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  ${flex.center};
  gap: 8px;
  cursor: pointer;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 18, 13)};
  ${adaptiveValue("height", 20, 15)};
  ${adaptiveValue("gap", 8, 5)}
`;

const UserAction = styled.div`
  max-width: 280px;
  width: 100%;
  ${flex.flexBetween};
  ${adaptiveValue("max-width", 280, 220)}
`;

const CallContent = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.gray};
  ${flex.alignCenter};
  gap: 8px;
  ${adaptiveValue("gap", 8, 5)}
  ${adaptiveValue("font-size", 18, 14)}
`;

const HeaderItem = styled.a`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export {
  HeaderWrapper,
  HeaderNavWrapper,
  HeaderNav,
  HeaderLink,
  HeaderItem,
  HeaderBtn,
  UserAction,
  CallContent
};
