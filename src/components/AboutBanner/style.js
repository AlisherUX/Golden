import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const AboutBannerWrapper = styled.div`
  width: 100%;
  ${flex.flexBetween}
  ${adaptiveValue("margin-bottom", 130, 25)};
  
  @media (max-width: 1150px) {
    flex-direction: column-reverse;
    ${adaptiveValue("margin-top", 70, 0)};
  }
  `;

const BannerVideoContent = styled.div`
  position: relative;
  ${flex.center}
  
  @media (max-width: 1150px) {
    ${adaptiveValue("margin-top", 70, 35)};
  }
`;

const Video = styled.img`
  ${adaptiveValue("max-width", 805, 300)};
  width: 100%;
`;

const BannerEntries = styled.div`
  ${flex.justFlex}
  justify-content: center;
  flex-direction: column;
  align-items: start;
`;

const BannerSubtitle = styled.p`
  color: ${colors.primaryColor};
  ${adaptiveValue("font-size", 18, 15)};
  ${adaptiveValue("line-height", 38, 19)};
  font-family: ${fonts.sfReg};
  letter-spacing: 1.62px;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.primaryColor};
  
  @media (max-width: 1150px) {
    ${adaptiveValue("font-size", 18, 13)};
    ${adaptiveValue("line-height", 38, 18)};
  }
`;

const BannerTitle = styled.div`
  color: ${colors.dark};
  ${adaptiveValue("font-size", 44, 22)};
  ${adaptiveValue("line-height", 62, 31)};
  ${adaptiveValue("margin-top", 16, 8)};
  ${adaptiveValue("margin-bottom", 12, 6)};
  font-family: ${fonts.sfSB};
  
  @media (max-width: 1150px) {
    ${adaptiveValue("font-size", 44, 26)};
    ${adaptiveValue("line-height", 62, 31)};
    ${adaptiveValue("margin-top", 16, 8)};
    ${adaptiveValue("margin-bottom", 12, 8)};  
  }
`;

const BannerItemTop = styled.div`
  position: absolute;
  ${adaptiveValue("top", -28, -14)};
  ${adaptiveValue("left", -28, -14)};
  z-index: -1;
  
  @media (max-width: 1150px) {
    ${adaptiveValue("left", 200, -14)};
  }
`;

const BannerItemBottom = styled.div`
  position: absolute;
  ${adaptiveValue("bottom", -28, -14)};
  ${adaptiveValue("right", -28, -14)};
  z-index: -1;
  
  @media (max-width: 1150px) {
    ${adaptiveValue("right", 200, -14)};
  }
`;

const BannerTitleItem = styled.span`
  color: ${colors.primaryColor};
`;

const BannerText = styled.p`
  ${adaptiveValue("max-width", 420, 210)};
  ${adaptiveValue("font-size", 14, 7)};
  ${adaptiveValue("line-height", 24, 12)};
  width: 100%;
  color: ${colors.gray};
  font-family: ${fonts.sfReg};
  
  @media (max-width: 1150px) {
    ${adaptiveValue("max-width", 420, 310)};
    ${adaptiveValue("font-size", 14, 12)};
    ${adaptiveValue("line-height", 24, 18)};
  }
`;

export {
  AboutBannerWrapper,
  BannerEntries,
  BannerVideoContent,
  BannerSubtitle,
  BannerTitleItem,
  BannerTitle,
  BannerText,
  BannerItemBottom,
  BannerItemTop,
  Video
};
