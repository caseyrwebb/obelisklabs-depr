import "./HomeBody.css";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import SpaceImage from "../../components/SpaceImage/SpaceImage";
import ComputerImage from "./ComputerImage";

function LargeBody() {
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
            We help solve business problems with software solutions.
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
              We work with our clients to develop software applications that
              will meet their specific business needs.
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
                  <h2>- Make app</h2>
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
                iOS or Android? No matter what device, we use hybrid style
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
                  <h2>- Store data... in the cloud.</h2>
                </li>
                <li>
                  <h2>- Make app</h2>
                </li>
              </ul>
            </div>
          </div>
          <ComputerImage />
        </div>
      </div>
    </>
  );
}

export default LargeBody;
