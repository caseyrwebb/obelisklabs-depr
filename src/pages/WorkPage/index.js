import "./WorkPage.css";
import { useState, useEffect } from "react";

import SmallWork from "./SmallWork";
import MediumWork from "./MediumWork";
import LargeWork from "./LargeWork";

function WorkPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpointSm = 620;
  const breakpointMd = 1200;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <LargeWork />;
}

export default WorkPage;
