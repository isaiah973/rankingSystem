import React from "react"
import Home from "./Pages/Home"
import ScrollToTop from "./Components/ScrollToTop";

import { Routes, Route, Link, Router } from "react-router-dom";
import PaymentPage from "./Pages/PaymentPage";




function App() {
 

  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="payment" element={<PaymentPage />} />
        </Routes>
    </>
  )
}

export default App
