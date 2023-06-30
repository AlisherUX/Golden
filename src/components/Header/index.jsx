import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTop from "components/Header/HeaderTop";
import { Container } from "components/Container/style";
import BurgerWindow from "components/Header/BurgerWIndow";
import * as Style from "./style";
import { Call, Cart, HeaderDart, Like, Logo } from "assets/images";
import CatalogWindow from "components/Header/CatalogWindow";
import CartModal from "components/CartModal";
import MainContext from "reducer/CartContext";
import { Badge } from "@mui/material";

const Header = () => {
  const [button, setButton] = useState(false);
  const [btn, setBtn] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const { cartItems, likeItems } = useContext(MainContext);
  console.log(cartItems);

  const handleModal = () => {
    setCartModal(!cartModal);
  };

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
    <>
      <HeaderTop />
      <Style.HeaderWrapper>
        <CartModal
          cartModal={cartModal}
          data={cartItems}
          handleModal={handleModal}
        />
        <Style.HeaderNavWrapper>
          <Container>
            <Style.HeaderNavContent>
              <CatalogWindow />
              <Style.LogoWrapper to="/">
                <Logo />
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
                  Каталог <HeaderDart />
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

                <Badge badgeContent={likeItems.length} color="primary">
                  <Style.HeaderItem onClick={handleModal}>
                    <Like />
                  </Style.HeaderItem>
                </Badge>

                <Badge badgeContent={cartItems.length} color="primary">
                  <Style.HeaderItem onClick={handleModal}>
                    <Cart />
                  </Style.HeaderItem>
                </Badge>
              </Style.UserAction>
            </Style.HeaderNavContent>
          </Container>
          <BurgerWindow open={button} />
        </Style.HeaderNavWrapper>
      </Style.HeaderWrapper>
    </>
  );
};

export default Header;
