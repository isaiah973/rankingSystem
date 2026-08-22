import { ArrowUpRight, Feather, MessageCircle, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const evaluationCriteria = [
  "Creativity",
  "Originality",
  "Clarity",
  "Storytelling ability",
  "Overall impact",
];

export default function AboutPage() {
  return (
    <div className="bg-[#f4efe4]">
      <Navbar />

      <main className="relative isolate overflow-hidden bg-[#f4efe4] text-[#171713]">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,19,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,19,.055)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full border-[62px] border-[#e94b35]/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <header className="grid gap-10 border-b border-[#171713]/20 pb-16 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#e94b35]" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#e94b35]">
                  About the competition
                </p>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.6rem,7.5vw,7.2rem)] font-black uppercase leading-[0.83] tracking-[-0.065em]">
                Where the next
                <span className="block font-serif font-normal italic text-[#e94b35]">
                  great writers
                </span>
                emerge.
              </h1>
            </div>

            <div className="border-l-2 border-[#e94b35] pl-6">
              <Feather className="mb-5 text-[#e94b35]" size={28} strokeWidth={1.6} />
              <p className="text-lg font-medium leading-8 text-[#171713]/70">
                A writing challenge created to discover, showcase, and celebrate talented writers with exceptional creativity and originality.
              </p>
            </div>
          </header>

          <section className="grid border-b border-[#171713]/20 py-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            <div>
              <span className="font-serif text-6xl italic text-[#e94b35]">01</span>
              <h2 className="mt-5 text-sm font-black uppercase tracking-[0.18em]">
                About the competition
              </h2>
            </div>

            <div className="mt-8 max-w-3xl space-y-7 text-lg leading-8 text-[#171713]/70 lg:mt-0">
              <p>
                The Next-Gen Article Writing Competition is a writing challenge created to discover, showcase, and celebrate talented writers with exceptional creativity, originality, and the ability to communicate powerful ideas through words.
              </p>
              <p>
                Participants will be challenged to write two original articles based on carefully selected themes designed to test their critical thinking, creativity, depth of thought, and writing ability.
              </p>

              <div className="mt-9 flex items-center gap-6 bg-[#171713] p-6 text-white sm:p-8">
                <span className="font-serif text-7xl italic leading-none text-[#e94b35]">2</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">The challenge</p>
                  <p className="mt-2 text-xl font-black uppercase">Original articles</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid border-b border-[#171713]/20 py-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            <div>
              <span className="font-serif text-6xl italic text-[#e94b35]">02</span>
              <h2 className="mt-5 text-sm font-black uppercase tracking-[0.18em]">Our mission</h2>
            </div>

            <div className="mt-8 grid gap-8 lg:mt-0 lg:grid-cols-2">
              <article className="border border-[#171713]/20 bg-white/35 p-7 sm:p-9">
                <Target className="text-[#e94b35]" size={30} strokeWidth={1.6} />
                <p className="mt-8 text-lg leading-8 text-[#171713]/70">
                  Our mission is to create a platform where emerging writers can express their ideas, develop their skills, gain visibility, and compete for meaningful opportunities.
                </p>
              </article>
              <article className="bg-[#e94b35] p-7 text-white sm:p-9">
                <Sparkles size={30} strokeWidth={1.6} />
                <p className="mt-8 text-lg leading-8 text-white/85">
                  We believe that great writers deserve to be seen, heard, and rewarded. Through this competition, we aim to encourage young and emerging writers to take their craft seriously and recognize the power of their words.
                </p>
              </article>
            </div>
          </section>

          <section className="grid border-b border-[#171713]/20 py-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            <div>
              <span className="font-serif text-6xl italic text-[#e94b35]">03</span>
              <h2 className="mt-5 text-sm font-black uppercase tracking-[0.18em]">Meet the organizer</h2>
            </div>

            <div className="mt-8 lg:mt-0">
              <article className="grid max-w-3xl overflow-hidden border border-[#171713]/20 bg-[#171713] text-white sm:grid-cols-[240px_1fr]">
                <div className="aspect-[3/4] w-full overflow-hidden sm:aspect-auto sm:min-h-[360px]">
                  <img
                    src="/Images/doreen.jpeg"
                    alt="Doreen Adekunle, competition organizer"
                    className="h-full w-full object-cover object-top grayscale-[15%]"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e94b35]">Competition organizer</p>
                  <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">Doreen Adekunle</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">
                    Have a question about the competition or voting? Contact the organizer directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/2348088592754?text=Hello%20Doreen%2C%20I%20would%20like%20to%20ask%20about%20the%20Next-Gen%20Article%20Writing%20Competition."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex w-fit items-center gap-3 bg-[#e94b35] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#171713]"
                  >
                    <MessageCircle size={18} />
                    Contact her
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="grid py-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            <div>
              <span className="font-serif text-6xl italic text-[#e94b35]">04</span>
              <h2 className="mt-5 text-sm font-black uppercase tracking-[0.18em]">How writers are evaluated</h2>
            </div>

            <div className="mt-8 lg:mt-0">
              <p className="max-w-3xl text-lg leading-8 text-[#171713]/70">
                Participants are judged based on creativity, originality, clarity, storytelling ability, and overall impact of their writing. As the competition progresses, contestants develop stronger writing skills, deeper expression, and greater confidence in their craft.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {evaluationCriteria.map((criterion) => (
                  <span key={criterion} className="border border-[#171713]/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
                    {criterion}
                  </span>
                ))}
              </div>

              <Link
                to="/payment"
                className="group mt-10 inline-flex items-center gap-3 bg-[#171713] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#e94b35]"
              >
                Support a writer
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
