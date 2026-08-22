import { ArrowUpRight, Award, Crown, Medal } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Contestants from "../Data/Contestants";

const ranks = [
  {
    place: "1st Place",
    medal: "Gold",
    color: "#c99518",
    tint: "#f7e7a5",
    icon: Crown,
    order: "md:order-2 md:-translate-y-5",
  },
  {
    place: "2nd Place",
    medal: "Silver",
    color: "#7b858d",
    tint: "#dfe3e6",
    icon: Medal,
    order: "md:order-1",
  },
  {
    place: "3rd Place",
    medal: "Bronze",
    color: "#9b5b35",
    tint: "#e7c2a8",
    icon: Award,
    order: "md:order-3",
  },
];

const TopThree = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const topThree = [...Contestants].sort((a, b) => b.votes - a.votes).slice(0, 3);

  return (
    <section className="overflow-hidden bg-[#f4efe4] px-6 pb-16 pt-12 text-[#171713] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#e94b35]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e94b35]">Live leaderboard</p>
            <span className="h-px w-10 bg-[#e94b35]" />
          </div>
          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.055em] sm:text-6xl">
            Leading <span className="font-serif font-normal italic text-[#e94b35]">writers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#171713]/55">
            The three contestants with the highest number of verified votes.
          </p>
        </header>

        <div ref={ref} className="mt-14 grid items-end gap-7 md:grid-cols-3">
          {topThree.map((contestant, index) => {
            const rank = ranks[index];
            const RankIcon = rank.icon;

            return (
              <article
                key={contestant.id}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#171713]/15 bg-[#fffaf0] shadow-[0_18px_45px_rgba(23,23,19,.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(23,23,19,.18)] ${rank.order}`}
              >
                <div className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: rank.tint }}>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-55">Podium</p>
                    <p className="mt-1 text-sm font-black uppercase tracking-[0.08em]" style={{ color: rank.color }}>{rank.place}</p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full text-white shadow-md" style={{ backgroundColor: rank.color }}>
                    <RankIcon size={22} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-2xl bg-[#ded8cc] sm:h-72 md:h-64 lg:h-72">
                  <img
                    src={contestant.profileImage}
                    alt={contestant.name}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#171713]/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    Code: {contestant.contestantId}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: rank.color }}>{rank.medal} contender</p>
                  <h3 className="mt-2 min-h-12 text-xl font-black uppercase leading-tight tracking-[-0.03em]">{contestant.name}</h3>

                  <div className="my-5 flex items-end justify-between border-y border-[#171713]/15 py-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#171713]/45">Verified votes</span>
                    <span className="text-4xl font-black leading-none tracking-[-0.06em]" style={{ color: rank.color }}>
                      {inView && <CountUp start={0} end={contestant.votes} duration={2} separator="," />}
                    </span>
                  </div>

                  <Link
                    to="/payment"
                    className="flex items-center justify-between rounded-xl px-5 py-3.5 text-xs font-black uppercase tracking-[0.13em] text-white transition hover:brightness-90"
                    style={{ backgroundColor: rank.color }}
                  >
                    Vote for this writer
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopThree;
