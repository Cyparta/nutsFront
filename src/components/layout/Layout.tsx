import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";
import NewSletter from "../home/NewSletter";
import LinkNav from "../navbar/LinkNav";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <LinkNav/>
      {children}
      <NewSletter />
      <Footer />
    </>
  );
};

export default Layout;
