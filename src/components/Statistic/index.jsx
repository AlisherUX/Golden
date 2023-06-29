import React from 'react';
import * as Style from "./style";
import { data } from "./data";

const Statistic = () => {
  return (
    <Style.StatisticWrapper color={true}>
      {data.map((el) => {
        return(
        <Style.StatisticBox key={el.id}>
          <Style.StatisticNum color={true}>{el.number}</Style.StatisticNum>
          <Style.StatisticTxt color={true}>{el.text}</Style.StatisticTxt>
        </Style.StatisticBox>
        )
      })}
    </Style.StatisticWrapper>
  )
}

export default Statistic;