import React from "react";
// import Login from './Login'
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/home/LandingPage";
import LinkNav from "../components/navbar/LinkNav";
import Services from "../components/home/Services";
import Featured from "../components/home/Featured";
import NewSletter from "../components/home/NewSletter";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import Reviewcandy from "../components/review/Reviewcandy";
import ShopSection from "../components/home/ShopSection";

function Home() {
  return (
    <>
      <Layout>

        {/* <Navbar /> */}
        <LandingPage />
        <Services />
        <Reviewcandy />
        <Featured />

        <ShopSection />
      </Layout>

    </>
  );
}

export default Home;
