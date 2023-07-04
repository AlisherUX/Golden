import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { adaptiveValue, colors, fonts } from "utils/variable";

const ModalInnerWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 700px;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 343)};
  width: 100%;
  padding-bottom: 20px;
  background-color: #fff;
  box-shadow: 24px;
  overflow-y: auto;
`;

const TopContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 40px;
  padding-bottom: 23px;
  padding-top: 16px;
  position: sticky;
  top: 0px;
  background-color: #fff;
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

const EmptyText = styled.p`
  font-size: 18px;
  font-family: ${fonts.sfM};
  color: ${colors.gray};
  margin-top: 32%;
  text-align: center;
`;

export {
  EmptyText,
  ModalInnerWrapper,
  TopContentWrapper,
  TopContentTitle,
  ChoosedProductsWrapper
};
