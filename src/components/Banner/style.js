import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors } from "../../utils/variable";

const BannerWrapper = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),
    url(skud-200z-5-11.jpg);
`;

const BannerButtons = styled.button`
  background: transparent;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  display: inline;
`;

const SwiperNavigation = styled.div`
  ${flex.flexBetween};
  ${flex.alignCenter};
  // width: 180px;
  // margin: 0 auto;
  // padding-bottom: 48px;
`;

const BannerContent = styled.div`
  ${flex.alignCenter}
  ${adaptiveValue("gap", 64, 0)};

  @media (max-width: 660px) {
    ${flex.justFlex};
    flex-direction: column;
  }
`;

const BannerImg = styled.img`
  ${adaptiveValue("max-width", 624, 224)};
  width: 100%;
  margin-left: 40px;

  @media (max-width: 1000px) {
    margin-left: 0px;
  }
  @media (max-width: 660px) {
  ${adaptiveValue("max-width", 624, 324)};
  }
`;

const BannerEntries = styled.div`
  ${flex.justFlex};
  flex-direction: column;
`;

const BannerTitle = styled.h1`
  font-weight: 600;
  ${adaptiveValue("font-size", 44, 22)};
  ${adaptiveValue("line-height", 62, 34)};
  color: ${colors.dark};
  ${flex.justFlex}
  flex-direction: column;
  text-align: left;
  
  @media (max-width: 660px) {
    display: block;
    gap: 10px;
  }
`;

const BannerText = styled.div`
  max-width: 287px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.gray};
  ${flex.justFlex}
  flex-direction: column;
  gap: 16px;
  ${adaptiveValue("margin-bottom", 32, 18)};
  ${adaptiveValue("margin-top", 20, 12)};

  > span {
    text-align: left;
  }

  @media (max-width: 660px) {
    max-width: 100%;
    gap: 8px;
  }
`;

const BannerPrice = styled.div`
  ${flex.justFlex}
  align-items: start;
  flex-direction: column;
  margin-bottom: 16px;

  > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: ${colors.gray};
    display: block;
    margin-bottom: 5px;
  }
`;

const Prices = styled.div`
  ${flex.justFlex};
  gap: 12px;
`;

const BannerNowPrice = styled.p`
  font-weight: 600;
  ${adaptiveValue("font-size", 24, 18)};
  ${adaptiveValue("line-height", 29, 21)};
  color: ${colors.dark};
  display: inline;
`;

const BannerOldPrice = styled.p`
  font-weight: 300;
  ${adaptiveValue("font-size", 22, 14)};
  ${adaptiveValue("line-height", 26, 17)};
  color: ${colors.lightGray};
  display: inline;
  text-decoration: line-through;
`;

export {
  BannerWrapper,
  BannerButtons,
  SwiperNavigation,
  BannerImg,
  BannerContent,
  BannerEntries,
  BannerTitle,
  BannerText,
  BannerPrice,
  BannerNowPrice,
  BannerOldPrice,
  Prices,
};
