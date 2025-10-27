import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-[Roboto]">
      <nav className="">
        <div className="hidden md:flex items-center justify-between w-full px-16 lg:px-40">
          <Link to="/">
            <h1 className="font-bold text-2xl cursor-pointer hover:border-b-2 hidden md:flex">TESWA</h1>
          </Link>
          <ul className="hidden md:flex h-[7vh] space-x-20 items-center justify-center font-semibold">

            <Link to="/">
            <li className="hover:border-b-2 cursor-pointer">Home</li>
            </Link>

            <Link to="/about">
            <li className="hover:border-b-2 cursor-pointer">About/Contact</li>
            </Link>

            <Link to="/payment">
              <li className="hover:border-b-2 cursor-pointer">Payment Page</li>
            </Link>

            <Link to="/rules">
              <li className="hover:border-b-2 cursor-pointer">Rules</li>
            </Link>
        </ul>
        </div>
        <div>
          <div className="md:hidden flex items-center justify-between py-3 px-5 bg-black">
            
            <Link to="/">
              <h1 className=" text-white">TESWA</h1>
            </Link>
            

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
        <div className="md:hidden bg-[#141821] shadow-lg anim">
          <Link to="/">
          <a
            className="block px-4 py-2 text-white active:bg-gray-600 hover:bg-gray-600"
          >
            Home
          </a>
          </Link>

          <Link to="/payment">
          <a className="block px-4 py-2 text-white active:bg-gray-600 hover:bg-gray-600">
            Payment Page
          </a>
          </Link>


          <Link to="/about">
            <a
              className="block px-4 py-2 text-white active:bg-gray-600 hover:bg-gray-600">
              About/Contact
            </a>
          </Link>  


          <Link to="/rules">
          <a className="block px-4 py-2 text-white active:bg-gray-600 hover:bg-gray-600"
          >
            Rules
          </a>
          </Link> 
        
        </div>
        )}

        </div>
      </nav>
      

    </div>
  )

  
};


export default Navbar