import React from 'react';
import * as Style from "./style";

const Statistic = () => {
  return (
    <Style.StatisticWrapper>

      <Style.StatisticBox>
        <Style.StatisticNum>5,567</Style.StatisticNum>
        <Style.StatisticTxt>Счастливых клиентов</Style.StatisticTxt>
      </Style.StatisticBox>

      <Style.StatisticBox>
        <Style.StatisticNum>1245</Style.StatisticNum>
        <Style.StatisticTxt>Продуктов на выбор</Style.StatisticTxt>
      </Style.StatisticBox>

      <Style.StatisticBox>
        <Style.StatisticNum>372</Style.StatisticNum>
        <Style.StatisticTxt>Продаж в день</Style.StatisticTxt>
      </Style.StatisticBox>

      <Style.StatisticBox>
        <Style.StatisticNum>20</Style.StatisticNum>
        <Style.StatisticTxt>Лет на рынке</Style.StatisticTxt>
      </Style.StatisticBox>

    </Style.StatisticWrapper>
  )
}

export default Statistic;