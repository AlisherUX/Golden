import React from 'react'
import styled from "styled-components";
import { adaptiveValue, colors } from "utils/variable";

const Button = styled.button`
    background-color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
    ${adaptiveValue("padding-inline", 57, 91)};
    padding-block: 12px;
    max-width: max-content;
    width: 100%;
    color: ${colors.light};
    cursor: pointer;
    transition: 0.3s;
    display: block;

    &:hover{
        background: transparent;
        color: ${colors.primaryColor};
    }
    &:active{
        background: transparent;
        color: ${colors.primaryColor};
    }
`;


const BlueButton = ({text}) => {
  return <Button>{text}</Button>
}

export default BlueButton;