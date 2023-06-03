import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import DiscountSale from "./pages/DiscountSale";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/discount" element={<DiscountSale />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;