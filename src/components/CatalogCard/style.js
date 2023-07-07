import styled from "styled-components";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const CatalogCard = styled.div`
  ${flex.justFlex};
  ${adaptiveValue("gap", 16, 12)}
  flex-direction: column;
`;

const CatalogCardImg = styled.img`
  ${adaptiveValue("width", 288, 161)}
  ${adaptiveValue("height", 300, 161)}
  background-color: ${colors.lactic};
  ${flex.center};
  border: 1px solid ${colors.white};
`;

const CatalogCardTxt = styled.p`
  max-width: 288px;
  width: 100%;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 16, 14)}
  ${adaptiveValue("line-height", 26, 24)}
  font-family: ${fonts.sfReg};
`;

export { CatalogCard, CatalogCardImg, CatalogCardTxt };
