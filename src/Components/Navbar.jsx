import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-[Roboto]">
      <nav className="">
        <div className="flex items-center justify-between w-full px-16 lg:px-40">

          <h1 className="font-bold text-2xl cursor-pointer hover:border-b-2 hidden md:flex">TESWA</h1>

          <ul className="hidden md:flex h-[7vh] space-x-20 items-center justify-center font-semibold">

            <Link to="/">
            <li className="hover:border-b-2 cursor-pointer">Home</li>
            </Link>

            <li className="hover:border-b-2 cursor-pointer">Contact</li>
            <Link to="/payment">
            <li className="hover:border-b-2 cursor-pointer">Payment Page</li>
            </Link>
            <li className="hover:border-b-2 cursor-pointer">Rules</li>
        </ul>
        </div>
        <div>
          <div className="flex items-center justify-between px-5 bg-black pt-5">
            <h1 className="md:hidden text-white">TESWA</h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>

          {/* dropdown menu */}
          {isOpen && (
        <div className="md:hidden bg-[#141821] shadow-lg">
          <a
            className="block px-4 py-2 text-white hover:bg-blue-50"
          >
            Home
          </a>
          <a className="block px-4 py-2 text-white hover:bg-blue-50">
            Contestants
          </a>
          <a
            className="block px-4 py-2 text-white hover:bg-blue-400">
            About
          </a>

          <a className="block px-4 py-2 text-white hover:bg-blue-50"
          >
            Contact
          </a>
        </div>
        )}

        </div>
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