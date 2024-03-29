import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
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
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? 
        <div className="loader-page">
          <BarLoader color="#4295E4" width={200} height={8}/>
        </div>
       : 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
