import { flex } from "utils/flex";
import styled from "styled-components";
import { colors, fonts } from "utils/variable";

const RaitingWrapper = styled.div`
    width: 100%;
    ${flex.justFlex}
    gap: 8px;
`;

const Reviews = styled.div`
    color: ${colors.gray};
    font-size: 13px;
    font-family: ${fonts.sfReg};
    line-height: 21px;
`;

export {
    RaitingWrapper,
    Reviews
}