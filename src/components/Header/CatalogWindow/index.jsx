import React from "react";
import * as Style from "./style";
import { data } from "./data";
import { MainButton } from "pages/Product/style";
import { Link } from "react-router-dom";
import { Handle10 } from "assets/images";

const CatalogWindow = ({ active }) => {
  // const [first, setFirst] = useState(null);
  // const result = data.map((el) => el.id)

  // function change() {
  //   if (result[0] == 1) {
  //     setFirst(Handle11)
  //   }else if(result[1] == 2){
  //     setFirst(Handle10);
  //   }
  // }

  // function remove() {
  //   setFirst(false);
  // }

  return (
    <Style.CatalogDormer active={active}>
      <Style.CatalogUl>
        <Style.CatalogTitle>Накладные электронные замки</Style.CatalogTitle>
        {data.map((el) => (
          <Style.Button>
            <Style.CatalogLi
              // onMouseOver={change}
              // onMouseOut={remove}
              key={el.id}
              to={`/category/${el.type}`}
            >
              {el.text}
            </Style.CatalogLi>
          </Style.Button>
        ))}
        <Link to="/catalog">
          <Style.BottomButton>Смотреть все</Style.BottomButton>
        </Link>
      </Style.CatalogUl>

      <Style.ImgContent>
        <Style.CatalogImg src={Handle10} alt="" />
      </Style.ImgContent>
    </Style.CatalogDormer>
  );
};

export default CatalogWindow;
