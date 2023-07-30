import React, { useState } from "react";
import * as Style from "./style";
import { Link } from "react-router-dom";
import {
  Handle,
  Handle10,
  Handle2,
  Handle3,
  Handle5,
  Handle6,
  Handle9,
} from "assets/images";

const CatalogWindow = ({ active }) => {
  const [img, setImg] = useState(Handle10);
  let forWork = "forWork";
  let forOffice = "forOffice";
  let forFlat = "forFlat";
  let forHome = "forHome";
  let forGarden = "forGarden";
  let forClub = "forClub";
  let forKitchen = "forKitchen";

  const change = (el) => {
    setTimeout(() => {
      setImg(el);
    }, 100);
  };

  return (
    <Style.CatalogDormer active={active}>
      <Style.CatalogUl>
        <Style.CatalogTitle>Накладные электронные замки</Style.CatalogTitle>

        <Style.CatalogLi
          onMouseOver={() => change(Handle10)}
          to={`/category/${forWork}`}
        >
          Врезные электронные замки
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle9)}
          to={`/category/${forFlat}`}
        >
          Замки для квартиры
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle)}
          to={`/category/${forHome}`}
        >
          Замки для дома
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle2)}
          to={`/category/${forGarden}`}
        >
          Замки для отелей
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle3)}
          to={`/category/${forOffice}`}
        >
          Замки для офиса
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle5)}
          to={`/category/${forClub}`}
        >
          Замки для шкафчиков
        </Style.CatalogLi>
        <Style.CatalogLi
          onMouseOver={() => change(Handle6)}
          to={`/category/${forKitchen}`}
        >
          Замки для раздевалок
        </Style.CatalogLi>

        <Link to="/catalog">
          <Style.BottomButton aria-label="button">Смотреть все</Style.BottomButton>
        </Link>
      </Style.CatalogUl>

      <Style.ImgContent>
        <Style.CatalogImg src={img} alt="" />
      </Style.ImgContent>
    </Style.CatalogDormer>
  );
};

export default CatalogWindow;
