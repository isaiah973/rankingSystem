import React from "react"
import Navbar from "../Components/Navbar"
import RankedContestants from "../Components/RankedContestants"
import HeroSection from "../Components/HeroSection"
import TopThree from "../Components/TopThree"
import Testing from "./testing"

const Home = () => {
  return (
    <div>
      {/* <Testing /> */}
      <HeroSection />
      <Navbar />
      <TopThree />
      <RankedContestants />
    </div>
  )
}

export default Home
