import React from "react";
import {
  HeaderLink,
  HeaderNav,
  HeaderNavWrapper,
  HeaderWrapper,
  HeaderBtn,
  UserAction,
  CallContent,
  HeaderItem,
  HeaderLogo,
  BurgerMenu,
  BurgerMenuItem,
  HeaderNavContent
} from "./style";
import { Link } from "react-router-dom";
import { Container } from "../Container/style";
import HeaderTop from "./HeaderTop";
import Logo from "../../assets/images/Logo";
import HeaderDart from "../../assets/images/HeaderDart";
import Call from "../../assets/images/Call";
import Like from "../../assets/images/Like";
import Cart from "../../assets/images/Cart";
import BurgerWindow from "./BurgerWIndow";

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderTop />
         <HeaderNavWrapper>
          <Container>
            <HeaderNavContent>
             <HeaderLogo to="/"> <Logo/> </HeaderLogo>

                <BurgerMenu>
                  <BurgerMenuItem></BurgerMenuItem>
                  <BurgerMenuItem></BurgerMenuItem>
                  <BurgerMenuItem></BurgerMenuItem>
                </BurgerMenu>

              <HeaderNav>
               <Link to="/"><HeaderLink>Главная</HeaderLink></Link>
               <HeaderBtn>Каталог <HeaderDart/></HeaderBtn>
                <Link to="/discount"><HeaderLink>Оптовая продажа</HeaderLink></Link>
                <Link to="/about-us"><HeaderLink>О нас</HeaderLink></Link>
             </HeaderNav>

             <UserAction>
                <CallContent href={`tel:+${79665588499}`}>
                 <Call />
                  +7 (966) 55 88 499
               </CallContent>

               <HeaderItem>
                 <Like />
                </HeaderItem>

                <HeaderItem>
                  <Cart />
                </HeaderItem>

             </UserAction>
            </HeaderNavContent>
          </Container>
        </HeaderNavWrapper>
       <BurgerWindow/>
     </HeaderWrapper>
    </div>
  );
};

export default Header;
