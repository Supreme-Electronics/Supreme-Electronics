import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import navItems from "../data/config/nav.json";
import Footer from "../components/nav/Footer";
import ScrollToTop from "../components/nav/ScrollToTop";

const MainLayout: React.FC = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <NavBar items={navItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
