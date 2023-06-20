import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Style from "./style";
import axios from 'axios';

const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);

//   const getData = async () => {
//     const res = await axios.get(`${process.env.REACT_APP_PRODUCTCARD_URL}/${id}`);
//     if (res.status == 200) {
//         setProduct(res.data);
//     }
// };

// useEffect(() => {
//     getData();
// }, [id]);

  return (
    <div>
      Product
    <Style.ProductImg/>
    <Style.ProductInfo/>
    </div>
  )
}

export default Product;