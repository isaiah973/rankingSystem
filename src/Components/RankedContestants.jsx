import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contestants from "../Data/Contestants";
import BackToTopButton from "./BackToTopButton";

export default function RankedContestants() {
  const sortedContestants = [...Contestants].sort((a, b) => b.votes - a.votes);
  const rankedContestants = sortedContestants.map((contestant, index) => ({
    ...contestant,
    rank:
      index > 0 && contestant.votes === sortedContestants[index - 1].votes
        ? sortedContestants
            .slice(0, index)
            .findIndex((entry) => entry.votes === contestant.votes) + 1
        : index + 1,
  }));
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContestants = rankedContestants.filter(
    (contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contestant.contestantId.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="contestants" className="bg-[#f4efe4] px-6 py-20 text-[#171713] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-8 border-b border-[#171713]/20 pb-9 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e94b35]">Meet the writers</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] sm:text-6xl">
              All <span className="font-serif font-normal italic text-[#e94b35]">contestants</span>
            </h2>
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-[#171713]/20 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#e94b35] focus-within:ring-2 focus-within:ring-[#e94b35]/10">
            <Search size={19} className="shrink-0 text-[#e94b35]" />
            <span className="sr-only">Search contestants</span>
            <input
              type="search"
              placeholder="Search by name or code"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full bg-transparent text-sm text-[#171713] outline-none placeholder:text-[#171713]/40"
            />
          </label>
        </header>

        <div className="grid grid-cols-2 items-stretch gap-3 pt-8 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredContestants.map((contestant) => (
            <article key={contestant.id} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#171713]/10 bg-white text-[#171713] shadow-[0_8px_28px_rgba(23,23,19,.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(23,23,19,.14)] sm:rounded-2xl">
              <div className="relative h-44 overflow-hidden bg-[#ded8cc] p-1.5 sm:h-64 sm:p-2.5">
                <img src={contestant.profileImage} alt={contestant.name} className="h-full w-full rounded-xl object-contain transition duration-700 group-hover:scale-[1.015]" />
                <div className="pointer-events-none absolute inset-1.5 rounded-xl bg-gradient-to-t from-[#171713]/45 via-transparent to-transparent sm:inset-2.5" />
                <span className="absolute left-2 top-2 grid h-9 min-w-9 place-items-center rounded-full bg-[#171713] px-2 text-xs font-black text-white shadow-md sm:left-4 sm:top-4 sm:h-11 sm:min-w-11 sm:text-sm">
                  #{contestant.rank}
                </span>
                <span className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2 py-1.5 text-[8px] font-black uppercase tracking-[0.1em] text-[#171713] shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-3.5 sm:py-2 sm:text-[9px] sm:tracking-[0.16em]">
                  Code: {contestant.contestantId}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-5">
                <h3 className="line-clamp-2 h-10 text-sm font-black leading-tight tracking-[-0.025em] sm:h-12 sm:text-lg">{contestant.name}</h3>
                <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#171713]/20 pt-3 sm:pt-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#171713]/45">Verified votes</p>
                    <p className="mt-1 text-2xl font-black leading-none tracking-[-0.06em] sm:text-3xl">{contestant.votes.toLocaleString()}</p>
                  </div>
                  <Link
                    to="/payment"
                    aria-label={`Vote for ${contestant.name}`}
                    className="flex h-10 items-center gap-1 rounded-lg bg-[#e94b35] px-2 text-[9px] font-black uppercase tracking-[0.06em] text-white transition hover:bg-[#171713] sm:h-12 sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.1em]"
                  >
                    Vote
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredContestants.length === 0 && (
          <div className="rounded-2xl border border-[#171713]/15 bg-white/50 py-20 text-center">
            <p className="font-serif text-2xl italic text-[#171713]/55">No contestants found.</p>
          </div>
        )}
      </div>
      <BackToTopButton />
    </section>
  );
}
