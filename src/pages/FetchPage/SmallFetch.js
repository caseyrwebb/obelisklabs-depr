import "./Fetch.css";
import { FaScroll } from "react-icons/fa";
import fetch1 from "../../assets/fetch1.png";
import fetch2 from "../../assets/fetch2.png";
import fetch3 from "../../assets/fetch3.png";
import fetch4 from "../../assets/fetch4.png";
import fetch5 from "../../assets/fetch5.png";
import fetch6 from "../../assets/fetch6.png";
import fetch7 from "../../assets/fetch7.png";

function SmallFetch() {
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#00e676",
            alignItems: "center",
          }}
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
        <a
          href="https://github.com/caseyrwebb/fetch"
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
            marginTop: "1em",
          }}
        >
          <h2>
            Fetch is a job listing platform where people can post and accept
            contracts. Originally designed for real estate agents looking to
            outsource tasks, it can be used to post open jobs suitable for gig
            laborers.
          </h2>
          <h2>Stack: React-Native/NodeJS/MongoDB</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            overflow: "auto",
            marginTop: "2em",
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
            <img
              src={fetch6}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Secure Login
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
            <img
              src={fetch5}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Job Feed
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
            <img
              src={fetch2}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Post Job
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
            <img
              src={fetch7}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              View User's Jobs
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
            <img
              src={fetch4}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              Message User
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
            <img
              src={fetch3}
              style={{ width: "10em", borderRadius: "18px" }}
            ></img>
            <p
              style={{
                color: "#fff",
                fontFamily: "Ubuntu Mono, monospace",
                fontWeight: "900",
              }}
            >
              View Messages
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallFetch;
