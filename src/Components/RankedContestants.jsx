import React from "react";
import Contestants from "../Data/Contestants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RankedContestants() {
  // Sort contestants by votes (descending)
  const rankedContestants = [...Contestants].sort((a, b) => b.votes - a.votes);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredContestants = rankedContestants.filter((contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
  return (
    
    <div className="p-10 bg-gray-200 font-[Roboto]">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">All Contestants</h1>
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
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-12">
        {filteredContestants.map((contestant, index) => (
          <div
            key={contestant.id}
            className="shadow-2xl bg-gray-000 space-y-4 flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-full">
              <div className="border-2 border-yellow-400 w-10 h-10 rounded-[50%] bg-yellow-400 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600 mb-2">
              {index + 1}
            </span>
              </div>
            </div>
            <div className="h-96 w-full">
              <img
              src={contestant.profileImage}
              alt={contestant.name}
              className="w-full h-full object-cover border-2 border-white rounded-t-4xl"
            />
            </div>
            <div className="w-[100%]">
              <p className="text-center italic">{contestant.contestantId}</p>
              <h2 className="mt-1 text-sm text-center font-light text-gray-900 leading-tight w-full">{contestant.name}</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-gray-700 text-4xl tracking-tighter font-extrabold">{contestant.votes}</p>
            <span className="text-sm font-extralight">votes</span>
            </div>
            <Link to="/payment" className="w-full flex items-center justify-center">
              <button className="rounded-md w-[70%] bg-black text-white mb-2 px-7 font-bold border-2 py-3 hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black">VOTE</button>
            </Link>
            
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
