import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { Link } from "react-router-dom";

const ProductCardContent = styled.div`
  ${adaptiveValue("max-width", 288, 240)};
  width: 100%;
  
  @media (max-width: 660px) {
    margin: 0 auto;
  }
`;

const CardLink = styled(Link)`
  ${flex.justFlex}
`;

const CardImgWrapper = styled.div`
  background-color: #f9f9f9;
  position: relative;
`;

const CardImg = styled.img`
  ${adaptiveValue("max-width", 288, 240)};
  width: 100%;
`;

const ProductCardInfoWrapper = styled.div`
  ${adaptiveValue("padding-inline", 12, 8)};
  ${adaptiveValue("padding-block", 10, 6)};
  ${adaptiveValue("gap", 10, 8)};
  ${flex.justFlex};
  flex-direction: column;
  border-bottom: 2px solid ${colors.lactic};
  border-left: 2px solid ${colors.lactic};
  border-right: 2px solid ${colors.lactic};
`;

const MiniTxt = styled.p`
  ${adaptiveValue("font-size", 16, 10)};
  ${adaptiveValue("line-height", 26, 18)};
  font-family: ${fonts.sfReg};
  text-align: left;
  color: ${colors.gray};
  `;

const StockStiker = styled.div`
  ${flex.justFlex};
  ${flex.alignCenter};
  ${adaptiveValue("padding-inline-end", 8, 6)};
  ${adaptiveValue("gap", 8, 6)};
  ${adaptiveValue("font-size", 14, 10)};
  ${adaptiveValue("line-height", 24, 18)};
  font-family: ${fonts.sfReg};
  color: ${colors.gray};
  background-color: ${colors.light};
  position: absolute;
  ${adaptiveValue("top", 12, 10)};
  ${adaptiveValue("left", 12, 10)};
  `;

const SaleStiker = styled.span`
  ${adaptiveValue("padding-inline", 10, 8)};
  ${adaptiveValue("padding-block", 8, 6)};
  background-color: ${colors.light};
  ${flex.center};
  color: ${colors.dark};
  ${adaptiveValue("font-size", 12, 10)};
  ${adaptiveValue("line-height", 14, 12)};
  font-family: ${fonts.sfM};
  position: absolute;
  ${adaptiveValue("top", 12, 10)};
  ${adaptiveValue("right", 12, 10)};
  `;

const PresentWrapper = styled.div`
  ${flex.justFlex};
  ${adaptiveValue("padding-inline", 8, 6)};
  ${adaptiveValue("padding-block", 6, 4)};
  ${adaptiveValue("gap", 10, 8)};
  ${adaptiveValue("font-size", 12, 10)};
  ${adaptiveValue("line-height", 14, 12)};
  background-color: ${colors.light};
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  position: absolute;
  ${adaptiveValue("top", 45, 35)};
  ${adaptiveValue("left", 12, 10)};
`;

const ButtonsContent = styled.div`
  width: 100%;
  ${flex.flexBetween}
`;

export {
  ProductCardContent,
  CardLink,
  ProductCardInfoWrapper,
  CardImg,
  MiniTxt,
  StockStiker,
  SaleStiker,
  PresentWrapper,
  ButtonsContent,
  CardImgWrapper,
};
