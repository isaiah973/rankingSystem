import React from "react";
import Contestants from "../Data/Contestants";
import { useState } from "react";
import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";

export default function RankedContestants() {
  // Sort contestants by votes (descending)
  const rankedContestants = [...Contestants].sort((a, b) => b.votes - a.votes);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContestants = rankedContestants.filter(
    (contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contestant.contestantId.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-5 bg-gray-50 font-[Roboto]">
      <div>
        <h1 className="mt-6 text-3xl font-bold mb-3 text-center">
          All Contestants
        </h1>

        <div className="flex items-center justify-end mb-5">
          <img className="w-3" src="/icons/search (1).png" alt="search icon" />

          <input
            className=" pl-1 outline-none border-gray-400 font-light placeholder:text-sm"
            type="text"
            placeholder="Search Contestants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="xl:px-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {filteredContestants.map((contestant, index) => (
          <div
            key={contestant.id}
            className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Ranking Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              #{index + 1}
            </div>

            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={contestant.profileImage}
                alt={contestant.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-xs opacity-80">
                  Code: {contestant.contestantId}
                </p>
                <h2 className="text-sm md:text-base font-bold leading-tight line-clamp-2">
                  {contestant.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
              {/* Votes */}
              <div className="mb-4">
                <p className="text-3xl font-extrabold text-gray-900">
                  {contestant.votes}
                </p>
                <span className="text-xs text-gray-500">votes</span>
              </div>

              {/* Spacer pushes button down */}
              <div className="flex-grow"></div>

              {/* Button */}
              <Link to="/payment" className="block mt-auto">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-md hover:scale-105 hover:shadow-lg transition">
                  Vote Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredContestants.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No contestants found.</p>
      )}
      <BackToTopButton />
    </div>
  );
}

//old card design
// {filteredContestants.map((contestant, index) => (
//           <div
//             key={contestant.id}
//             className="mx-1 shadow-2xl lg:w-fit bg-gray-000 space-y-4 flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300 "
//           >
//             {/* <div className="w-full"> */}
//             {/* <div className="border-2 border-yellow-400 w-10 h-10 rounded-[50%] bg-yellow-400 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-gray-600 mb-2">
//               {index + 1}
//             </span>
//               </div> */}
//             {/* </div> */}
//             <div className="h-60 md:h-80 w-full lg:w-60 lg:h-72">
//               <img
//                 src={contestant.profileImage}
//                 alt={contestant.name}
//                 className="w-full h-full object-cover border-2 border-white rounded-t-4xl lg:w-60 lg:h-72"
//               />
//             </div>
//             <div>
//               <div className="w-[100%]">
//                 <p className="text-center italic p-0 text-sm">
//                   {" "}
//                   <b>Code: </b>
//                   {contestant.contestantId}
//                 </p>
//                 <h2 className="text-sm text-center font-bold text-gray-900 leading-tight w-full">
//                   {contestant.name}
//                 </h2>
//               </div>

//               <div className="flex items-center justify-center gap-1">
//                 <p className="text-gray-700 p-0 text-4xl tracking-tighter font-extrabold">
//                   {contestant.votes}
//                 </p>
//                 <span className="text-sm font-extralight">votes</span>
//               </div>
//             </div>
//             <Link
//               to="/payment"
//               className="w-full flex items-center justify-center mt-[-15px]"
//             >
//               <button className="rounded-md w-[70%] bg-black text-white mb-2 px-7 font-bold border-2 py-3 hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black">
//                 VOTE
//               </button>
//             </Link>
//           </div>
//         ))}
