import React from "react";
import * as Style from "./style";
import { Container } from "components/Container/style";
import { Facebook, Twitter, WhiteLogo, Wk } from "assets/images";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <Style.FooterWrapper>
      <Container>
        <Style.FooterContentsWrapper>
          <Style.IconsContent>
            <Style.FooterLogoWrapper>
              <WhiteLogo />
            </Style.FooterLogoWrapper>

            <Style.SocialMediaContent>
              <Link target="blank" to="https://m.vk.com/" aria-label="Read more">
                <Wk />
              </Link>
              <Link target="blank" to="https://twitter.com/?lang=ru" aria-label="Read more">
                <Twitter />
              </Link>
              <Link target="blank" to="https://ru-ru.facebook.com/" aria-label="Read more">
                <Facebook />
              </Link>
            </Style.SocialMediaContent>
          </Style.IconsContent>

          <Style.FooterNavsWrapper>
            <Style.FooterNav>
              <Style.NavTitle>Навигация</Style.NavTitle>
              <Style.NavLinksWrapper>
                <Link to="/">
                  <Style.NavLink>Главная</Style.NavLink>
                </Link>
                <Link to="/catalog">
                  <Style.NavLink>Каталог</Style.NavLink>
                </Link>
                <Link to="/about-us">
                  <Style.NavLink>О нас</Style.NavLink>
                </Link>
              </Style.NavLinksWrapper>
            </Style.FooterNav>

            <Style.FooterNav>
              <Style.NavTitle>Наши контакты</Style.NavTitle>
              <Style.NavLinksWrapper>
                <Style.NavSubTitle>Телефоны</Style.NavSubTitle>
                <Style.NavLink href={`tel:+${79885650038}`}>+7 (988) 565 00 38</Style.NavLink>
                <Style.NavLink href={`tel:+${375336628256}`}>+375 33 662 82 56</Style.NavLink>
              </Style.NavLinksWrapper>
              <Style.NavLinksWrapper>
                <Style.NavSubTitle>Email</Style.NavSubTitle>
                <Style.NavLink>vladpertcev@mail.ru</Style.NavLink>
                <Style.NavLink>korobko416@gmail.com</Style.NavLink>
              </Style.NavLinksWrapper>
            </Style.FooterNav>

            <Style.FooterNav>
              <Style.NavTitle>Наш адрес</Style.NavTitle>
              <Style.NavLink style={{ width: "182px" }}>
                Россия, Ростов-на-Дону ул. Богачева, 16
              </Style.NavLink>
            </Style.FooterNav>

            <Style.FooterNav>
              <Style.NavTitle>Информация</Style.NavTitle>
              <Style.NavLink>Доставка и оплата</Style.NavLink>
              <Style.NavLink>Гарантии</Style.NavLink>
              <Style.NavLink>Возврат товара</Style.NavLink>
            </Style.FooterNav>
          </Style.FooterNavsWrapper>

          <Style.AccordionsWrapper>
            <Accordion sx={{ backgroundColor: "#345E7E", borderRadius: "5px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <Style.NavTitle>Навигация</Style.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Style.NavLinksWrapper>
                    <Link to="/">
                      <Style.NavLink>Главная</Style.NavLink>
                    </Link>
                    <Link to="/catalog">
                      <Style.NavLink>Каталог</Style.NavLink>
                    </Link>
                    <Link to="/about-us">
                      <Style.NavLink>О нас</Style.NavLink>
                    </Link>
                  </Style.NavLinksWrapper>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#345E7E" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <Style.NavTitle>Наши контакты</Style.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Style.NavLinksWrapper>
                    <Style.NavSubTitle>Телефоны</Style.NavSubTitle>
                    <Style.NavLink>+7 (988) 565 00 38</Style.NavLink>
                    <Style.NavLink>+375 33 662 82 56</Style.NavLink>
                  </Style.NavLinksWrapper>
                  <Style.NavLinksWrapper>
                    <Style.NavSubTitle>Email</Style.NavSubTitle>
                    <Style.NavLink>vladpertcev@mail.ru</Style.NavLink>
                    <Style.NavLink>korobko416@gmail.com</Style.NavLink>
                  </Style.NavLinksWrapper>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#345E7E" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <Style.NavTitle>Наш адрес</Style.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Style.NavLink style={{ width: "182px" }}>
                    Россия, Ростов-на-Дону ул. Богачева, 16
                  </Style.NavLink>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "#345E7E" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <Style.NavTitle>Информация</Style.NavTitle>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Style.NavLink>Доставка и оплата</Style.NavLink>
                  <Style.NavLink>Гарантии</Style.NavLink>
                  <Style.NavLink>Возврат товара</Style.NavLink>
                </Typography>
              </AccordionDetails>
            </Accordion>

          </Style.AccordionsWrapper>
          
        </Style.FooterContentsWrapper>
        <Style.FooterBottom>
          © {new Date().getFullYear()} Golden Soft All rights reserved.
        </Style.FooterBottom>
      </Container>
    </Style.FooterWrapper>
  );
};

export default Footer;
