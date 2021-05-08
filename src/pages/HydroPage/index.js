import "./Hydro.css";
import { useState, useEffect } from "react";
import LargeHydro from "./LargeHydro";
import SmallHydro from "./SmallHydro";

function HydroPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <SmallHydro /> : <LargeHydro />;
}

export default HydroPage;
