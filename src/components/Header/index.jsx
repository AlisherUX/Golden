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

  const Switch = (el, item) => {
    item(!el);
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
          handleModal={() => Switch(cartModal, setCartModal)}
        />
        <LikeModal
          likeModal={likeModal}
          data={likeItems}
          handleLikeModal={() => Switch(likeModal, setLikeModal)}
        />
        <Style.HeaderNavWrapper>
          <Container>
            <Style.HeaderNavContent>
              <Style.LogoWrapper to="/">
                <Logo />
              </Style.LogoWrapper>

              <CatalogWindow active={active} />

              <Style.BurgerMenu onClick={() => Switch(button, setButton)}>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
                <Style.BurgerMenuItem></Style.BurgerMenuItem>
              </Style.BurgerMenu>

              <Style.HeaderNav>
                <Link to="/">
                  <Style.HeaderLink>Главная</Style.HeaderLink>
                </Link>
                <Style.HeaderBtn aria-label="button" onClick={() => Switch(active, setActive)}>
                  Каталог
                  <Style.IconController active={active}>
                    <HeaderDart />
                  </Style.IconController>
                </Style.HeaderBtn>
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
                  <Style.HeaderItem
                    onClick={() => Switch(likeModal, setLikeModal)}
                  >
                    <Like />
                  </Style.HeaderItem>
                </Badge>

                <Badge badgeContent={cartItems.length} color="primary">
                  <Style.HeaderItem
                    onClick={() => Switch(cartModal, setCartModal)}
                  >
                    <Cart />
                  </Style.HeaderItem>
                </Badge>
              </Style.UserAction>
              <BurgerWindow open={button} />
            </Style.HeaderNavContent>
          </Container>
        </Style.HeaderNavWrapper>
      </Style.HeaderWrapper>
    </>
  );
};

export default Header;
