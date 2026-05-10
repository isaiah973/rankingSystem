import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSendReceipt = () => {
    const phoneNumber = "2349037544253";

    const message = "Hello!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* <div className={`transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <p>slide</p>
      </div> */}
      {/* Hero */}
      <header className="bg-[#1a2421] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Writing Game
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            An online writing competition that celebrates creativity,
            storytelling, and the power of words to inspire and connect.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column - Image / visual */}
          <div className="md:max-w-sm md:text-center">
            <div className="rounded-2xl bg-white shadow p-6 h-full flex flex-col justify-center">
              <div className="h-80 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                <img
                  src="/Images/doreen4.jpeg"
                  alt="Organizer Doreen Adekunle"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Organized by</p>
                <p className="font-semibold">Doreen Adekunle</p>
              </div>

              <button
                onClick={handleSendReceipt}
                className="bg-green-600 mt-2 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right column - Text */}
          <div className="lg:col-span-2 space-y-8">
            <article className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                About the Competition
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The Writing Game is an online writing competition organized by
                Doreen Adekunle, created to celebrate the power of creativity,
                storytelling, and written expression. It provides a platform for
                talented writers to share their ideas, imaginations, and stories
                that inspire, challenge, and connect with readers.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                The competition brings together passionate writers who use words
                to explore real-life issues, spark meaningful conversations, and
                create impact through storytelling. It’s not just about writing
                — it’s about purpose, originality, and using your creativity to
                make a difference.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                How Participants are Evaluated
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Participants are judged based on creativity, originality,
                clarity, storytelling ability, and overall impact of their
                writing. As the competition progresses, contestants develop
                stronger writing skills, deeper expression, and greater
                confidence in their craft.
              </p>

              <h3 className="mt-6 text-lg font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                At its core, The Writing Game is more than a competition — it’s
                a movement that nurtures creativity, amplifies unique voices,
                and empowers writers to express themselves boldly through words.
              </p>
            </article>

            <a
              href="/"
              className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-white border-t py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          © {new Date().getFullYear()} The Writing Game. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
