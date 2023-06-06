import styled from "styled-components";

const CatalogWrapper = styled.div`
    /* max-width: 790px;
    width: 100%;
    height: 444px;
    background-color: red; */
    position: absolute;
    top: 70px;
    right: 155px;
    z-index: 100;
    opacity: ${({ active }) => (active === true ? "0" : "1")};
`;

export { CatalogWrapper };