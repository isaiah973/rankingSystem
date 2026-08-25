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
    gradient: "linear-gradient(135deg, #fff3a6 0%, #f5c542 48%, #c99518 100%)",
    glow: "rgba(245, 197, 66, .38)",
    icon: Crown,
    order: "md:order-2 md:-translate-y-5",
  },
  {
    place: "2nd Place",
    medal: "Silver",
    color: "#7b858d",
    tint: "#dfe3e6",
    gradient: "linear-gradient(135deg, #f8fbff 0%, #c8d2da 50%, #87949e 100%)",
    glow: "rgba(135, 148, 158, .3)",
    icon: Medal,
    order: "md:order-1",
  },
  {
    place: "3rd Place",
    medal: "Bronze",
    color: "#9b5b35",
    tint: "#e7c2a8",
    gradient: "linear-gradient(135deg, #ffd1ae 0%, #d9854f 50%, #934d2a 100%)",
    glow: "rgba(217, 133, 79, .34)",
    icon: Award,
    order: "md:order-3",
  },
];

const TopThree = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const topThree = [...Contestants].sort((a, b) => b.votes - a.votes).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-12 text-[#171713] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#f5c542]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#d9854f]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
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
                className={`group relative overflow-hidden rounded-[2rem] border-[3px] bg-[#fffaf0] transition duration-300 hover:-translate-y-2 ${rank.order}`}
                style={{ borderColor: rank.color, boxShadow: `0 20px 48px ${rank.glow}` }}
              >
                <div className="relative flex items-center justify-between overflow-hidden px-6 py-5" style={{ backgroundImage: rank.gradient }}>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-serif text-8xl font-black italic text-white/20">{index + 1}</span>
                  <div>
                    <p className="relative text-[9px] font-black uppercase tracking-[0.2em] text-[#171713]/50">Podium</p>
                    <p className="relative mt-1 text-lg font-black uppercase tracking-[-0.02em] text-[#171713]">{rank.place}</p>
                  </div>
                  <span className="relative grid h-14 w-14 place-items-center rounded-full border-2 border-white/70 bg-[#171713] text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <RankIcon size={25} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-2xl border-2 bg-[#ded8cc] sm:h-72 md:h-64 lg:h-72" style={{ borderColor: rank.tint }}>
                  <img
                    src={contestant.profileImage}
                    alt={contestant.name}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-sm" style={{ backgroundColor: rank.color }}>
                    Code: {contestant.contestantId}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: rank.color, boxShadow: `0 0 0 5px ${rank.tint}` }} />
                    <p className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: rank.color }}>{rank.medal} contender</p>
                  </div>
                  <h3 className="mt-2 min-h-12 text-xl font-black uppercase leading-tight tracking-[-0.03em]">{contestant.name}</h3>

                  <div className="my-5 flex items-end justify-between border-y border-[#171713]/15 py-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#171713]/45">Verified votes</span>
                    <span className="text-4xl font-black leading-none tracking-[-0.06em]" style={{ color: rank.color }}>
                      {inView && <CountUp start={0} end={contestant.votes} duration={2} separator="," />}
                    </span>
                  </div>

                  <Link
                    to="/payment"
                    className="flex items-center justify-between rounded-xl px-5 py-3.5 text-xs font-black uppercase tracking-[0.13em] text-[#171713] shadow-md transition hover:scale-[1.02] hover:brightness-105"
                    style={{ backgroundImage: rank.gradient }}
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
