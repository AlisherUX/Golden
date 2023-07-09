import React from 'react'
import * as Style from './style';
import { Call, RightArrow } from 'assets/images';


const BurgerWindow = ({open}) => {
  return <Style.WindowWrapper open={open}>

     <Style.BurgerNavWrapper>
         <Style.BurgerNavLink href='/'>Главная</Style.BurgerNavLink>
    
         <Style.BurgerNavBtn>Каталог <RightArrow/></Style.BurgerNavBtn>
        
         <Style.BurgerNavLink href='/about-us'>О нас</Style.BurgerNavLink>
     </Style.BurgerNavWrapper>

     <Style.BurgerBottomContent>
         <Style.BurgerCallContent href={`tel:+${79665588499}`}>
            <Call/>
             +7 (966) 55 88 499
         </Style.BurgerCallContent>
         <Style.BurgerReCall href='tel:+9989999999'>Обратный звонок</Style.BurgerReCall>
     </Style.BurgerBottomContent>
    
  </Style.WindowWrapper>
}

export default BurgerWindow;