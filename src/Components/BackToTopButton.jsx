import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled 200px down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 border-2 border-amber-400 right-6 bg-black text-amber-300 p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
