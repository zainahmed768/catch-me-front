import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import TermsCondition from "../pages/policy/TermsCondition";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
// import WOW from "wowjs";
import "animate.css";
const PublicRoutes = () => {
  // useEffect(() => {
  //   const wow = new WOW.WOW({
  //     live: false, // If true, updates Wow.js when new elements are added dynamically
  //   });
  //   wow.init();
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
