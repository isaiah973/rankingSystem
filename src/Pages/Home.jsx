import React from "react"
import Navbar from "../Components/Navbar"
import RankedContestants from "../Components/RankedContestants"
import TopThree from "../Components/TopThree"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopThree />
      <RankedContestants />
      <Footer />
    </div>
  )
}

export default Home
