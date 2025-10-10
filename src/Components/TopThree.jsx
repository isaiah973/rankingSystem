import React from "react"
import Contestants from "../Data/Contestants"
import { Link } from "react-router-dom";

const TopThree = () => {
  const ConstestantCopy = [...Contestants].sort((a, b) => b.votes - a.votes);
    const topThree = ConstestantCopy.slice(0, 3);


    
   topThree.map((single, index) => {
      // key=single.id;
      // const newTopThree = single.push(contestantPrize);
      single.contestantPrize=null;
      console.log(single);

    });

  return (
    <div className="py-12 px-10 max-w-6xl mx-auto text-center font-[Roboto]">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">🏆 Top 3 Contestants</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {topThree.map((contestant, index) => (
            <div
              key={contestant.id}
              
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                index === 0
                  ? "border-4 border-yellow-400"
                  : index === 1
                  ? "border-4 border-gray-400"
                  : "border-4 border-orange-400"
              }`}
            >
              <div className="w-full h-72 object-cover">
                <img
                src={contestant.profileImage}
                alt={contestant.name}
                className="w-full h-full object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="mt-1 text-2xl font-light text-gray-500">
                  {contestant.name.toUpperCase()}
                </h3>
                <p className="text-gray-700 text-4xl tracking-tight font-extrabold"><span className="tracking-tighter">{contestant.votes}</span> <span className="text-sm font-extralight">votes</span></p>
                <p className="text-3xl font-bold mt-2 text-green-600">
                  {index === 0
                    ? contestant.contestantPrize="₦150000"
                    : index === 1
                    ? contestant.contestantPrize="₦100000"
                    : contestant.contestantPrize="₦50000"}
                </p>
                {/* {contestant.prize && (
                  <p className="text-lg font-bold mt-2 text-green-600">
                    {contestant.prize}
                  </p>
                )} */}
                <p className="mt-3 text-sm text-gray-400">
                  {index === 0
                    ? "🥇 1st Place"
                    : index === 1
                    ? "🥈 2nd Place"
                    : "🥉 3rd Place"}
                </p>
                <Link to="/payment">
                <button className="w-[75%] border-2 bg-black text-white px-7 py-4 mt-4 rounded-md hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black">VOTE</button>
                
                </Link>
                

              </div>
            </div>
          ))}
        </div>
      {/* <h1 className="text-center pt-4">Top Three Contestants</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {topThree.map((contestant) => (
        <div
          key={contestant.id}
          className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center"
        >
          <div className=" w-48 h-48 flex items-center justify-center text-xl font-bold text-gray-600">
            <img className="rounded-[50%] w-full h-full object-cover" src={contestant.profileImage} alt="" /> */}
            {/* {contestant.name.charAt(0)} */}
          {/* </div>
          <h2 className="mt-4 text-lg font-semibold">{contestant.name}</h2>
          <p className="text-gray-700 text-4xl tracking-tight font-extrabold"><span className="tracking-tighter">{contestant.votes}</span> <span className="text-sm font-extralight">votes</span></p>

          <button className="w-56 bg-black text-white px-7 py-2 ">VOTE</button>
        </div>
      ))}
    </div> */}
    </div>
  )
}

export default TopThree
