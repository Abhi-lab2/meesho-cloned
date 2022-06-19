import React from "react";
import { Route, Routes } from "react-router-dom";
import { CheckoutNew } from "../Checkout/Checkout";
// import Footer from "../components/Footer";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { Cart } from "../Pages/Cart/Cart";
import { Cart1 } from "../Pages/Cart/CartItem";
import { Checkout } from "../Pages/Cart/Checkout";
import { Home } from "../Pages/Home";
import { ProductDetail } from "../Pages/Product/ProductDetail";
import ProductsAll from "../Pages/ProductSubtypes/ProductsAll";
import { ProductTypes } from "../Pages/ProductSubtypes/ProductTypes";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/products/:type" element={<ProductsAll />} />
        <Route path="/products" element={<ProductsAll />} />
        <Route exact path="/products/:type/:subtype" element={<ProductTypes />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        {/* <Route exact path="/cart" element={<Cart1 />}></Route> */}
        {/* <Route exact path="/checkout" element={<Checkout />}></Route> */}
        <Route exact path="/checkout" element={<CheckoutNew />}></Route>
        <Route exact path="/signup" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
