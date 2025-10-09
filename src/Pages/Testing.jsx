import React from "react";

const Testing = () => {
  const contestants = [
    { id: 1, name: "Jane Doe", image: "/images/jane.jpg", votes: 1500, prize: "₦150,000" },
    { id: 2, name: "John Smith", image: "/images/john.jpg", votes: 1200, prize: "₦100,000" },
    { id: 3, name: "Mary Johnson", image: "/images/mary.jpg", votes: 950, prize: "₦50,000" },
    { id: 4, name: "Michael Brown", image: "/images/michael.jpg", votes: 880, prize: null },
    { id: 5, name: "Sarah Lee", image: "/images/sarah.jpg", votes: 850, prize: null },
    { id: 6, name: "David Wilson", image: "/images/david.jpg", votes: 820, prize: null },
    { id: 7, name: "Emily Davis", image: "/images/emily.jpg", votes: 790, prize: null },
    { id: 8, name: "Daniel Garcia", image: "/images/daniel.jpg", votes: 760, prize: null },
    { id: 9, name: "Olivia Martinez", image: "/images/olivia.jpg", votes: 740, prize: null },
    { id: 10, name: "James Anderson", image: "/images/james.jpg", votes: 700, prize: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="h-[50vh] bg-gradient-to-r from-blue-700 to-purple-600 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-wide">
          SPOKEN WORD
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold">
          AND PUBLIC SPEAKING COMPETITION 2025
        </h2>
      </section>

      {/* Top 3 Contestants Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🏆 Top 3 Contestants</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contestants.slice(0, 3).map((contestant, index) => (
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
              <img
                src={contestant.image}
                alt={contestant.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {contestant.name}
                </h3>
                <p className="text-gray-500 mt-1">{contestant.votes} votes</p>
                {contestant.prize && (
                  <p className="text-lg font-bold mt-2 text-green-600">
                    {contestant.prize}
                  </p>
                )}
                <p className="mt-3 text-sm text-gray-400">
                  {index === 0
                    ? "🥇 1st Place"
                    : index === 1
                    ? "🥈 2nd Place"
                    : "🥉 3rd Place"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Contestants */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Other Contestants</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contestants.slice(3).map((contestant) => (
            <div
              key={contestant.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={contestant.image}
                alt={contestant.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {contestant.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{contestant.votes} votes</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testing;
