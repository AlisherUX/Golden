import styled from "styled-components";
import { adaptiveValue, colors } from "../../../utils/variable";
import { flex } from "../../../utils/flex";

const HeaderTopWrapper = styled.div`
    width: 100%;
    padding-block: 10px;
    padding-inline: 100px;
    ${adaptiveValue("padding-inline", 100, 0)}
    background-color: ${colors.gray}
`;

const TextContent = styled.div`
    max-width: 888px;
    width: 100%;
    ${flex.spaceBetween}
    margin-left: auto;
    color: ${colors.light};

    @media (max-width: 780px) {
        max-width: 100%;
        ${flex.center};
    }
`;

const DiscountText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.12em;
`;

const ReCallText = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.12em;
    text-decoration-line: underline;
    color: ${colors.light};
    cursor: pointer;

    @media (max-width: 780px) {
        display: none;
    }
`;

export { HeaderTopWrapper, TextContent, ReCallText, DiscountText };