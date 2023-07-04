import styled from "styled-components";
import { flex } from "../../utils/flex";
import { colors, fonts } from "../../utils/variable";
import { Link } from "react-router-dom";
// import { adaptiveValue } from "../../utils/variable";

const ProductCardContent = styled(Link)`
  max-width: 288px;
  width: 100%;
`;

const CardImgWrapper = styled.div`
  padding-block: 28px;
  padding-inline: 12px;
  background-color: #f9f9f9;
  position: relative;
`;

const CardImg = styled.img`
  max-width: 288px;
  width: 100%;
`;

const ProductCardInfoWrapper = styled.div`
  padding-inline: 12px;
  padding-block: 10px;
  ${flex.justFlex};
  flex-direction: column;
  gap: 10px;
  border-bottom: 2px solid ${colors.lactic};
  border-left: 2px solid ${colors.lactic};
  border-right: 2px solid ${colors.lactic};
`;

const MiniTxt = styled.p`
  font-family: ${fonts.sfReg};
  font-size: 16px;
  line-height: 26px;
  color: ${colors.gray};
  text-align: left;
`;

const StockStiker = styled.div`
  ${flex.justFlex};
  ${flex.alignCenter};
  gap: 8px;
  font-size: 14px;
  line-height: 24px;
  font-family: ${fonts.sfReg};
  color: ${colors.gray};
  position: absolute;
  top: 17px;
  left: 12px;
`;

const SaleStiker = styled.span`
  padding-inline: 10px;
  padding-block: 8px;
  background-color: ${colors.light};
  ${flex.center};
  color: ${colors.dark};
  font-size: 12px;
  line-height: 14px;
  font-family: ${fonts.sfM};
  position: absolute;
  top: 17px;
  right: 12px;
`;

const PresentWrapper = styled.div`
  ${flex.justFlex};
  gap: 10px;
  background-color: ${colors.light};
  padding-inline: 8px;
  padding-block: 6px;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  position: absolute;
  top: 49px;
  left: 12px;
`;

const ButtonsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export {
  ProductCardContent,
  CardImgWrapper,
  ProductCardInfoWrapper,
  CardImg,
  MiniTxt,
  StockStiker,
  SaleStiker,
  PresentWrapper,
  ButtonsContent
};
