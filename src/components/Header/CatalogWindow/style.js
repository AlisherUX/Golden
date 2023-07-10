import { Link } from "react-router-dom";
import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const CatalogDormer = styled.div`
  position: absolute;
  top: 80%;
  ${adaptiveValue("left", 400, 0)};
  ${adaptiveValue("max-width", 790, 395)};
  ${adaptiveValue("height", 444, 222)};
  ${adaptiveValue("padding", 32, 10)};
  ${adaptiveValue("gap", 32, 16)};
  width: 100%;
  z-index: 100;
  background-color: ${colors.light};
  box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.1);
  ${flex.flexBetween}
  display: ${(active) => (active.active ? "flex" : "none")};

  @media (max-width: 660px) {
    display: none;
  }
`;

const ImgContent = styled.div`
  ${flex.center}
`;

const CatalogImg = styled.img`
  ${adaptiveValue("max-width", 351, 175)};
  width: 100%;
`;

const CatalogUl = styled.ul`
  ${flex.justFlex}
  flex-direction: column;
`;

const CatalogLi = styled(Link)`
  color: ${colors.dark};
  font-family: ${fonts.sfReg};
  background: ${colors.light};
  border: none;
  ${adaptiveValue("padding-block", 8, 2)};
  ${adaptiveValue("padding-right", 10, 5)};
  ${adaptiveValue("font-size", 16, 10)};
  ${adaptiveValue("line-height", 26, 14)};

  &:hover {
    background: #cee7ff;
    border-right: 2px solid ${colors.primaryColor};
  }
`;

const CatalogTitle = styled.p`
  ${adaptiveValue("max-width", 256, 128)};
  ${adaptiveValue("font-size", 16, 12)};
  ${adaptiveValue("line-height", 26, 18)};
  width: 100%;
  color: ${colors.dark};
  font-family: ${fonts.sfM};
  border-bottom: 1px solid ${colors.primaryColor};
`;

const BottomButton = styled.button`
  ${adaptiveValue("font-size", 16, 10)};
  ${adaptiveValue("line-height", 26, 14)};
  ${adaptiveValue("margin-top", 8, 2)};
  ${adaptiveValue("padding-block", 7, 5)};
  ${adaptiveValue("max-width", 164, 82)};
  font-family: ${fonts.sfM};

  width: 100%;
  background-color: ${colors.primaryColor};

  &:hover {
    background-color: ${colors.light};
    color: ${colors.primaryColor};
  }
`;

export {
  CatalogDormer,
  ImgContent,
  CatalogUl,
  CatalogLi,
  CatalogTitle,
  CatalogImg,
  BottomButton,
};
