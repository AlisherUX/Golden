import styled from "styled-components";
import { flex } from "../../utils/flex";
import { colors, fonts } from "../../utils/variable";

const ComponentWrapper = styled.div`
    width: 100%;
`;

const ContentWrapper = styled.div`
    margin-top: 62px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
`;

const ContentImg = styled.img`
    max-width: 605px;
    width: 100%;
`;

const ContentEntries = styled.div`
    max-width: 605px;
    width: 100%;
    ${flex.justFlex};
    flex-direction: column;
`;

const EntriesTitle = styled.p`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 42px;
    font-family: ${fonts.sfM};
    color: ${colors.dark};
`;

const EntriesTextTop = styled.p`
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 16px;
    font-family: ${fonts.sfReg};
    color: ${colors.gray};
`;

const EntriesTextBottom = styled.p`
    font-size: 18px;
    line-height: 32px;
    font-family: ${fonts.sfReg};
    color: ${colors.gray};
`;

const FeaturesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 32px;
    row-gap: 16px;
    margin-top: 8px;
    margin-bottom: 24px;
`;

const Feature = styled.div`
    display: flex;
    gap: 12px;
`;

const FeatureText = styled.p`
    color: ${colors.dark};
    font-family: ${fonts.sfReg};
    font-size: 20px;
    line-height: 24px;
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