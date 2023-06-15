import React, { useEffect, useState } from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { Title } from '../WhyOur/style';
import BlueButton from '../BlueButton';
import { Link } from 'react-router-dom';
import axios from "axios";

const Category = () => {
    const [data, setData] = useState([]);

    async function getData(){
        const res = await axios.get(
          "https://6484329bee799e3216265e4c.mockapi.io/category"
        );
      
        if(res.status === 200){
          setData(res.data)
        }
      }

      useEffect(() => {
        getData()
      }, []);
      
  return (
    <Style.CategoryWrapper>
            <Title>Категории</Title>
        <Container>
            <Style.CategoryCards>
                {data?.map((el) => {
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
            </Style.CategoryCards>
        </Container>
          <Link to='/category'>   <BlueButton text={'Все категории'}/></Link>
    </Style.CategoryWrapper>
  )
}

export default Category;