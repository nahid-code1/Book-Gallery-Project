import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
