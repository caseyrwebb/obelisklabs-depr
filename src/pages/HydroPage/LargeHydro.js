import "./Hydro.css";
import { FaCoins } from "react-icons/fa";
import hydro1 from "../../assets/hydro1.png";
import hydro2 from "../../assets/hydro2.png";
import hydro3 from "../../assets/hydro3.png";

function LargeFetch() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "12vh",
          position: "relative",
        }}
      ></div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "3em" }}
      >
        <div
          style={{
            display: "flex",
            color: "#fff",
            alignItems: "center",
            marginTop: "3em",
            marginBottom: "3em",
          }}
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
        <a
          href="https://github.com/caseyrwebb/HydroExchange"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "18px",
              paddingTop: "0.25em",
              paddingRight: "1em",
              paddingBottom: "0.25em",
              paddingLeft: "1em",
              width: "8.25em",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
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
              Source Code.
            </p>
          </div>
        </a>
        <div
          style={{
            color: "#fff",
            fontFamily: "Ubuntu Mono, monospace",
            width: "80%",
            lineHeight: "2em",
            marginLeft: "0.5em",
          }}
        >
          <h2>
            HydroExchange is a water rights exchange platform. Data from the
            United States Geological Survey is used to calculate water storage
            levels and plotted over an interactive map. Users can bid on water
            rights for each well and sell their rights to buyers.
          </h2>
          <h2>Stack: React/NodeJS/MongoDB</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            marginTop: "2em",
            marginLeft: "-0.5em",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5em",
            }}
          >
            <img src={hydro3} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Bid on water
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5em",
            }}
          >
            <img src={hydro2} style={{ width: "20em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Track Ownership
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5em",
            }}
          >
            <img src={hydro1} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Sell Water
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LargeFetch;
