import styled from "styled-components";
import { adaptiveValue } from "utils/variable";

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding-block: 0px;
  ${adaptiveValue("padding-inline", 20, 12)};
`;

export { Container };
