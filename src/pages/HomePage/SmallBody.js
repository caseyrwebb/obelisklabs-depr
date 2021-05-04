import "./HomeBody.css";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import SpaceImage from "../../components/SpaceImage/SpaceImage";

function SmallBody() {
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
              We work with our clients to develop software appications that will
              meet their specific business needs.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallBody;
