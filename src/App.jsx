import React from "react"
import Home from "./Pages/Home"

import { Routes, Route, Link } from "react-router-dom";
import PaymentPage from "./Pages/PaymentPage";




function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<PaymentPage />} />

      </Routes>

    </>
  )
}

export default App
