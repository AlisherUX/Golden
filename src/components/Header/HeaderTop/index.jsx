import React from 'react'
import * as Style from './style';

const HeaderTop = () => {
  return (
    <Style.HeaderTopWrapper>
        <Style.TextContent>
            <Style.DiscountText>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</Style.DiscountText>
            <Style.ReCallText href='tel:+9989999999'>Обратный звонок</Style.ReCallText>
        </Style.TextContent>
    </Style.HeaderTopWrapper>
  )
}

export default HeaderTop;