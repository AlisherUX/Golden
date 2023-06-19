import React from "react";
import * as Style from "./style";
import { Container } from "../Container/style";
import { Handle12, Handle13, TickBox } from "../../assets/images/index";

const AboutProducts = () => {
  return (
    <Style.ComponentWrapper>
      <Container>
        <Style.ContentWrapper>
          <Style.ContentEntries>
            <Style.EntriesTitle>
              Eget quis quam metus, scelerisque.
            </Style.EntriesTitle>
            <Style.EntriesTextTop>
              Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu
              porttitor molestie massa porttitor. Quisque at turpis ut proin eu
              et magna etiam rhoncus.
            </Style.EntriesTextTop>

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

            <Style.EntriesTextBottom>
              Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra
              interdum in leo. Nullam ullamcorper id enim fermentum integer
              praesent bibendum. In ullamcorper purus scelerisque malesuada et
              egestas. Ac dictumst mauris sed facilisis.
            </Style.EntriesTextBottom>
          </Style.ContentEntries>

          <Style.ContentImg src={Handle12} />
        </Style.ContentWrapper>

        <Style.ContentWrapper>
          <Style.ContentImg src={Handle13} />
          <Style.ContentEntries>
            <Style.EntriesTitle>
              Eget quis quam metus, scelerisque.
            </Style.EntriesTitle>
            <Style.EntriesTextTop>
              Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu
              porttitor molestie massa porttitor. Quisque at turpis ut proin eu
              et magna etiam rhoncus.
            </Style.EntriesTextTop>

            <Style.EntriesTextBottom>
              Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra
              interdum in leo. Nullam ullamcorper id enim fermentum integer
              praesent bibendum. In ullamcorper purus scelerisque malesuada et
              egestas. Ac dictumst mauris sed facilisis.
            </Style.EntriesTextBottom>
          </Style.ContentEntries>
        </Style.ContentWrapper>
      </Container>
    </Style.ComponentWrapper>
  );
};

export default AboutProducts;
