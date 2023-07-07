import styled from "styled-components";
import { adaptiveValue, colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const HeaderTopWrapper = styled.div`
  width: 100%;
  padding-block: 10px;
  ${adaptiveValue("padding-inline", 100, 15)}
  ${adaptiveValue("padding-block", 10, 12)}
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
  font-family: ${fonts.sfM};
  ${adaptiveValue("font-size", 16, 12)}
  ${adaptiveValue("line-height", 24, 18)}
  letter-spacing: 0.12em;
  text-align: center;
`;

const ReCallText = styled.a`
  font-family: ${fonts.sfM};
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
