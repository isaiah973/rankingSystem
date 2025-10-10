import React from "react"
import Navbar from "../Components/Navbar"
import RankedContestants from "../Components/RankedContestants"
import TopThree from "../Components/TopThree"

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopThree />
      <RankedContestants />
    </div>
  )
}

export default Home
