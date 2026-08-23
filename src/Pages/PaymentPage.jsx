import {
  Building2,
  Check,
  Copy,
  MessageCircle,
  ReceiptText,
} from "lucide-react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const accountNumber = "1036731035";

const PaymentPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleSendReceipt = () => {
    const phoneNumber = "2348088592754";
    const message =
      "Hello! I've made my payment for the voting. Here is my receipt.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#f4efe4]">
      <Navbar />

      <main className="relative isolate overflow-hidden bg-[#f4efe4] text-[#171713]">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,19,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,19,.055)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border-[60px] border-[#e94b35]/10" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_470px] lg:items-center lg:gap-20 lg:px-16 lg:py-20">
          <section>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#e94b35]" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#e94b35]">
                Secure your votes
              </p>
            </div>

            <h1 className="max-w-2xl text-[clamp(3.5rem,7vw,6.8rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
              Payment
              <span className="block font-serif font-normal italic text-[#e94b35]">
                Information
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#171713]/65">
              Please send your voting payment to the account provided. Each vote
              costs
              <strong className="ml-1 font-black text-[#171713]">₦100.</strong>
            </p>

            <div className="mt-9 flex max-w-xl gap-4 border-l-2 border-[#e94b35] bg-white/40 p-5">
              <ReceiptText
                className="mt-0.5 shrink-0 text-[#e94b35]"
                size={22}
              />
              <p className="text-sm font-medium leading-6">
                Use the code of the contestant you are voting for as your
                payment description.
              </p>
            </div>
          </section>

          <section className="relative" aria-label="Bank account details">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#171713]/20" />
            <div className="relative bg-[#171713] p-7 text-white shadow-[14px_14px_0_#e94b35] sm:p-9">
              <div className="flex items-center justify-between border-b border-white/20 pb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
                    Transfer details
                  </p>
                  <p className="mt-2 text-lg font-bold">₦100 per vote</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20">
                  <Building2 size={22} strokeWidth={1.6} />
                </span>
              </div>

              <dl className="divide-y divide-white/15">
                <div className="py-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Account name
                  </dt>
                  <dd className="mt-2 text-lg font-bold">DOREEN SAMUEL</dd>
                </div>
                <div className="py-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Bank
                  </dt>
                  <dd className="mt-2 text-lg font-bold">
                    VFD Microfinance Bank
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Account number
                  </dt>
                  <dd className="mt-2 flex items-center justify-between gap-4">
                    <span className="font-mono text-3xl font-bold tracking-wider sm:text-4xl">
                      {accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 transition hover:border-[#e94b35] hover:bg-[#e94b35]"
                      aria-label="Copy account number"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </dd>
                  {copied && (
                    <p className="mt-2 text-xs font-semibold text-[#ff806e]">
                      Account number copied
                    </p>
                  )}
                </div>
              </dl>

              <p className="mt-2 text-sm leading-6 text-white/60">
                After making payment, send your receipt or screenshot to us on
                WhatsApp for verification.
              </p>

              <button
                type="button"
                onClick={handleSendReceipt}
                className="mt-6 flex w-full items-center justify-center gap-3 bg-[#e94b35] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#171713]"
              >
                <MessageCircle size={20} />
                Send receipt on WhatsApp
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;
