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
import Favourite from "./pages/Favourite";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Favourite />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/discount" element={<DiscountSale />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/detail/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
