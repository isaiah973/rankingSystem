import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This runs every time the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
