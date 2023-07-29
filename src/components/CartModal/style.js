import styled from "styled-components";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const MainPriceContent = styled.div`
  ${flex.flexBetween}
  align-items: flex-end;
  margin-top: 15px;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const MainPriceWrapper = styled.div`
  max-width: 249px;
  width: 100%;
  ${flex.spaceBetween}
  align-items: start;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 420px) {
    align-items: center;
    max-width: 100%;
  }
`;

const ContinueButton = styled.button`
  ${adaptiveValue("padding-inline", 24, 14)};
  ${adaptiveValue("padding-block", 10, 8)};
  ${adaptiveValue("font-size", 16, 14)};
  ${adaptiveValue("line-height", 26, 14)};
  background: transparent;
  color: ${colors.primaryColor};
  color: ${colors.dark};
  font-family: ${fonts.sfReg};

  &:hover {
    color: ${colors.light};
    background-color: ${colors.primaryColor};
  }
  @media (max-width: 420px) {
    padding-inline: 26%;
    padding-block: 5%;
  }
`;

const OrderButton = styled.button`
  background-color: ${colors.primaryColor};
  ${adaptiveValue("max-width", 249, 149)};
  ${adaptiveValue("font-size", 16, 14)};
  ${adaptiveValue("line-height", 26, 14)};
  width: 100%;
  padding-block: 10px;
  color: ${colors.light};
  font-family: ${fonts.sfM};

  &:hover {
    background-color: ${colors.light};
    color: ${colors.primaryColor};
  }
  @media (max-width: 420px) {
    max-width: 100%;
    padding-block: 16px;
  }
`;

const PriceBox = styled.div`
  ${flex.justFlex}
  ${flex.alignCenter}
  ${adaptiveValue("gap", 8, 6)};

  @media (max-width: 420px) {
    width: 100%;
    ${flex.flexBetween}
  }
`;

const TotalText = styled.p`
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  ${adaptiveValue("font-size", 16, 14)};
  ${adaptiveValue("line-height", 26, 14)};
`;

const Price = styled.p`
  color: ${colors.dark};
  font-family: ${fonts.sfM};
  ${adaptiveValue("font-size", 20, 16)};
  ${adaptiveValue("line-height", 30, 20)};
`;

export {
  ContinueButton,
  MainPriceContent,
  MainPriceWrapper,
  OrderButton,
  PriceBox,
  TotalText,
  Price,
};
