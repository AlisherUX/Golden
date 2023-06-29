import styled from "styled-components";
import { colors, fonts } from "utils/variable";

const AboutBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 110px;
  margin-bottom: 130px;
  margin-top: 70px;
`;

const BannerVideoContent = styled.div`
  max-width: 605px;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const BannerEntries = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const BannerSubtitle = styled.p`
  color: ${colors.primaryColor};
  font-size: 18px;
  font-family: ${fonts.sfReg};
  line-height: 38px;
  letter-spacing: 1.62px;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.primaryColor};
`;

const BannerTitle = styled.div`
  color: ${colors.dark};
  font-size: 44px;
  font-family: ${fonts.sfSB};
  line-height: 62px;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const BannerItemTop = styled.div`
    position: absolute;
    top: -28px;
    left: -28px;
    z-index: -1;
`;

const BannerItemBottom = styled.div`
    position: absolute;
    bottom: -28px;
    right: -28px;
    z-index: -1;
`;

const BannerTitleItem = styled.span`
  color: ${colors.primaryColor};
`;

const BannerText = styled.p`
  max-width: 420px;
  width: 100%;
  color: ${colors.gray};
  font-size: 14px;
  font-family: ${fonts.sfReg};
  line-height: 24px;
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
  BannerItemTop
};
