import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { adaptiveValue, colors, fonts } from "utils/variable";

const ModalInnerWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 343)};
  width: 100%;
  background-color: #fff;
  box-shadow: 24px;
  padding-top: 16px;
`;

const TopContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 40px;
  padding-bottom: 23px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export {
  ModalInnerWrapper,
  TopContentWrapper,
  TopContentTitle,
  ChoosedProductsWrapper
};
