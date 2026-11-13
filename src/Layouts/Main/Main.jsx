import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Shared/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
