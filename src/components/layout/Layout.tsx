import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";
import NewSletter from "../home/NewSletter";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <NewSletter />
      <Footer />
    </>
  );
};

export default Layout;
