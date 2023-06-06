import React from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { Box, Incentive } from '../../assets/images';

const WhyOur = () => {
  return (
    <Style.WhyOurWrapper>
        <Container>
                    <Style.WhyOurTitle>Почему GoldenService? </Style.WhyOurTitle>
            <Style.BoxContent>

                <Style.WhyOurBox>
                    <Box/>
                    <Style.BoxTxt>Возврат удвоенной стоимости каждого замка в случае брака.</Style.BoxTxt>
                </Style.WhyOurBox>

                <Style.WhyOurBox>
                    <Incentive/>
                    <Style.BoxTxt>Наносим ваш логотип компании на наш продукт</Style.BoxTxt>
                </Style.WhyOurBox>

                <Style.WhyOurBox>
                    <Box/>
                    <Style.BoxTxt>Возврат удвоенной стоимости каждого замка в случае брака.</Style.BoxTxt>
                </Style.WhyOurBox>

            </Style.BoxContent>
        </Container>
    </Style.WhyOurWrapper>
  )
}

export default WhyOur;