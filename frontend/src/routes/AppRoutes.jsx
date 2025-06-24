import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Careers from "../pages/Careers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
};

export default AppRoutes;
