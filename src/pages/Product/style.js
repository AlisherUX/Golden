import styled from "styled-components";
import { flex } from "../../utils/flex";

const ProductImagesContent = styled.div`
    ${flex.justFlex}
    flex-direction: column;
    gap: 20px;
`;

const MainImg = styled.img`
    max-width: 605px;
    width: 100%;
`;

// const MinImagesWrapper = styled.div`
//     df
// `;

const ProductInfoContent = styled.div`
    ${flex.justFlex}
`;

export { ProductImagesContent, ProductInfoContent, MainImg };