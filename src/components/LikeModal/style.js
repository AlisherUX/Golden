import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const ModalInnerWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 343)};
  ${adaptiveValue("height", 700, 550)};
  ${adaptiveValue("padding-bottom", 20, 10)};
  width: 100%;
  background-color: ${colors.light};
  box-shadow: 24px;
  overflow-y: auto;
`;

const TopContentWrapper = styled.div`
  ${adaptiveValue("padding-bottom", 23, 13)};
  ${adaptiveValue("padding-inline", 40, 20)};
  ${adaptiveValue("padding-top", 16, 8)};
  border-bottom: 1px solid ${colors.white};
  ${flex.spaceBetween}
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: ${colors.light};
  `;

const TopContentTitle = styled(Typography)`
  color: ${colors.dark};
  ${adaptiveValue("font-size", 20, 16)};
  ${adaptiveValue("line-height", 34, 17)};
  font-family: ${fonts.sfM};
  `;

const ChoosedProductsWrapper = styled.ul`
  ${adaptiveValue("padding-top", 24, 10)};
  ${adaptiveValue("padding-inline", 40, 10)};
  ${adaptiveValue("gap", 20, 10)};
  ${flex.justFlex}
  flex-direction: column;
  `;

const EmptyText = styled.p`
  ${adaptiveValue("font-size", 18, 15)};
  ${adaptiveValue("width", 217, 181)};
  font-family: ${fonts.sfM};
  color: ${colors.gray};
  margin: 0 auto;
  margin-top: 30%;
  margin-bottom: 30%;
`;

export {
  EmptyText,
  ModalInnerWrapper,
  TopContentWrapper,
  TopContentTitle,
  ChoosedProductsWrapper,
};
