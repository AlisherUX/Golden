import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const ProductWrapper = styled.div`
  width: 100%;
  ${flex.justFlex}
  ${adaptiveValue("margin-bottom", 40, 20)};
  ${adaptiveValue("gap", 30, 15)};

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const ProductImagesContent = styled.div`
  ${flex.justFlex}

  & > img {
    ${adaptiveValue("max-width", 605, 295)};
  }
`;

const ProductInfoContent = styled.div`
  ${flex.justFlex}
  flex-direction: column;
`;

const InfoTitle = styled.p`
  color: ${colors.dark};
  ${adaptiveValue("font-size", 24, 18)};
  ${adaptiveValue("line-height", 30, 20)};
  ${adaptiveValue("margin-top", 16, 8)};
  font-family: ${fonts.sfSB};
`;

const BreadCrumbWrapper = styled.div`
  ${adaptiveValue("margin-bottom", 40, 24)}
  ${adaptiveValue("margin-top", 20, 10)};
`;

const RaitingContent = styled.div`
  ${adaptiveValue("font-size", 14, 12)};
  ${adaptiveValue("line-height", 21, 14)};
  ${adaptiveValue("gap", 12, 6)};
  ${flex.alignCenter}
  color: ${colors.gray};
  font-family: ${fonts.sfReg};
  letter-spacing: 0.7px;
`;

const Facilities = styled.div`
  ${flex.justFlex}
  flex-direction: column;
  ${adaptiveValue("gap", 8, 5)};
  ${adaptiveValue("margin-top", 12, 6)};
`;

const FacilitiesTitle = styled.p`
  color: ${colors.dark};
  ${adaptiveValue("font-size", 14, 12)};
  ${adaptiveValue("line-height", 24, 16)};
  font-family: ${fonts.sfSB};
`;

const UserUnity = styled.div`
  ${flex.alignCenter}
  ${adaptiveValue("gap", 30, 15)};
`;

const MainButton = styled.button`
  background-color: ${colors.primaryColor};
  ${adaptiveValue("padding-block", 16, 8)};
  ${adaptiveValue("padding-inline", 118, 91)};
  max-width: max-content;
  width: 100%;
  display: block;

  &:hover {
    background: transparent;
    color: ${colors.primaryColor};
  }
  &:active {
    background: transparent;
    color: ${colors.primaryColor};
  }
`;

const UserUnityWrapper = styled.div`
  ${flex.justFlex}
  ${adaptiveValue("gap", 17, 8)};
  ${adaptiveValue("margin-top", 24, 12)};
  ${adaptiveValue("margin-bottom", 32, 16)};
  flex-direction: column;
`;

const LikeButton = styled.button`
  ${adaptiveValue("gap", 8, 5)};
  ${adaptiveValue("font-size", 14, 12)};
  ${adaptiveValue("line-height", 24, 12)};
  ${flex.alignCenter}
  border: none;
  background: transparent;
  color: ${colors.gray};
  font-family: ${fonts.sfReg};
`;

export {
  ProductImagesContent,
  ProductInfoContent,
  MainButton,
  BreadCrumbWrapper,
  RaitingContent,
  InfoTitle,
  Facilities,
  FacilitiesTitle,
  UserUnity,
  UserUnityWrapper,
  LikeButton,
  ProductWrapper,
};
