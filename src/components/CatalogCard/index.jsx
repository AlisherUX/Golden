import React from "react";
import * as Style from "./style";
import { Link } from "react-router-dom";

const CatalogCard = ({img, type, text}) => {

  return (
    <Link to={`/category/${type}`}>
      <Style.CatalogCard >
        <Style.CatalogCardImg src={img} alt="alisher"/>
        <Style.CatalogCardTxt>{text}</Style.CatalogCardTxt>
      </Style.CatalogCard>
    </Link>
  );
};

export default CatalogCard;
