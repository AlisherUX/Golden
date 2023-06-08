import React from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { Title } from '../WhyOur/style';
import BlueButton from '../BlueButton';
import { Link } from 'react-router-dom';
import { data } from "./data";

const Category = () => {
  return (
    <Style.CategoryWrapper>
            <Title>Категории</Title>
        <Container>
            <Style.CategoryCards>
                {data.map((el) => {
                    return(
                    <Style.CategoryCard>
                        <Style.CardItemsWrapper>
                            <Style.CardEntry>{el.text}</Style.CardEntry>
                            <Style.CardBtn>Перейти</Style.CardBtn>
                        </Style.CardItemsWrapper>
    
                        <Style.CardImg src={el.img}/>
                    </Style.CategoryCard>
                    )
                })}
            </Style.CategoryCards>
        </Container>
          <Link to='/category'>   <BlueButton text={'Все категории'}/></Link>
    </Style.CategoryWrapper>
  )
}

export default Category;