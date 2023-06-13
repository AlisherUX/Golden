import styled from "styled-components";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { adaptiveValue, colors, fonts } from "../../utils/variable";
import { flex } from "../../utils/flex";

const Catalog = styled.div`
  width: 100%;
`;

const CatalogLink = styled(Link)`
  color: ${colors.dark};
`;

const CatalogTypography = styled(Typography)`
  color: ${colors.lightGray} !important;
`;

const CtalogBreadCrumbs = styled(Breadcrumbs)`
  margin-top: 20px !important;
  margin-bottom: 40px !important;
`;

const CatalogContent = styled.div`
  width: 100%;
`;

const CatalogCards = styled.div`
  width: 100%;
  ${adaptiveValue("margin-top", 64, 24)}
  ${adaptiveValue("margin-bottom", 100, 40)}
  ${adaptiveValue("gap", 30, 20)}
  ${flex.justFlex};
  justify-content: center;
  flex-wrap: wrap;
`;

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
  border: 1px solid #eaeaea;
`;

const CatalogCardTxt = styled.p`
  max-width: 288px;
  width: 100%;
  color: ${colors.dark};
  ${adaptiveValue("font-size", 16, 14)}
  ${adaptiveValue("line-height", 26, 24)}
  font-family: ${fonts.sfReg};
`;

export {
  Catalog,
  CtalogBreadCrumbs,
  CatalogLink,
  CatalogTypography,
  CatalogContent,
  CatalogCards,
  CatalogCard,
  CatalogCardImg,
  CatalogCardTxt,
};
