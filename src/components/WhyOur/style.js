import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors, fonts } from "../../utils/variable";

const WhyOurWrapper = styled.div`
  ${adaptiveValue("padding-top", 93, 40)};
  width: 100%;
  background: ${colors.light};
`;

const Title = styled.p`
  ${adaptiveValue("font-size", 44, 22)};
  ${adaptiveValue("line-height", 62, 34)};
  font-family: ${fonts.sfSB};
  color: ${colors.dark};
  text-align: center;
`;

const WhyOurBox = styled.div`
  max-width: 393px;
  width: 100%;
  padding: 24px;
  ${flex.justFlex};
  ${flex.center};
  flex-direction: column;
  ${adaptiveValue("gap", 32, 16)};
  border-left: 1px solid ${colors.lightGray};
  border-right: 1px solid ${colors.lightGray};

  @media (max-width: 855px) {
    border-left: none;
    border-right: none;
    border-top: 1px solid ${colors.lightGray};
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

const BoxTxt = styled.p`
  ${adaptiveValue("font-size", 20, 16)};
  ${adaptiveValue("line-height", 32, 26)};
  color: ${colors.gray};
  font-family: ${fonts.sfReg};
  text-align: center;
`;

const BoxContent = styled.div`
  width: 100%;
  margin: 0 auto;
  ${flex.flexBetween}
  ${flex.center}
    gap: 30px;
  flex-wrap: wrap;
  ${adaptiveValue("margin-top", 56, 24)};
`;

export { WhyOurWrapper, BoxContent, Title, WhyOurBox, BoxTxt };
