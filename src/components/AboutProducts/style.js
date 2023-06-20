import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors, fonts } from "../../utils/variable";

const ComponentWrapper = styled.div`
    width: 100%;
`;

const ContentWrapper = styled.div`
    ${adaptiveValue("margin-top", 62, 36)};
    ${adaptiveValue("gap", 30, 16)};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 950px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const ContentImg = styled.img`
    ${adaptiveValue("max-width", 605, 343)};
    width: 100%;

    @media (max-width: 950px) {
        ${adaptiveValue("max-width", 605, 505)};
    }
`;

const ContentEntries = styled.div`
    max-width: 605px;
    width: 100%;
    ${flex.justFlex};
    flex-direction: column;
`;

const EntriesTitle = styled.p`
    ${adaptiveValue("margin-bottom", 24, 12)};
    ${adaptiveValue("font-size", 32, 16)};
    ${adaptiveValue("line-height", 42, 26)};
    font-family: ${fonts.sfM};
    color: ${colors.dark};
`;

const EntriesTextTop = styled.p`
    ${adaptiveValue("font-size", 18, 14)};
    ${adaptiveValue("line-height", 32, 24)};
    ${adaptiveValue("margin-bottom", 16, 8)};
    font-family: ${fonts.sfReg};
    color: ${colors.gray};
`;

const EntriesTextBottom = styled.p`
    ${adaptiveValue("font-size", 18, 14)};
    ${adaptiveValue("line-height", 32, 24)};
    font-family: ${fonts.sfReg};
    color: ${colors.gray};
`;

const FeaturesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${adaptiveValue("row-gap", 16, 12)};
    ${adaptiveValue("margin-top", 8, 12)};
    ${adaptiveValue("margin-bottom", 24, 12)};
    column-gap: 32px;
`;

const Feature = styled.div`
    display: flex;
    ${adaptiveValue("gap", 12, 8)};
`;

const FeatureText = styled.p`
    color: ${colors.dark};
    font-family: ${fonts.sfReg};
    opacity: 0.9;
    ${adaptiveValue("font-size", 20, 16)};
    ${adaptiveValue("line-height", 24, 26)};
`;

export {
    ComponentWrapper,
    EntriesTextTop,
    EntriesTitle,
    EntriesTextBottom,
    Feature,
    FeatureText,
    FeaturesWrapper,
    ContentEntries,
    ContentImg,
    ContentWrapper
};