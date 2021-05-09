import "./HomeBody.css";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { FaScroll } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import SpaceImage from "../../components/SpaceImage/SpaceImage";
import ComputerImage from "./ComputerImage";
import PhoneImage from "./PhoneImage";
import Contact from "../Contact/MediumContact";

function MediumBody() {
  const handleClick = (arg) => {
    window.location.href = arg;
  };

  let mark = "'";

  return (
    <>
      <SpaceImage />
      <div className="body-container">
        <div
          style={{
            maxWidth: "50%",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "900",
              marginTop: "1em",
            }}
          >
            I help solve business problems with software solutions.
          </h1>
          <div
            style={{
              maxWidth: "80%",
              alignSelf: "flex-end",
              marginTop: "-1.5em",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                lineHeight: "150%",
              }}
            >
              I work with my clients to develop software applications that will
              meet their specific business needs.
            </h2>
          </div>
        </div>
        <KeyboardArrowDownIcon
          style={{ color: "white", fontSize: "80px", marginTop: "0.5em" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "3em",
          }}
        >
          <div
            style={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "500px",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "900",
              }}
            >
              Web Apps
            </h1>
            <div style={{ maxWidth: "70%" }}>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "130%",
                  listStyleType: "none",
                  marginTop: "-0.25em",
                }}
              >
                Simple, cloud based web applications to streamline business
                processes. Let{mark}s get one started.
              </h2>
              <ul
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "150%",
                  listStyleType: "none",
                }}
              >
                <li>
                  <h2>- Create your ecosystem.</h2>
                </li>
                <li>
                  <h2>- Manage workflows.</h2>
                </li>
                <li>
                  <h2>- Store data... in the cloud.</h2>
                </li>
                <li>
                  <h2>- Provable records.</h2>
                </li>
              </ul>
            </div>
          </div>
          <ComputerImage />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "6em",
          }}
        >
          <div
            style={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "500px",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "900",
              }}
            >
              Mobile Apps
            </h1>
            <div style={{ maxWidth: "70%" }}>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "130%",
                  listStyleType: "none",
                  marginTop: "-0.25em",
                }}
              >
                iOS or Android? No matter what device, I use hybrid style
                programming to make sure that you're covered.
              </h2>
              <ul
                style={{
                  color: "#fff",
                  fontFamily: "Ubuntu Mono, monospace",
                  lineHeight: "150%",
                  listStyleType: "none",
                }}
              >
                <li>
                  <h2>- Access from anywhere.</h2>
                </li>
                <li>
                  <h2>- Easy distribution.</h2>
                </li>
                <li>
                  <h2>- Onboard, at scale.</h2>
                </li>
                <li>
                  <h2>- Peer-to-Peer.</h2>
                </li>
              </ul>
            </div>
          </div>
          <PhoneImage />
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginTop: "6em",
            padding: "1em",
          }}
        >
          <h1
            style={{
              color: "#000",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "900",
            }}
          >
            Recent Work.
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3em",
          }}
        >
          <div
            className="fetch-logo"
            style={{
              display: "flex",
              color: "#00e676",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "3em",
              cursor: "pointer",
            }}
            onClick={() => handleClick("/work/fetch")}
          >
            <FaScroll style={{ fontSize: "4em" }} />
            <h1
              style={{
                fontFamily: "Chivo, sans-serif",
                fontWeight: "600",
                fontSize: "4em",
              }}
            >
              Fetch
            </h1>
          </div>
          <div
            className="hydro-logo"
            style={{
              display: "flex",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "3em",
              cursor: "pointer",
            }}
            onClick={() => handleClick("/work/hydro")}
          >
            <FaCoins style={{ fontSize: "4em" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "Chivo, sans-serif",
                  fontWeight: "400",
                  fontSize: "2em",
                  lineHeight: "0px",
                  marginBottom: "0.25em",
                  marginLeft: "0.25em",
                }}
              >
                Hydro
              </h1>
              <h1
                style={{
                  fontFamily: "Chivo, sans-serif",
                  fontWeight: "600",
                  fontSize: "2em",
                  lineHeight: "0px",
                  marginLeft: "1.25em",
                }}
              >
                Exchange
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "18px",
            paddingTop: "0.25em",
            paddingRight: "1em",
            paddingBottom: "0.25em",
            paddingLeft: "1em",
            marginTop: "1em",
            marginBottom: "4em",
            cursor: "pointer",
          }}
          onClick={() => handleClick("/work")}
        >
          <p
            style={{
              color: "#000",
              fontFamily: "Ubuntu Mono, monospace",
              fontWeight: "700",
              fontSize: "1.25em",
              lineHeight: "0",
            }}
          >
            Learn More.
          </p>
        </div>
      </div>
      <Contact />
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

export default MediumBody;
