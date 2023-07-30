import React from "react";
import styled from "styled-components";
import { adaptiveValue, colors } from "utils/variable";

const Button = styled.button`
  background-color: ${colors.primaryColor};
  ${adaptiveValue("padding-inline", 57, 91)};
  padding-block: 12px;
  width: 100%;
  display: block;

  &:hover {
    background: transparent;
    color: ${colors.primaryColor};
  }
  &:active {
    background: transparent;
    color: ${colors.primaryColor};
  }
`;

const BlueButton = ({ text }) => {
  return <Button aria-label="button">{text}</Button>;
};

export default BlueButton;
