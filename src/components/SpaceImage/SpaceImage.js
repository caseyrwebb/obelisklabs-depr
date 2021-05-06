import { useState, useEffect } from "react";
import Image from "../../assets/space.jpeg";

function LargeSpace() {
  return (
    <div style={{ maxHeight: "50vh", overflow: "hidden" }}>
      <img
        src={Image}
        style={{
          width: "105%",
          position: "relative",
          top: "0px",
          left: "-80px",
        }}
      ></img>
    </div>
  );
}

function MediumSpace() {
  return (
    <div style={{ height: "50vh", overflow: "hidden" }}>
      <img
        src={Image}
        style={{
          width: "120%",
          position: "relative",
          top: "15px",
          left: "-100px",
        }}
      ></img>
    </div>
  );
}

function SmallSpace() {
  return (
    <div style={{ maxHeight: "40vh", overflow: "hidden" }}>
      <img
        src={Image}
        style={{
          width: "150%",
          position: "relative",
          top: "50px",
          left: "-120px",
        }}
      ></img>
    </div>
  );
}

function SpaceImage() {
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
    return <SmallSpace />;
  } else if (width < breakpointMd) {
    return <MediumSpace />;
  } else {
    return <LargeSpace />;
  }
}

export default SpaceImage;
