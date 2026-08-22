import {
  ArrowLeft,
  BadgeCheck,
  Ban,
  Clock3,
  ReceiptText,
  Repeat2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const votingRules = [
  {
    title: "Proof of Vote Submission",
    text: "Once you vote for your favorite contestant, kindly click the WhatsApp icon and forward your payment receipt to the organizers for verification. Failure to do this means your votes will not be recorded.",
    icon: ReceiptText,
  },
  {
    title: "Support Your Favorite Contestant",
    text: "Your votes go a long way in supporting your favorite contestant. The contestant with the highest number of verified votes stands a strong chance of winning and receives 100% recognition.",
    icon: BadgeCheck,
  },
  {
    title: "Voting Duration",
    text: "Voting starts by 6am and ends by 10 pm every day until the voting stage comes to an end. Votes sent after the closing time will not be counted.",
    icon: Clock3,
  },
  {
    title: "Multiple Voting",
    text: "You can vote as many times as you wish to increase your favorite contestant’s chances. Each vote must be verified through WhatsApp as stated in Rule 1.",
    icon: Repeat2,
  },
  {
    title: "No Refund Policy",
    text: "All votes are final and non-refundable once payment is made and verified.",
    icon: Ban,
  },
  {
    title: "Fair Play",
    text: "Any attempt to manipulate or falsify votes will lead to automatic disqualification of the contestant involved.",
    icon: ShieldCheck,
  },
];

export default function RulesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4efe4] text-[#171713]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,19,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,19,.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border-[60px] border-[#e94b35]/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] transition hover:text-[#e94b35]"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        <header className="grid gap-7 border-b border-[#171713]/20 py-12 lg:grid-cols-[1fr_420px] lg:items-end lg:py-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#e94b35]" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#e94b35]">
                TESWA Voting Guide
              </p>
            </div>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              Voting
              <span className="block font-serif font-normal italic text-[#e94b35]">Rules</span>
            </h1>
          </div>
          <p className="max-w-md border-l-2 border-[#e94b35] pl-6 text-xl font-medium leading-relaxed text-[#171713]/70">
            Please read these rules carefully before casting your votes.
          </p>
        </header>

        <section className="grid border-l border-t border-[#171713]/20 sm:grid-cols-2 lg:grid-cols-3">
          {votingRules.map((rule, index) => {
            const Icon = rule.icon;

            return (
              <article
                key={rule.title}
                className="group relative min-h-[290px] border-b border-r border-[#171713]/20 bg-[#f4efe4]/80 p-7 transition-colors hover:bg-white/55 lg:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl italic text-[#e94b35]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[#171713]/20 transition group-hover:border-[#e94b35] group-hover:bg-[#e94b35] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                </div>
                <h2 className="mt-8 text-xl font-black uppercase leading-tight tracking-[-0.025em]">
                  {rule.title}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#171713]/65">{rule.text}</p>
              </article>
            );
          })}
        </section>

        <footer className="flex flex-col gap-4 border-b border-[#171713]/20 py-8 text-xs font-bold uppercase tracking-[0.2em] text-[#171713]/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Vote responsibly. Vote fairly.</span>
          <span>© {new Date().getFullYear()} TESWA</span>
        </footer>
      </div>
    </main>
  );
}
