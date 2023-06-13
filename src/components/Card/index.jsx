import React from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { Title } from '../WhyOur/style';
import BlueButton from '../BlueButton';
import { Link } from 'react-router-dom';
import { data } from "./data";

const Card = () => {
  return (
    <Style.CategoryWrapper>
                {data.map((el) => {
                    return(
                    <Style.CategoryCard>
                        <Style.CardItemsWrapper>
                            <Style.CardEntry>{el.text}</Style.CardEntry>
                            <Link to='/category'> <Style.CardBtn>Перейти</Style.CardBtn></Link>
                        </Style.CardItemsWrapper>
    
                        <Style.CardImg src={el.img}/>
                    </Style.CategoryCard>
                    )
                })}
    </Style.CategoryWrapper>
  )
}

export default Card;