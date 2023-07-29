import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const CategoryWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-top", 100, 40)};
  ${adaptiveValue("padding-bottom", 50, 20)};
  ${flex.alignCenter}
  flex-direction: column;
  background: ${colors.light};
`;

const CategoryCards = styled.div`
  width: 100%;
  ${flex.justFlex};
  justify-content: center;
  flex-wrap: wrap;
  ${adaptiveValue("gap", 40, 20)};
  ${adaptiveValue("margin-bottom", 50, 24)};
  ${adaptiveValue("margin-top", 64, 24)};
`;

const CategoryCard = styled.div`
  ${adaptiveValue("max-width", 600, 200)};
  ${adaptiveValue("padding", 40, 10)};
  width: 100%;
  background-color: ${colors.lactic};
  border:  1px solid ${colors.white};
  ${flex.justFlex}

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

const CardImg = styled.img`
  ${adaptiveValue("max-width", 340, 40)};
  width: 100%;
  height: 100%;

  @media (max-width: 960px) {
    ${adaptiveValue("max-width", 340, 240)};
  }
`;

const CardItemsWrapper = styled.div`
  width: 100%;
  ${flex.justFlex};
  flex-direction: column;
  gap: 16px;
`;

const CardEntry = styled.p`
  ${adaptiveValue("font-size", 22, 14)};
  ${adaptiveValue("line-height", 34, 24)};
  font-family: ${fonts.sfM};
  color: ${colors.dark};
  margin-top: auto;
`;

const SkeletonCard = styled.div`
  ${adaptiveValue("max-width", 600, 200)};
  ${adaptiveValue("height", 470, 197)};
  width: 100%;
  background-color: #ebebeb;
`;

const CardBtn = styled.button`
  font-family: ${fonts.sfM};
  color: ${colors.dark};
  background: transparent;
  ${adaptiveValue("line-height", 26, 12)};
  ${adaptiveValue("font-size", 16, 12)};
  ${adaptiveValue("padding-inline", 78, 28)};
  ${adaptiveValue("padding-block", 12, 5)};
  border: 1px solid ${colors.gray};
  border-radius: 2px;

  &:hover {
    background: ${colors.gray};
    color: ${colors.lactic};
  }
  @media (max-width: 960px) {
    ${adaptiveValue("line-height", 26, 15)};
    ${adaptiveValue("font-size", 16, 12)};
    ${adaptiveValue("padding-inline", 78, 28)};
    ${adaptiveValue("padding-block", 12, 8)};
  }
`;

export {
  CategoryWrapper,
  CategoryCards,
  CategoryCard,
  CardImg,
  CardItemsWrapper,
  CardEntry,
  CardBtn,
  SkeletonCard,
};
