import styled from "styled-components";
import { colors } from "utils/variable";

const CatalogDormer = styled.div`
    position: absolute;
    top: 80%;
    left: 30%;
    z-index: 100;
    max-width: 790px;
    width: 100%;
    height: 444px;
    background-color: ${colors.light};
    box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.10);
    display: ${(active) => (active.active ? "flex" : "none")};
`;


export { CatalogDormer };