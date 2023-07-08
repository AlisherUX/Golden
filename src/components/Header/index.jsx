import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import * as Style from "./style";
import { Container } from "components/Container/style";
import BurgerWindow from "components/Header/BurgerWIndow";
import HeaderTop from "components/Header/HeaderTop";
import { Call, Cart, HeaderDart, Like, Logo } from "assets/images";
import CatalogWindow from "components/Header/CatalogWindow";
import CartModal from "components/CartModal";
import MainContext from "context/CartContext";
import LikeModal from "components/LikeModal";

const Header = () => {
  const [button, setButton] = useState(false);
  const [active, setActive] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);
  const { cartItems, likeItems } = useContext(MainContext);

  const handleModal = () => {
    setCartModal(!cartModal);
  };

  const handleLikeModal = () => {
    setLikeModal(!likeModal);
  };

  // const clickable = () => {
  //   setButton(!button);
  // };

  function changer(item, el) {
   return item(!el)
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
        <LikeModal
          likeModal={likeModal}
          data={likeItems}
          handleLikeModal={handleLikeModal}
        />
        <Style.HeaderNavWrapper>
          <Container>
            <Style.HeaderNavContent>
              <CatalogWindow />
              <Style.LogoWrapper to="/">
                <Logo />
              </Style.LogoWrapper>

              <Style.BurgerMenu onClick={changer(setButton, button)}>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
              </Style.BurgerMenu>

              <Style.HeaderNav>
                <Link to="/">
                  <Style.HeaderLink>Главная</Style.HeaderLink>
                </Link>
                <Style.HeaderBtn onClick={changer(setActive, active)}>
                  Каталог <HeaderDart/>
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

                <Badge badgeContent={+likeItems.length} color="primary">
                  <Style.HeaderItem onClick={handleLikeModal}>
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
