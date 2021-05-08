import "./Navbar.css";
import Link from "react-router-dom/Link";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SmallNav() {
  const options = ["Home", "Work", "About", "Contact"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (option) => {
    if (option === "Home") {
      window.location.href = "/";
    } else if (option === "Work") {
      window.location.href = "/work";
    } else if (option === "About") {
      window.location.href = "/about";
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="container">
      <div style={{ marginTop: "1em", marginBottom: "0.5em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1em",
          }}
        >
          <h1
            style={{
              lineHeight: "6px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
            }}
          >
            Casey
          </h1>
          <h2
            style={{
              marginTop: "0px",
              alignSelf: "flex-end",
              lineHeight: "6px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
            }}
          >
            Webb
          </h2>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={() => handleChange(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

function LargeNav() {
  return (
    <div className="container">
      <div style={{ marginTop: "1em", marginBottom: "0.5em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3em",
          }}
        >
          <h1
            style={{
              lineHeight: "6px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
            }}
          >
            Casey
          </h1>
          <h2
            style={{
              marginTop: "0px",
              alignSelf: "flex-end",
              lineHeight: "6px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
            }}
          >
            Webb
          </h2>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "0.5em",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Home.
          </Link>
        </h2>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "0.5em",
          }}
        >
          <Link to="/work" style={{ textDecoration: "none", color: "#000" }}>
            Work.
          </Link>
        </h2>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "0.5em",
          }}
        >
          <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
            About.
          </Link>
        </h2>
        <h2
          style={{
            borderRadius: "8px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "2em",
            backgroundColor: "black",
            padding: "0.5em",
            color: "white",
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
            Contact.
          </Link>
        </h2>
      </div>
    </div>
  );
}

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <SmallNav /> : <LargeNav />;
}

export default Navbar;
