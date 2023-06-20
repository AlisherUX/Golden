import { Breadcrumbs } from "@mui/material";
import { adaptiveValue } from "utils/variable";
import styled from "styled-components";

const BreadCrumb = styled(Breadcrumbs)`
    margin-top: 20px;
    ${adaptiveValue("margin-bottom", 40, 24)};
`;

export { BreadCrumb }