import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTop from "components/Header/HeaderTop";
import { Container } from "components/Container/style";
import BurgerWindow from "components/Header/BurgerWIndow";
import * as Style from "./style";
import { Call, Cart, HeaderDart, Like, Logo } from "assets/images";
import CatalogWindow from "components/Header/CatalogWindow";
import CartModal from "components/CartModal";

const Header = () => {
  const [button, setButton] = useState(false);
  const [btn, setBtn] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  // console.log(cartModal);

  const handleModal = () => {
    setCartModal(!cartModal)
  }

  const clickable = () => {
    setButton(!button);
  };
  const click = () => {
    setBtn(!btn);
  };

  useEffect(() => {
    if (button) {
      document.body.style = "overflow: hidden";
    } else {
      document.body.style = "overflow: auto";
    }
  }, [button]);

  return (
    <Style.HeaderWrapper>
      <HeaderTop />
      <CartModal cartModal={cartModal} handleModal={handleModal}/>
      <Style.HeaderNavWrapper>
        <Container>
          <Style.HeaderNavContent>
            <CatalogWindow />
            <Style.LogoWrapper to="/">
              {" "}
              <Logo />{" "}
            </Style.LogoWrapper>

            <Style.BurgerMenu onClick={() => clickable()}>
              <Style.BurgerMenuItem></Style.BurgerMenuItem>
              <Style.BurgerMenuItem></Style.BurgerMenuItem>
              <Style.BurgerMenuItem></Style.BurgerMenuItem>
            </Style.BurgerMenu>

            <Style.HeaderNav>
              <Link to="/">
                <Style.HeaderLink>Главная</Style.HeaderLink>
              </Link>
              <Style.HeaderBtn onClick={() => click(!btn)}>
                Каталог <HeaderDart />{" "}
              </Style.HeaderBtn>
              <Link to="/discount">
                <Style.HeaderLink>Оптовая продажа</Style.HeaderLink>
              </Link>
              <Link to="/about-us">
                <Style.HeaderLink>О нас</Style.HeaderLink>
              </Link>
            </Style.HeaderNav>

            <Style.UserAction>
              <Style.CallContent href={`tel:+${79665588499}`}>
                <Call />
                +7 (966) 55 88 499
              </Style.CallContent>

              <Link to="/like">
                <Style.HeaderItem>
                  <Like />
                </Style.HeaderItem>
              </Link>

                <Style.HeaderItem onClick={handleModal}>
                  <Cart />
                </Style.HeaderItem>

            </Style.UserAction>
          </Style.HeaderNavContent>
        </Container>
        <BurgerWindow open={button} />
      </Style.HeaderNavWrapper>
    </Style.HeaderWrapper>
  );
};

export default Header;
