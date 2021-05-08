import { useState, useEffect } from "react";
import LgContact from "../Contact/Contact";
import MdContact from "../Contact/MediumContact";
import SmContact from "../Contact/SmallContact";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SmallContact() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "12vh",
          position: "relative",
        }}
      ></div>
      <SmContact />
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "#000",
            fontFamily: "Ubuntu Mono, monospace",
            lineHeight: "3em",
            marginLeft: "1em",
          }}
        >
          Email: caseyrwebb@gmail.com
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "2em" }}
        >
          <a
            href="https://github.com/caseyrwebb"
            style={{ textDecoration: "none" }}
          >
            <FaGithub style={{ fontSize: "2.5em", marginRight: "0.25em" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/casey-webb-88a7481a5/"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedin style={{ fontSize: "2.5em", marginLeft: "0.25em" }} />
          </a>
        </div>
      </div>
    </>
  );
}

function MediumContact() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "12vh",
          position: "relative",
        }}
      ></div>
      <MdContact />
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "#000",
            fontFamily: "Ubuntu Mono, monospace",
            lineHeight: "3em",
            marginLeft: "1em",
          }}
        >
          Email: caseyrwebb@gmail.com
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "2em" }}
        >
          <a
            href="https://github.com/caseyrwebb"
            style={{ textDecoration: "none" }}
          >
            <FaGithub style={{ fontSize: "2.5em", marginRight: "0.25em" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/casey-webb-88a7481a5/"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedin style={{ fontSize: "2.5em", marginLeft: "0.25em" }} />
          </a>
        </div>
      </div>
    </>
  );
}

function LargeContact() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "12vh",
          position: "relative",
        }}
      ></div>
      <LgContact />
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "#000",
            fontFamily: "Ubuntu Mono, monospace",
            lineHeight: "3em",
            marginLeft: "1em",
          }}
        >
          Email: caseyrwebb@gmail.com
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "2em" }}
        >
          <a
            href="https://github.com/caseyrwebb"
            style={{ textDecoration: "none" }}
          >
            <FaGithub style={{ fontSize: "2.5em", marginRight: "0.25em" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/casey-webb-88a7481a5/"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedin style={{ fontSize: "2.5em", marginLeft: "0.25em" }} />
          </a>
        </div>
      </div>
    </>
  );
}

function ContactPage() {
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
    return <SmallContact />;
  } else if (width < breakpointMd) {
    return <MediumContact />;
  } else {
    return <LargeContact />;
  }
}

export default ContactPage;
