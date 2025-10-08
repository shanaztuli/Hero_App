import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <div className="max-w-[1250px] mx-auto w-full px-4 md:px-0 py-4 md:py-8 flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
