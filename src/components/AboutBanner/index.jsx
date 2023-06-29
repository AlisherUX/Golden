import React from "react";
import * as Style from "./style";
import { Container } from "components/Container/style";
import AboutBannerImg from "assets/images/AboutBannerImg.png";
import Pattern from "assets/images/Pattern";

const AboutBanner = () => {
  return (
    <Container>
      <Style.AboutBannerWrapper>
        <Style.BannerVideoContent>
        <Style.BannerItemTop>
          <Pattern />
        </Style.BannerItemTop>
          <img src={AboutBannerImg} alt="" />
        <Style.BannerItemBottom>
          <Pattern />
        </Style.BannerItemBottom>
        </Style.BannerVideoContent>

        <Style.BannerEntries>
          <Style.BannerSubtitle>о нас</Style.BannerSubtitle>
          <Style.BannerTitle>
            Компания <Style.BannerTitleItem> Golden Soft</Style.BannerTitleItem>
          </Style.BannerTitle>
          <Style.BannerText>
            Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
            posuere et risus non. Id et ut pellentesque consequat, amet erat
            gravida euismod pharetra.
          </Style.BannerText>
        </Style.BannerEntries>
      </Style.AboutBannerWrapper>
    </Container>
  );
};

export default AboutBanner;
