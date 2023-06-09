import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { Container } from "../Container/style";
import BurgerWindow from "./BurgerWIndow";
import * as Style from "./style";
import { Call, Cart, HeaderDart, Like, Logo } from "../../assets/images";
import CatalogWindow from "./CatalogWindow";

const Header = () => {
const [button, setButton] = useState(false);
const [btn, setBtn] = useState(false);

const clickable = () =>{
  setButton(!button)
};
const click = () =>{
  setBtn(!btn)
};

useEffect(() => {
  if(button){
    document.body.style = "overflow: hidden";
  }else{
    document.body.style = "overflow: auto";
  }
}, [button]);

  return (
      <Style.HeaderWrapper>
     
        <HeaderTop />
        <Style.HeaderNavWrapper>
          <Container>
            <Style.HeaderNavContent>
             <CatalogWindow/>
             <Style.HeaderLogo to="/"> <Logo/> </Style.HeaderLogo>

                <Style.BurgerMenu onClick={() => clickable()}>
                  <Style.BurgerMenuItem></Style.BurgerMenuItem>
                  <Style.BurgerMenuItem></Style.BurgerMenuItem>
                  <Style.BurgerMenuItem></Style.BurgerMenuItem>
                </Style.BurgerMenu>

              <Style.HeaderNav>
               <Link to="/"><Style.HeaderLink>Главная</Style.HeaderLink></Link>
               <Style.HeaderBtn onClick={() => click(!btn)} >Каталог <HeaderDart/>   </Style.HeaderBtn>
                <Link to="/discount"><Style.HeaderLink>Оптовая продажа</Style.HeaderLink></Link>
                <Link to="/about-us"><Style.HeaderLink>О нас</Style.HeaderLink></Link>
             </Style.HeaderNav>

             <Style.UserAction>
                <Style.CallContent href={`tel:+${79665588499}`}>
                 <Call/>
                  +7 (966) 55 88 499
                </Style.CallContent>

                <Link to='/like'>
                  <Style.HeaderItem>
                    <Like/>
                  </Style.HeaderItem>
                </Link>

                <Link to='/cart'>
                  <Style.HeaderItem>
                    <Cart/>
                  </Style.HeaderItem>
                </Link>

             </Style.UserAction>
            </Style.HeaderNavContent>
          </Container>
       <BurgerWindow open={button}/>
        </Style.HeaderNavWrapper>
     </Style.HeaderWrapper>
  );
};

export default Header;
