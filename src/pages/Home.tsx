import React from "react";
// import Login from './Login'
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/home/LandingPage";
import Services from "../components/home/Services";
import Featured from "../components/home/Featured";
import NewSletter from "../components/home/NewSletter";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <LandingPage />
      <Services />
      <Featured />
      <NewSletter />
      <Footer />
    </>
  );
}

export default Home;
