import React from "react";

export default function RulesPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1a2421] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-3">ECHOES OF VOICES – Voting Rules</h1>
          <p className="text-lg text-gray-200">
            Please read these rules carefully before casting your votes.
          </p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl mt-10 p-8 w-11/12 md:w-4/5">
        <RuleItem
          number="1"
          title="Proof of Vote Submission"
          text="Once you vote for your favorite contestant, kindly click the WhatsApp icon and forward your payment receipt to the organizers for verification. Failure to do this means your votes will not be recorded."
        />

        <RuleItem
          number="2"
          title="Support Your Favorite Contestant"
          text="Your votes go a long way in supporting your favorite contestant. The contestant with the highest number of verified votes stands a strong chance of winning and receives 100% recognition."
        />

        <RuleItem
          number="3"
          title="Voting Duration"
          text="Voting starts by 6am and ends by 9pm every day until the voting stage comes to an end. Votes sent after the closing time will not be counted."
        />

        <RuleItem
          number="4"
          title="Multiple Voting"
          text="You can vote as many times as you wish to increase your favorite contestant’s chances. Each vote must be verified through WhatsApp as stated in Rule 1."
        />

        <RuleItem
          number="5"
          title="No Refund Policy"
          text="All votes are final and non-refundable once payment is made and verified."
        />

        <RuleItem
          number="6"
          title="Fair Play"
          text="Any attempt to manipulate or falsify votes will lead to automatic disqualification of the contestant involved."
        />

        <div className="text-center mt-10">
          <a
            href="/"
            className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Home
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 mt-10">
        © {new Date().getFullYear()} Echoes of Voices. All rights reserved.
      </footer>
    </div>
  );
}

// item component
function RuleItem({ number, title, text }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-orange-600 mb-2">
        {number}. {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
