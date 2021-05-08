import "./WorkPage.css";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import { GiDropletSplash } from "react-icons/gi";
import { FaScroll } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SpaceImage from "../../components/SpaceImage/SpaceImage";

function LargeWork() {
  const handleClick = (arg) => {
    window.location.href = arg;
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "25vh",
          position: "relative",
        }}
      ></div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            maxHeight: "24em",
            maxWidth: "1500px",
            justifyContent: "space-around",
            padding: "0em 2em 0 2em",
            overflow: "auto",
          }}
        >
          <div>
            <Zoom in={true} style={{ transitionDelay: "250ms" }} timeout={1250}>
              <Paper
                className="card-fetch"
                elevation={4}
                style={{
                  backgroundColor: "#00e676",
                  width: "22em",
                  height: "22em",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
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
                  <h2
                    style={{
                      fontFamily: "Chivo, sans-serif",
                      fontWeight: "400",
                      fontSize: "2em",
                      lineHeight: "0px",
                      marginTop: "0.175em",
                    }}
                  >
                    Mobile App
                  </h2>
                  <div
                    style={{
                      border: "thin solid black",
                      borderRadius: "18px",
                      width: "90%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "25%",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick("/work/fetch")}
                  >
                    <p
                      style={{
                        color: "#000",
                        fontFamily: "Chivo, sans-serif",
                        fontWeight: "400",
                        fontSize: "1.25em",
                        lineHeight: "0em",
                      }}
                    >
                      Demo
                    </p>
                  </div>
                </div>
              </Paper>
            </Zoom>
          </div>
          <div>
            <Zoom in={true} style={{ transitionDelay: "750ms" }} timeout={1250}>
              <Paper
                className="card-hydro"
                elevation={4}
                style={{
                  backgroundColor: "#fff",
                  width: "22em",
                  height: "22em",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "24%",
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
                  <h2
                    style={{
                      fontFamily: "Chivo, sans-serif",
                      fontWeight: "400",
                      fontSize: "2em",
                      lineHeight: "0px",
                      marginTop: "1.5em",
                    }}
                  >
                    Web App
                  </h2>
                  <div
                    style={{
                      border: "thin solid black",
                      borderRadius: "18px",
                      width: "85%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "23.5%",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick("/work/hydro")}
                  >
                    <p
                      style={{
                        color: "#000",
                        fontFamily: "Chivo, sans-serif",
                        fontWeight: "400",
                        fontSize: "1.25em",
                        lineHeight: "0em",
                      }}
                    >
                      Demo
                    </p>
                  </div>
                </div>
              </Paper>
            </Zoom>
          </div>
          <div>
            <Zoom
              in={true}
              style={{ transitionDelay: "1250ms" }}
              timeout={1250}
            >
              <Paper
                elevation={4}
                className="card-splash"
                style={{
                  backgroundColor: "#81d4fa",
                  width: "22em",
                  height: "22em",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
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
                  <h2
                    style={{
                      fontFamily: "Chivo, sans-serif",
                      fontWeight: "400",
                      fontSize: "2em",
                      lineHeight: "0px",
                      marginTop: "0.175em",
                    }}
                  >
                    Web App
                  </h2>
                  <div
                    style={{
                      border: "thin solid black",
                      borderRadius: "18px",
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "25%",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick("/work/splash")}
                  >
                    <p
                      style={{
                        color: "#000",
                        fontFamily: "Chivo, sans-serif",
                        fontWeight: "400",
                        fontSize: "1.25em",
                        lineHeight: "0em",
                      }}
                    >
                      Demo
                    </p>
                  </div>
                </div>
              </Paper>
            </Zoom>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontFamily: "Ubuntu Mono, monospace",
            marginTop: "2em",
          }}
        >
          more coming soon.
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "10px",
          width: "100%",
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

export default LargeWork;
