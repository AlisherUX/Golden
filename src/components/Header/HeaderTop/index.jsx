import React from 'react'
import { HeaderTopWrapper, TextContent, ReCallText, DiscountText } from './style';

const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
        <TextContent>
            <DiscountText>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</DiscountText>
            <ReCallText href='tel:+9989999999'>Обратный звонок</ReCallText>
        </TextContent>
    </HeaderTopWrapper>
  )
}

export default HeaderTop;