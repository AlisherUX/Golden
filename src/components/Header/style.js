import styled from "styled-components";
import { Link } from "react-router-dom";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors, fonts } from "../../utils/variable";

const HeaderWrapper = styled.header`
  width: 100%;
`;

const HeaderNavContent = styled.div`
  width: 100%;
  ${flex.spaceBetween};
  padding-block: 25px;

  @media (max-width: 375px) {
    padding-block: 19px;
  }
`;

const HeaderNavWrapper = styled.div`
  width: 100%;
  box-shadow: inset 0px -1px 0px #c4cdd5;
`;

const HeaderLogo = styled(Link)`
  cursor: pointer;
  width: 51px;
  height: 42px;

  @media (max-width: 780px) {
    width: 45px;
    height: 35px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderNav = styled.div`
  ${flex.spaceBetween};
  ${adaptiveValue("gap", 32, 10)};

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderLink = styled.a`
  font-family: ${fonts.sfL};
  line-height: 24px;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 20, 15)};
`;

const HeaderBtn = styled.button`
  background-color: Transparent;
  border: none;
  font-family: ${fonts.sfL};
  line-height: 24px;
  ${flex.center};
  cursor: pointer;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 18, 13)};
  ${adaptiveValue("height", 20, 15)};
  ${adaptiveValue("gap", 8, 5)}
`;

const UserAction = styled.div`
  width: 100%;
  ${flex.flexBetween};
  ${adaptiveValue("max-width", 303, 220)}

  @media (max-width: 700px) {
    max-width: 80px;
  }
`;

const CallContent = styled.a`
  font-family: ${fonts.sfReg};
  line-height: 21px;
  color: ${colors.gray};
  ${flex.alignCenter};
  ${adaptiveValue("gap", 8, 5)}
  ${adaptiveValue("font-size", 18, 14)}

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderItem = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  width: 24px;
  height: 17px;
  ${flex.flexBetween};
  flex-direction: column;
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const BurgerMenuItem = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${colors.dark};
  border-radius: 2px;
`;

export {
  HeaderWrapper,
  HeaderNavWrapper,
  HeaderNavContent,
  HeaderNav,
  HeaderLogo,
  HeaderLink,
  HeaderItem,
  HeaderBtn,
  UserAction,
  CallContent,
  BurgerMenu,
  BurgerMenuItem,
};
