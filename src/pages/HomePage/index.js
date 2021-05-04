import "./HomeBody.css";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import SpaceImage from "../../components/SpaceImage/SpaceImage";
import SmallBody from "./SmallBody";
import MediumBody from "./MediumBody";
import LargeBody from "./LargeBody";

function HomeBody() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpointSm = 620;
  const breakpointMd = 1200;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width < breakpointSm) {
    return <SmallBody />;
  } else if (width < breakpointMd) {
    return <MediumBody />;
  } else {
    return <LargeBody />;
  }
}

export default HomeBody;
