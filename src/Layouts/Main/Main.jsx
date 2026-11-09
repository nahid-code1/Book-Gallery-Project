import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <p>This is main Layout</p>
    </div>
  );
};

export default Main;
