import styled from "styled-components";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { adaptiveValue, colors, fonts } from "../../utils/variable";
import { flex } from "../../utils/flex";

const BreadCrumbLink = styled(Link)`
  color: ${colors.dark};
`;

const BreadCrumbTypography = styled(Typography)`
  color: ${colors.lightGray} !important;
`;

const BreadCrumbs = styled(Breadcrumbs)`
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

export {
  BreadCrumbs,
  BreadCrumbLink,
  BreadCrumbTypography,
  CatalogContent,
  CatalogCards
};
