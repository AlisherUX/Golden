import React from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { Title } from '../WhyOur/style';
import BlueButton from '../BlueButton';
import { Handle, Handle3, Lock, handle2 } from '../../assets/images';

const Category = () => {
  return (
    <Style.CategoryWrapper>
            <Title>Категории</Title>
        <Container>
            <Style.CategoryCards>

                <Style.CategoryCard>
                    <Style.CardItemsWrapper>
                        <Style.CardEntry>Для отелей</Style.CardEntry>
                        <Style.CardBtn>Перейти</Style.CardBtn>
                    </Style.CardItemsWrapper>

                    <Style.CardImg src={Handle}/>
                </Style.CategoryCard>
                <Style.CategoryCard>
                    <Style.CardItemsWrapper>
                        <Style.CardEntry>Для отелей</Style.CardEntry>
                        <Style.CardBtn>Перейти</Style.CardBtn>
                    </Style.CardItemsWrapper>

                    <Style.CardImg src={Handle3}/>
                </Style.CategoryCard>
                <Style.CategoryCard>
                    <Style.CardItemsWrapper>
                        <Style.CardEntry>Для отелей</Style.CardEntry>
                        <Style.CardBtn>Перейти</Style.CardBtn>
                    </Style.CardItemsWrapper>

                    <Style.CardImg src={handle2}/>
                </Style.CategoryCard>
                <Style.CategoryCard>
                    <Style.CardItemsWrapper>
                        <Style.CardEntry>Для отелей</Style.CardEntry>
                        <Style.CardBtn>Перейти</Style.CardBtn>
                    </Style.CardItemsWrapper>

                    <Style.CardImg src={Lock}/>
                </Style.CategoryCard>

            </Style.CategoryCards>
        </Container>
            <BlueButton text={'Все категории'}/>
    </Style.CategoryWrapper>
  )
}

export default Category;