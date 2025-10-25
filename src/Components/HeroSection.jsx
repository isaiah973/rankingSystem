import React from "react"

const HeroSection = () => {

  const [isVisible, setIsVisible] = React.useState(false);

   React.useEffect(() => {
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <section className="h-[50vh] bg-[#1a2421] flex flex-col justify-center items-center text-white text-center px-4">
        <div className={`transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <h1 className="font-bold text-md">ECHOES OF VOICES'</h1>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-wide">
            SPOKEN WORD
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold">
            AND PUBLIC SPEAKING COMPETITION 2025
          </h2>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
