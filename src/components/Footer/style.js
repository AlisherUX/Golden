import styled from "styled-components";
import { adaptiveValue, colors, fonts } from "../../utils/variable";
import { flex } from "../../utils/flex";

const FooterWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-inline", 90, 0)};
  ${adaptiveValue("padding-top", 55, 32)};
  ${adaptiveValue("padding-bottom", 25, 16)};
  background-color: ${colors.deepDark};
`;

const FooterLogoWrapper = styled.div`
  ${adaptiveValue("width", 105, 70)};
  ${adaptiveValue("height", 88, 57)};
`;

const FooterContentsWrapper = styled.div`
  width: 100%;
  ${flex.flexBetween}

  @media (max-width: 1340px) {
    flex-direction: column;
  }
`;

const IconsContent = styled.div`
  width: 126px;
  ${flex.justFlex};
  flex-direction: column;
  gap: 144px;
  margin-bottom: 10px;

  @media (max-width: 1340px) {
   width: 100%;
   flex-direction: row;
   gap: 0;
   ${flex.flexBetween};
   align-items: center;
   margin-bottom: 24px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  ${adaptiveValue("padding-top", 24, 16)};
  ${adaptiveValue("margin-top", 50, 24)};
  border-top: 1px solid #203546;
  font-size: 14px;
  line-height: 17px;
  font-family: ${fonts.sfReg};
  opacity: 0.6;
  color: ${colors.light};
  ${flex.center}
`;

const SocialMediaContent = styled.div`
  ${flex.justFlex};
  gap: 24px;
`;

const FooterNavsWrapper = styled.div`
  ${flex.justFlex};
  flex-wrap: wrap;
  ${adaptiveValue("column-gap", 97, 10)};
  max-width: 937px;
  width: 100%;
  
  @media (max-width: 1340px) {
    ${adaptiveValue("row-gap", 0, 20)};
   max-width: 100%;
   ${flex.flexBetween};
  }
`;

const FooterNav = styled.nav`
  ${flex.justFlex};
  flex-direction: column;
  ${adaptiveValue("gap", 24, 10)};
`;

const NavTitle = styled.p`
  ${adaptiveValue("font-size", 18, 20)}
  ${adaptiveValue("line-height", 28, 30)}
  color: ${colors.light};
  font-family: ${fonts.sfM};
`;

const NavSubTitle = styled.p`
  ${adaptiveValue("font-size", 14, 12)}
  ${adaptiveValue("line-height", 24, 14)}
  color: #c4cdd5;
  font-family: ${fonts.sfL};
`;

const NavLinksWrapper = styled.div`
    ${flex.justFlex};
    flex-direction: column;
    gap: 16px;
`;

const NavLink = styled.p`
    ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 24)}
    color: ${colors.light};
    font-family: ${fonts.sfL};
`;

export {
  FooterLogoWrapper,
  FooterWrapper,
  FooterBottom,
  FooterContentsWrapper,
  IconsContent,
  SocialMediaContent,
  FooterNavsWrapper,
  FooterNav,
  NavTitle,
  NavSubTitle,
  NavLink,
  NavLinksWrapper
};
