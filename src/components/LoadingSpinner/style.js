import styled from "styled-components";
import { colors } from "utils/variable";
import { flex } from "utils/flex";

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${colors.light};
  ${flex.center}
  z-index: 100;
`;

export { Background };
