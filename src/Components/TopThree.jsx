import React from "react";
import Contestants from "../Data/Contestants";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TopThree = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Sort by highest votes
  const contestantCopy = [...Contestants].sort((a, b) => b.votes - a.votes);

  const topThree = contestantCopy.slice(0, 3);

  return (
    <section className="py-16 px-5 md:px-10 max-w-7xl mx-auto font-[Roboto]">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
          Leaderboard
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          🏆 Top 3 Contestants
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          The contestants currently leading the competition
        </p>
      </div>

      {/* Cards */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
      >
        {topThree.map((contestant, index) => (
          <div
            key={contestant.id}
            className={`relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:-translate-y-3
              
              ${
                index === 0
                  ? "border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.65)] md:scale-105"
                  : index === 1
                    ? "border-4 border-gray-300 shadow-[0_0_35px_rgba(209,213,219,0.65)]"
                    : "border-4 border-orange-400 shadow-[0_0_35px_rgba(251,146,60,0.65)]"
              }
            `}
          >
            {/* Premium glow background */}
            <div
              className={`absolute inset-0 opacity-20 blur-3xl
                ${
                  index === 0
                    ? "bg-yellow-300"
                    : index === 1
                      ? "bg-gray-300"
                      : "bg-orange-300"
                }
              `}
            ></div>

            {/* Rank Badge */}
            <div
              className={`absolute top-4 left-4 z-20 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg
                ${
                  index === 0
                    ? "bg-yellow-500"
                    : index === 1
                      ? "bg-gray-500"
                      : "bg-orange-500"
                }
              `}
            >
              {index === 0 ? "🥇 1st" : index === 1 ? "🥈 2nd" : "🥉 3rd"}
            </div>

            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={contestant.profileImage}
                alt={contestant.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Contestant info */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <p className="text-xs uppercase tracking-widest opacity-80">
                  Contestant Code
                </p>

                <p className="font-semibold text-sm mb-2">
                  {contestant.contestantId}
                </p>

                {/* Better long-name handling */}
                <h3 className="text-xl md:text-2xl font-bold leading-tight break-words">
                  {contestant.name}
                </h3>
              </div>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 p-6 flex flex-col h-[220px]">
              {/* Votes */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Total Votes
                </p>

                <div className="flex items-end gap-2">
                  <h1 className="text-5xl font-extrabold text-gray-900 leading-none">
                    {inView && (
                      <CountUp
                        start={0}
                        end={contestant.votes}
                        duration={2.5}
                        separator=","
                      />
                    )}
                  </h1>

                  <span className="text-gray-500 mb-1">votes</span>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Vote button */}
              <Link to="/payment" className="mt-auto">
                <button
                  className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:scale-[1.03]
                    
                    ${
                      index === 0
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                        : index === 1
                          ? "bg-gradient-to-r from-gray-500 to-gray-700"
                          : "bg-gradient-to-r from-orange-500 to-red-500"
                    }
                  `}
                >
                  Vote Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopThree;

// import React from "react"
// import Contestants from "../Data/Contestants"
// import { Link } from "react-router-dom";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const TopThree = () => {
//   const { ref, inView } = useInView({ triggerOnce: true });

//   const ConstestantCopy = [...Contestants].sort((a, b) => b.votes - a.votes);
//     const topThree = ConstestantCopy.slice(0, 3);

//    topThree.map((single, index) => {
//       // key=single.id;
//       // const newTopThree = single.push(contestantPrize);
//       single.contestantPrize=null;
//       console.log(single);

//     });

//   return (
//     <div  className="py-12 px-10 max-w-6xl mx-auto text-center font-[Roboto]">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">🏆 Top 3 Contestants</h2>

//         <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
//           {topThree.map((contestant, index) => (
//             <div
//               key={contestant.id}

//               className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
//                 index === 0
//                   ? "border-4 border-yellow-400"
//                   : index === 1
//                   ? "border-4 border-gray-400"
//                   : "border-4 border-orange-400"
//               }`}
//             >
//               <div  className="w-full h-72 object-cover">
//                 <img
//                 src={contestant.profileImage}
//                 alt={contestant.name}
//                 className="w-full h-full object-cover"
//               />
//               </div>
//               <div className="p-6">
//                 <div  className="flex-col ">
//                   <p className="text-gray-500 italic text-sm mt-[-5px]"><span className="font-bold">Code</span>:{contestant.contestantId}</p>

//                   <h3 className="mt-1 text-2xl font-light text-gray-500">
//                   {contestant.name.toUpperCase()}
//                   </h3>
//                 </div>
//                 <div  className="flex items-center justify-center gap-1">
//                   <p  className="text-gray-700 p-0 text-4xl tracking-tighter font-extrabold"> {inView && <CountUp start={0} end={contestant.votes} duration={2.5} separator="," />}</p>
//                   <span className="text-sm font-extralight">votes</span>
//                 </div>
//                 {/* <p className="text-3xl font-bold mt-2 text-green-600">
//                   {index === 0
//                     ? contestant.contestantPrize="₦150000"
//                     : index === 1
//                     ? contestant.contestantPrize="₦100000"
//                     : contestant.contestantPrize="₦50000"}
//                 </p> */}
//                 {/* {contestant.prize && (
//                   <p className="text-lg font-bold mt-2 text-green-600">
//                     {contestant.prize}
//                   </p>
//                 )} */}
//                 <p className="mt-3 text-sm text-gray-400">
//                   {index === 0
//                     ? "🥇 1st Place"
//                     : index === 1
//                     ? "🥈 2nd Place"
//                     : "🥉 3rd Place"}
//                 </p>
//                 <Link to="/payment">
//                 <button className="w-[75%] border-2 bg-black text-white px-7 py-4 mt-4 rounded-md hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black">VOTE</button>

//                 </Link>

//               </div>
//             </div>
//           ))}
//         </div>
//       {/* <h1 className="text-center pt-4">Top Three Contestants</h1>
//        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//         {topThree.map((contestant) => (
//         <div
//           key={contestant.id}
//           className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center"
//         >
//           <div className=" w-48 h-48 flex items-center justify-center text-xl font-bold text-gray-600">
//             <img className="rounded-[50%] w-full h-full object-cover" src={contestant.profileImage} alt="" /> */}
//             {/* {contestant.name.charAt(0)} */}
//           {/* </div>
//           <h2 className="mt-4 text-lg font-semibold">{contestant.name}</h2>
//           <p className="text-gray-700 text-4xl tracking-tight font-extrabold"><span className="tracking-tighter">{contestant.votes}</span> <span className="text-sm font-extralight">votes</span></p>

//           <button className="w-56 bg-black text-white px-7 py-2 ">VOTE</button>
//         </div>
//       ))}
//     </div> */}
//     </div>
//   )
// }

// export default TopThree
