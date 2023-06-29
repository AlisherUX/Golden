import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const ProductImagesContent = styled.div`
  ${flex.justFlex}
  flex-direction: column;
  gap: 20px;
`;

// const MainImg = styled.img`
//   max-width: 605px;
//   width: 100%;
// `;

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
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${colors.gray};
  font-size: 14px;
  font-family: ${fonts.sfReg};
  line-height: 21px;
  letter-spacing: 0.7px;
`;

const Facilities = styled.div`
  display: flex;
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
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button`
  background-color: ${colors.primaryColor};
  border: 1px solid ${colors.primaryColor};
  ${adaptiveValue("padding-inline", 118, 91)};
  padding-block: 16px;
  max-width: max-content;
  width: 100%;
  color: ${colors.light};
  cursor: pointer;
  transition: 0.3s;
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
  display: flex;
  gap: 17px;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const LikeButton = styled.button`
  background: transparent;
  width: 116px;
  display: flex;
  align-items: center;
  height: 24px;
  gap: 8px;
  border: none;
  color: ${colors.gray};
  font-size: 14px;
  font-family: ${fonts.sfReg};
  line-height: 24px;
  cursor: pointer;
`;

export {
  ProductImagesContent,
  ProductInfoContent,
  // MainImg,
  BreadCrumbWrapper,
  RaitingContent,
  InfoTitle,
  Facilities,
  FacilitiesTitle,
  UserUnity,
  UserUnityWrapper,
  Button,
  LikeButton
};
