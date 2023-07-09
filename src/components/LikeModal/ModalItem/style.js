import { Link } from "react-router-dom";
import styled from "styled-components";
import { flex } from "utils/flex";
import { adaptiveValue, colors, fonts } from "utils/variable";

const CardContent = styled.div`
  ${adaptiveValue("gap", 12, 8)};
  width: 100%;
  ${flex.justFlex}
  border-bottom: 1px solid ${colors.lightGray};

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const ProductImg = styled(Link)`
  border: 1px solid ${colors.white};
  background-color: ${colors.storm};
  ${flex.center}

  & > img {
    ${adaptiveValue("width", 136, 88)};
    ${adaptiveValue("height", 120, 80)};
    object-fit: contain;
  }
`;

const UserActionContent = styled.div`
  width: 100%;
  ${flex.justFlex}
  ${flex.alignCenter  }
`;

const LeftActionsWrapper = styled.div`
  width: 100%;
  ${flex.flexBetween}
  gap: 5px;
  flex-direction: column;
`;

const RightActionsWrapper = styled.div`
  ${flex.spaceBetween}
  flex-direction: column;
  ${adaptiveValue("gap", 20, 0)};
`;

const CardTitle = styled.p`
  color: ${colors.dark};
  ${adaptiveValue("font-size", 16, 14)};
  ${adaptiveValue("line-height", 26, 16)};
  font-family: ${fonts.sfReg};
`;

const Button = styled.button`
  width: 100%;
  color: ${colors.primaryColor};
  background-color: transparent;
  border: none;
`;

export {
  ProductImg,
  UserActionContent,
  CardContent,
  LeftActionsWrapper,
  RightActionsWrapper,
  CardTitle,
  Button,
};
