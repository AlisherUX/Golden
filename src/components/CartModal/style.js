import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const ModalInnerWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 700px;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 343)};
  width: 100%;
  padding-bottom: 20px;
  background-color: ${colors.light};
  box-shadow: 24px;
  overflow-y: auto;
  `;

const TopContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  ${flex.spaceBetween}
  padding-inline: 40px;
  padding-bottom: 23px;
  padding-top: 16px;
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: ${colors.light};
  `;

const TopContentTitle = styled(Typography)`
  color: ${colors.dark};
  font-size: 20px;
  font-family: ${fonts.sfM};
  line-height: 34px;
  `;

const ChoosedProductsWrapper = styled.ul`
  width: 100%;
  padding-top: 24px;
  padding-inline: 40px;
  ${flex.justFlex}
  flex-direction: column;
  gap: 20px;
`;

const MainPriceContent = styled.div`
  ${flex.alignCenter}
  ${flex.flexBetween}
`;

const MainPriceWrapper = styled.div`
  max-width: 249px;
  width: 100%;
  ${flex.spaceBetween}
  flex-direction: column;
  gap: 8px;
`;

const ContinueButton = styled.button`
  padding-inline: 24px;
  padding-block: 10px;
  max-height: 46px;
  background: transparent;
  color: ${colors.primaryColor};
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  font-size: 16px;
  line-height: 26px;

  &:hover {
    color: ${colors.light};
    background-color: ${colors.primaryColor};
  }
`;

const OrderButton = styled.button`
  background-color: ${colors.primaryColor};
  padding-inline: 56px;
  padding-block: 9px;
  color: ${colors.light};
  font-family: ${fonts.sfM};
  font-size: 16px;
  line-height: 26px;

  &:hover {
    background-color: ${colors.light};
    color: ${colors.primaryColor};
  }
`;

const PriceBox = styled.div`
  ${flex.justFlex}
  ${flex.alignCenter}
  gap: 8px;
`;

const TotalText = styled.p`
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  font-size: 16px;
  line-height: 26px;
`;

const Price = styled.p`
  color: ${colors.dark};
  font-family: ${fonts.sfM};
  font-size: 20px;
  line-height: 30px;
`;

export {
  ModalInnerWrapper,
  TopContentWrapper,
  TopContentTitle,
  ChoosedProductsWrapper,
  ContinueButton,
  MainPriceContent,
  MainPriceWrapper,
  OrderButton,
  PriceBox,
  TotalText,
  Price
};
