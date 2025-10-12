import React from "react"
import Navbar from "../Components/Navbar"
import RankedContestants from "../Components/RankedContestants"
import TopThree from "../Components/TopThree"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopThree />
      <RankedContestants />
      <Footer />
    </div>
  )
}

export default Home
