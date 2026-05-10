import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white">
      {/* subtle glow / reflection */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-200 mb-2">
            TESWA Presents
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block">WRITING GAME</span>
            <span className="bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent">
              Season 3
            </span>
          </h1>

          {/* Date badge */}
          {/* <div className="inline-block mt-4 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow">
            <span className="font-semibold text-lg">17th April 2026</span>
          </div> */}

          {/* <p className="mt-6 text-gray-100 max-w-lg leading-relaxed">
            Are you a writer who knows your game? Showcase your storytelling
            skills, compete with talented writers, and stand a chance to win
            amazing prizes.
          </p> */}

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contestants">
              <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                Vote Now
              </button>
            </a>
            <Link to="/about">
              <button className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* Glass card */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
            {/* Prize highlight */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Grand Prize</h3>
              <p className="text-4xl font-extrabold text-yellow-300">
                ₦120,000
              </p>
            </div>

            {/* Other prizes */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-gray-200">1st Runner Up</p>
                <p className="font-bold text-lg">₦100,000</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-gray-200">2nd Runner Up</p>
                <p className="font-bold text-lg">₦80,000</p>
              </div>
            </div>

            {/* Registration */}
            {/* <div className="mt-6 bg-gradient-to-r from-red-600 to-orange-500 p-4 rounded-xl text-center shadow-lg">
              <p className="text-sm">Register with</p>
              <p className="text-2xl font-bold">₦2000</p>
            </div> */}

            {/* Contact */}
            <div className="mt-4 text-center text-sm text-gray-200">
              <p className="font-semibold">09037544253</p>
              <p>Doreen Adekunle (Organizer)</p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}

// import React from "react"

// const HeroSection = () => {

//   const [isVisible, setIsVisible] = React.useState(false);

//    React.useEffect(() => {

//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div>
//       <section className="h-[50vh] bg-[#1a2421] flex flex-col justify-center items-center text-white text-center px-4">
//         <div className={`transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-y-full opacity-0"}`}>
//           <h1 className="font-bold text-md">ECHOES OF VOICES'</h1>
//           <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-wide">
//             SPOKEN WORD
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-semibold">
//             AND PUBLIC SPEAKING COMPETITION 2025
//           </h2>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default HeroSection
