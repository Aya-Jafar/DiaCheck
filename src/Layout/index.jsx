import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({}) => {
  return (
    <>
    <NavBar />
    <div className='pt-10 overflow-hidden'>
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Layout;
