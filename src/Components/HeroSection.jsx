import { ArrowDownRight, PenLine, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4efe4] text-[#171713] lg:h-[68vh] lg:min-h-[570px] lg:max-h-[690px]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,19,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,19,.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-[#e94b35]/10 md:h-[480px] md:w-[480px]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-9 sm:px-10 lg:px-16 lg:py-10">
        <div className="flex flex-wrap items-center gap-4">
          <span className="h-px w-10 bg-[#e94b35]" />
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#e94b35]">
            TESWA Presents
          </p>
          <span className="rounded-full border border-[#171713]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
            Open to writers
          </span>
        </div>

        <div className="grid flex-1 items-center gap-10 py-9 lg:grid-cols-[1fr_310px] lg:gap-14 lg:py-7">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#171713]/55">
              <PenLine size={16} strokeWidth={1.8} />
              Ideas deserve a stage
            </div>

            <h1 className="max-w-4xl text-[clamp(2.7rem,6vw,5.7rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
              The Next-Gen
              <span className="mt-3 block font-serif font-normal italic tracking-[-0.045em] text-[#e94b35]">
                Article Writing
              </span>
              <span className="mt-3 block">Competition</span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contestants"
                className="group inline-flex items-center gap-3 bg-[#171713] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#e94b35]"
              >
                Vote now
                <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <Link
                to="/about"
                className="border-b border-[#171713] px-1 py-2 text-sm font-bold uppercase tracking-wider transition hover:border-[#e94b35] hover:text-[#e94b35]"
              >
                Learn more
              </Link>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-[310px] lg:mx-0">
            <div className="absolute -left-6 -top-6 h-full w-full border border-[#171713]/20" />
            <div className="relative bg-[#e94b35] p-7 text-white shadow-[12px_12px_0_#171713] sm:p-8">
              <Trophy size={30} strokeWidth={1.5} />
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-white/75">
                Grand prize
              </p>
              <p className="mt-2 text-6xl font-black tracking-[-0.07em]">₦200K</p>
              <div className="my-5 h-px bg-white/35" />
              <p className="max-w-[220px] text-base font-medium leading-snug">
                The winner goes home with a ₦200,000 cash prize.
              </p>
            </div>
          </aside>
        </div>

        <div className="flex items-end justify-between border-t border-[#171713]/20 pt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#171713]/60 sm:text-xs">
          <span>Write boldly. Stand out.</span>
          <span className="hidden sm:inline">The future is written.</span>
        </div>
      </div>
    </section>
  );
}
