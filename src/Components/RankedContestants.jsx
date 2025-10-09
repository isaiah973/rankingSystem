import React from "react";
import Contestants from "../Data/Contestants";
import { useState } from "react";

export default function RankedContestants() {
  // Sort contestants by votes (descending)
  const rankedContestants = [...Contestants].sort((a, b) => b.votes - a.votes);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredContestants = rankedContestants.filter((contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
  return (
    
    <div className="p-28 bg-gray-200 font-[Roboto]">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">Contestant Rankings</h1>
        <div className="flex items-center justify-end">
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
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 ">
        {filteredContestants.map((contestant, index) => (
          <div
            key={contestant.id}
            className="bg-gray-000 p-6 flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-full">
              <div className="border-2 border-yellow-400 w-10 h-10 rounded-[50%] bg-yellow-400 flex align-center justify-center">
                <span className="text-3xl font-bold text-gray-600 mb-2">
              {index + 1}
            </span>
              </div>
            </div>
            <div className="h-72 w-56 object-fit-contain">
              <img
              src={contestant.profileImage}
              alt={contestant.name}
              className="w-full h-full object-cover border-2 border-white rounded-t-4xl"
            />
            </div>
            <h2 className="mt-1 text-lg font-light text-gray-900">{contestant.name.toUpperCase()}</h2>
            <p className="text-gray-700 text-4xl tracking-tight font-extrabold"><span className="tracking-tighter">{contestant.votes}</span> <span className="text-sm font-extralight">votes</span></p>
            <button className="w-56 bg-black text-white px-7 py-2 ">VOTE</button>
          </div>
        ))}
      </div>

       {filteredContestants.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No contestants found.
        </p>
      )}
    </div>
  );
};
