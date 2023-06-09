import React from 'react';
import * as Style from "./style";
import { data } from "./data";

const Statistic = () => {
  return (
    <Style.StatisticWrapper>
      {data.map((el) => {
        return(
        <Style.StatisticBox key={el.id}>
          <Style.StatisticNum>{el.number}</Style.StatisticNum>
          <Style.StatisticTxt>{el.text}</Style.StatisticTxt>
        </Style.StatisticBox>
        )
      })}
    </Style.StatisticWrapper>
  )
}

export default Statistic;