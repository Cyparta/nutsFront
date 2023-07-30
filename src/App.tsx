import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import React from "react";
import LinkNav from "./components/navbar/LinkNav";
import Shop from "./pages/Shop";
import { AnimatePresence } from "framer-motion";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop/1" element={<ProductDetails />} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
