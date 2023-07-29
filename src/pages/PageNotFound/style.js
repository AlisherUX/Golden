import styled from "styled-components";
import { colors, fonts } from "utils/variable";
import { flex } from "utils/flex";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${flex.center}
`;

const CenterContent = styled.div`
  ${flex.center}
  flex-direction: column;
`;

const ErrorCode = styled.p`
  font-size: 160px;
  line-height: 100px;
  font-family: ${fonts.sfSB};
  color: ${colors.primaryColor};
`;

const Warning = styled.div`
  font-size: 40px;
  width: 400px;
  font-family: ${fonts.sfSB};
  color: ${colors.primaryColor};
  text-align: center;
`;

export { Warning, CenterContent, PageWrapper, ErrorCode };
