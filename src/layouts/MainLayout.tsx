import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import navItems from "../data/config/nav.json";
import Footer from "../components/nav/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="relative">
      <NavBar items={navItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
