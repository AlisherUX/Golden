import React from "react";
import * as Style from "./style";
import { Container } from "components/Container/style";
import { data } from "./data";
import { Handle12, Handle13, TickBox } from "assets/images/index";

const AboutProducts = () => {
  return (
    <Style.ComponentWrapper>
      <Container>
        <Style.ContentWrapper>
          {data.map( el => {
            return (
              <Style.ContentEntries key={el.id}>
                <Style.EntriesTitle>{el.title}</Style.EntriesTitle>
                <Style.EntriesTextTop>{el.topText}</Style.EntriesTextTop>

                <Style.FeaturesWrapper>
                  <Style.Feature>
                    <TickBox />
                    <Style.FeatureText>Межкомнатую дверь</Style.FeatureText>
                  </Style.Feature>

                  <Style.Feature>
                    <TickBox />
                    <Style.FeatureText>Деревянную дверь</Style.FeatureText>
                  </Style.Feature>

                  <Style.Feature>
                    <TickBox />
                    <Style.FeatureText>Межкомнатую дверь</Style.FeatureText>
                  </Style.Feature>

                  <Style.Feature>
                    <TickBox />
                    <Style.FeatureText>Деревянную дверь</Style.FeatureText>
                  </Style.Feature>
                </Style.FeaturesWrapper>

                <Style.EntriesTextBottom>{el.bottomText}</Style.EntriesTextBottom>
              </Style.ContentEntries>
            )
          })}

          <Style.ContentImg src={Handle12} />
        </Style.ContentWrapper>

        <Style.ContentWrapper>
          <Style.ContentImg src={Handle13} />
          {data.map( el => {
            return (
              <Style.ContentEntries key={el.id}>
                <Style.EntriesTitle>{el.title}</Style.EntriesTitle>
                <Style.EntriesTextTop>{el.topText}</Style.EntriesTextTop>
                <Style.EntriesTextBottom>{el.bottomText}</Style.EntriesTextBottom>
              </Style.ContentEntries>
            )
          })};
        </Style.ContentWrapper>
      </Container>
    </Style.ComponentWrapper>
  );
};

export default AboutProducts;
