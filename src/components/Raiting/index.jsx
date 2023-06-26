import { Rating } from '@mui/material';
import * as Style from "./style"
import React from 'react';

const Raiting = () => {
  return (
    <Style.RaitingWrapper>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Style.Reviews>(12) отзывов</Style.Reviews>
    </Style.RaitingWrapper>
  )
}

export default Raiting;