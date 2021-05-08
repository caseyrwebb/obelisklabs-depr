import "./About.css";
import casey from "../../assets/casey.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function AboutPage() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "12vh",
          position: "relative",
        }}
      ></div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div style={{ width: "80%", marginTop: "4em", maxWidth: "1600px" }}>
          <h2
            style={{
              color: "#fff",
              fontFamily: "Ubuntu Mono, monospace",
              lineHeight: "150%",
              textAlign: "left",
            }}
          >
            Casey Webb is an LSU graduate with a degree in Information Systems
            and Decision Science. His academic focus was in software development
            and data science, with an orientation toward business
            implementation. He has professional experience as an app developer
            and spends his free time honing the skills of computer programming
            and data science. He is particularly interested in the fields of
            Blockchain, IoT, and VR/AR.
          </h2>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "6em",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={casey} style={{ width: "15em" }}></img>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "0",
                  textAlign: "left",
                }}
              >
                Casey
              </h2>
              <p
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "0",
                  textAlign: "left",
                  marginTop: "0em",
                }}
              >
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "2em",
          marginBottom: "1em",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontFamily: "Ubuntu Mono, monospace",
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
            <FaGithub
              style={{
                fontSize: "2.5em",
                marginRight: "0.25em",
                color: "#fff",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/casey-webb-88a7481a5/"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedin
              style={{ fontSize: "2.5em", marginLeft: "0.25em", color: "#fff" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
