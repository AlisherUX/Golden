import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const ProductImagesContent = styled.div`
  ${flex.justFlex}
  flex-direction: column;
  gap: 20px;
`;

const ProductInfoContent = styled.div`
  ${flex.justFlex}
  flex-direction: column;
`;

const InfoTitle = styled.p`
  color: ${colors.dark};
  font-size: 24px;
  font-family: ${fonts.sfSB};
  line-height: 30px;
  margin-top: 16px;
`;

const BreadCrumbWrapper = styled.div`
  ${adaptiveValue("margin-bottom", 40, 24)}
  margin-top: 20px;
`;

const RaitingContent = styled.div`
  ${flex.alignCenter}
  gap: 12px;
  color: ${colors.gray};
  font-size: 14px;
  font-family: ${fonts.sfReg};
  line-height: 21px;
  letter-spacing: 0.7px;
`;

const Facilities = styled.div`
  ${flex.justFlex}
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const FacilitiesTitle = styled.p`
  color: ${colors.dark};
  font-size: 14px;
  font-family: ${fonts.sfSB};
  line-height: 24px;
`;

const UserUnity = styled.div`
  ${flex.alignCenter}
  gap: 30px;
`;

const MainButton = styled.button`
  background-color: ${colors.primaryColor};
  ${adaptiveValue("padding-inline", 118, 91)};
  padding-block: 16px;
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
  gap: 17px;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const LikeButton = styled.button`
  width: 116px;
  height: 24px;
  ${flex.alignCenter}
  gap: 8px;
  border: none;
  background: transparent;
  color: ${colors.gray};
  font-size: 14px;
  font-family: ${fonts.sfReg};
  line-height: 24px;
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
};
