import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { useNavigation } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useCards from "../Hooks/useCards";

const Root = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <div className=" w-full px-4 md:px-0 py-4 md:py-8 flex-1 bg-base-200">
        {isPageLoading ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
