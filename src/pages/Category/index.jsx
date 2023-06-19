import React from 'react'
import * as Style from "./style";
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import AboutProducts from '../../components/AboutProducts';
// import { useParams } from 'react-router-dom';

const Category = () => {
// const { type } = useParams();
// const [data, setData] = useState([]);
// const categoryText = type.toLocaleLowerCase();
// console.log(categoryText, "I'm here");

  return (
    <Style.CategoryWrapper>
      <Header/>
      <Product/>
      <AboutProducts/>
      <Contact/>
      <Footer/>
    </Style.CategoryWrapper>
  )
}

export default Category;