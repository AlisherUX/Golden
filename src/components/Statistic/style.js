import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, fonts } from "../../utils/variable";

const StatisticWrapper = styled.div`
    ${flex.center};
    ${adaptiveValue("padding-block", 40, 30)};
    ${adaptiveValue("gap", 82, 20)};
    flex-wrap: wrap;
    background-color: ${props => props.color ? "#F2F8FF" : "#0D2436"};
    
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
    color: ${props => props.color ? "#161C24" : "#FFF"};
`;

const StatisticTxt = styled.p`
    ${adaptiveValue("font-size", 16, 14)};
    ${adaptiveValue("line-height", 26, 24)};
    font-family: ${fonts.sfSB};
    color: ${props => props.color ? "#454F5B" : "#FFF"};
`;

export { StatisticWrapper, StatisticBox, StatisticNum, StatisticTxt };