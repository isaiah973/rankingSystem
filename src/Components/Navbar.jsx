import React from "react"

const Navbar = () => {
  return (
    <div className="font-[Roboto]">
      <nav>
        <ul className="w-full h-[7vh] flex space-x-20 items-center justify-center">
          <li className="hover:border-b-4">Home</li>
          <li>Contact</li>
          <li>Payment Page</li>
          <li>Rules</li>
        </ul>
      </nav>
      <section className="h-[50vh] bg-black flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-wide">
          SPOKEN WORD
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold">
          AND PUBLIC SPEAKING COMPETITION 2025
        </h2>
      </section>

    </div>
  )
}

export default Navbar
