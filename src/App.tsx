import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";
import LinkNav from "./components/navbar/LinkNav";
import Shop from "./pages/Shop";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
