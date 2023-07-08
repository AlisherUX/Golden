import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const StatisticWrapper = styled.div`
  ${flex.center};
  ${adaptiveValue("padding-block", 40, 30)};
  ${adaptiveValue("gap", 82, 20)};
  flex-wrap: wrap;
  background: ${colors.secondaryColor};

  @media (max-width: 660px) {
    justify-content: space-around;
  }
`;

const StatisticBox = styled.div`
  ${flex.justFlex};

  ${flex.center};
  flex-direction: column;
  ${adaptiveValue("gap", 16, 8)};
`;

const StatisticNum = styled.p`
  ${adaptiveValue("font-size", 32, 24)};
  ${adaptiveValue("line-height", 38, 34)};
  font-family: ${fonts.sfSB};
  color: ${colors.dark};
`;

const StatisticTxt = styled.p`
  ${adaptiveValue("font-size", 16, 14)};
  ${adaptiveValue("line-height", 26, 24)};
  font-family: ${fonts.sfSB};
  color: "#454F5B";
`;

export { StatisticWrapper, StatisticBox, StatisticNum, StatisticTxt };
