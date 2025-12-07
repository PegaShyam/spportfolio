import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import ScrollToTop from "../Common/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
