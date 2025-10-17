import React from "react"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop";

import { Routes, Route, Link, Router } from "react-router-dom";
import PaymentPage from "./Pages/PaymentPage";
import RulesPage from "./Components/Rules";
import AboutPage from "./Components/AboutPage";




function App() {
 

  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="rule" element={<RulesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
    </>
  )
}

export default App
