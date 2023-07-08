import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Delivery from "./pages/Delivery";
import DiscountSale from "./pages/DiscountSale";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import "react-loading-skeleton/dist/skeleton.css";
import BarLoader from "react-spinners/BarLoader";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? 
        <div className="loader-page">
          <BarLoader color="#4295E4" width={300} height={8}/>
        </div>
       : 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/discount" element={<DiscountSale />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/detail/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
