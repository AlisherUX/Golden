import React from 'react';
import * as Style from "./style";
import { Container } from '../Container/style';
import { data } from './data';

const WhyOur = () => {
  return (
    <Style.WhyOurWrapper>
        <Container>
            <Style.Title>Почему GoldenService? </Style.Title>
            <Style.BoxContent>
                {data.map((el) => {
                    return(
                            <Style.WhyOurBox key={el.id}>
                                {el.img}
                                <Style.BoxTxt>{el.text}</Style.BoxTxt>
                            </Style.WhyOurBox>
                    )
                })}
            </Style.BoxContent>
        </Container>
    </Style.WhyOurWrapper>
  )
}

export default WhyOur;