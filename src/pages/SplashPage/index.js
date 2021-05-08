import "./Splash.css";
import { useState, useEffect } from "react";
import LargeSplash from "./LargeSplash";
import SmallSplash from "./SmallSplash";

function FetchPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <SmallSplash /> : <LargeSplash />;
}

export default FetchPage;
