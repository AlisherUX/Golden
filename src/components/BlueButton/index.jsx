import React from 'react'
import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variable";

const Button = styled.button`
    background-color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
    padding-block: 12px;
    max-width: 220px;
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
    @media (max-width: 460px) {
      max-width: max-content;
      ${adaptiveValue("padding-inline", 119, 90)};
    }
`;


const BlueButton = ({text}) => {
  return <Button>{text}</Button>
}

export default BlueButton;