import styled from "styled-components";
import { adaptiveValue, colors } from "utils/variable";
import { flex } from "utils/flex";

const WindowWrapper = styled.div`
  position: fixed;
  top: 45px;
  left: 0;
  right: 0px;
  bottom: 0;
  z-index: -10;
  flex-direction: column;
  ${flex.flexBetween}
  padding: 24px 16px 40px;
  padding-top: 80px;
  background: ${colors.light};
  transform: ${({ open }) =>
    open === true ? "translateX(0%)" : "translateX(-100%)"};
  transition: 0.5s;
  display: none;
  
  @media (max-width: 700px) {
    display: flex;
  }
  @media (max-width: 488px) {
    ${adaptiveValue("top", 80, 61)};
  }
  `;

const BurgerNavWrapper = styled.nav`
  ${flex.justFlex};
  flex-direction: column;
`;

const BurgerNavBtn = styled.div`
  ${flex.flexBetween};
  ${flex.alignCenter};
  width: 100%;
  padding-block: 16px;
  color: ${colors.dark};
  border-bottom: 1px solid ${colors.white};

  &:active {
    background: ${colors.white};
  }
`;

const BurgerNavLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.gray};
  padding-block: 16px;
  border-bottom: 1px solid ${colors.white};

  &:active {
    background: ${colors.white};
  }
`;

const BurgerBottomContent = styled.div`
  ${flex.flexBetween}

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const BurgerCallContent = styled.a`
  ${flex.alignCenter}
  gap: 8px;
  color: ${colors.gray};
`;

const BurgerReCall = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.12em;
  text-decoration-line: underline;
  color: ${colors.primaryColor};
`;

export {
  WindowWrapper,
  BurgerNavWrapper,
  BurgerNavBtn,
  BurgerNavLink,
  BurgerCallContent,
  BurgerBottomContent,
  BurgerReCall,
};
