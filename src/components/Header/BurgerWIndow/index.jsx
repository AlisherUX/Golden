import React from 'react'
import { Link } from 'react-router-dom';
import { BurgerNavBtn, BurgerNavLine, BurgerNavLink, BurgerNavWrapper, WindowWrapper } from './style';
import RightArrow from '../../../assets/images/RightArrow';

const BurgerWindow = ({open}) => {
  return <WindowWrapper open={open}>

     <BurgerNavWrapper>

         <Link to="/"><BurgerNavLink>Главная</BurgerNavLink></Link>
         <BurgerNavLine/>
         <BurgerNavBtn>Каталог <RightArrow/></BurgerNavBtn>
         <BurgerNavLine/>
         <Link to="/discount"><BurgerNavLink>Оптовая продажа</BurgerNavLink></Link>
         <BurgerNavLine/>
         <Link to="/about-us"><BurgerNavLink>О нас</BurgerNavLink></Link>
         <BurgerNavLine/>

     </BurgerNavWrapper>

     dfjldj
    
  </WindowWrapper>
}

export default BurgerWindow;