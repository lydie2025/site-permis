// src/layouts/Main.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Main = () => {
  const location = useLocation();

  // Ici tu définis sur quelles routes tu veux cacher Header/Footer
  const hideHeaderRoutes = ["/about"]; 
  const hideFooterRoutes = ["/about"];

  return (
    <>
      <Topbar />
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Navbar />
      <Outlet /> {/* les pages s’affichent ici */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Main;
