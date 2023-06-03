import styled from "styled-components";
import { colors } from "../../../utils/variable";
import { flex } from "../../../utils/flex";

const WindowWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: -10;
  flex-direction: column;
  ${flex.flexBetween}
  width: 100%;
  height: 80vh;
  padding: 24px 16px;
  background: ${colors.light};
  transform: ${({ open }) =>
    open === true ? "translateX(0%)" : "translateX(-100%)"};
  transition: 0.5s;
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const BurgerNavWrapper = styled.nav`
  ${flex.justFlex};
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const BurgerNavBtn = styled.button`
  ${flex.flexBetween};
  ${flex.alignCenter};
  background: transparent;
  border: none;
  width: 100%;
`;

const BurgerNavLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.gray};
  height: 58px;
`;

const BurgerNavLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${colors.white};
`;

export { WindowWrapper, BurgerNavWrapper, BurgerNavBtn, BurgerNavLink, BurgerNavLine };
