import "./Splash.css";
import { GiDropletSplash } from "react-icons/gi";
import splash1 from "../../assets/splash1.png";
import splash2 from "../../assets/splash2.png";
import splash3 from "../../assets/splash3.png";
import splash4 from "../../assets/splash4.png";
import splash5 from "../../assets/splash5.png";
import splash6 from "../../assets/splash6.png";

function LargeSplash() {
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
            color: "#81d4fa",
            alignItems: "center",
          }}
        >
          <GiDropletSplash style={{ fontSize: "4em" }} />
          <h1
            style={{
              fontFamily: "Chivo, sans-serif",
              fontWeight: "600",
              fontSize: "4em",
            }}
          >
            Splash
          </h1>
        </div>
        <a
          href="https://github.com/caseyrwebb/splash"
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
            Splash is an ERP application designed to help boat yard
            administrators manage operations. With it, you can track the
            material usage associated with each worker, calculate total costs
            per project, and bill customers based on project inputs.
          </h2>
          <h2>Stack: React/NodeJS/Firebase</h2>
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
            <img src={splash3} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Track Material Usage
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
            <img src={splash5} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              View User Material Usage History
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
            <img src={splash4} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Add Boat to Database
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
            <img src={splash6} style={{ width: "20em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Add Boat to Slip
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
            <img src={splash1} style={{ width: "20em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Select Boat for Slip
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
            <img src={splash2} style={{ width: "25em" }}></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Track Job Costs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LargeSplash;
