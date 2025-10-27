import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
       
        <h2 className="text-xl font-bold mb-4 md:mb-0">TESWA</h2>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            Contact
          </Link>
          <Link to="/rules" className="hover:text-gray-300 transition">
            Rules
          </Link>
          <Link to="/payment" className="hover:text-gray-300 transition">
            Payment Page
          </Link>
          <Link to="/events" className="hover:text-gray-300 transition">
            Upcoming Events
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-3 pt-1.5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TESWA Competition 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
