import "./Navbar.css";
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
              lineHeight: "0px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
            }}
          >
            Obelisk
          </h1>
          <h2
            style={{
              marginTop: "0px",
              alignSelf: "flex-end",
              lineHeight: "0px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
            }}
          >
            Labs
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
                onClick={handleClose}
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
              lineHeight: "0px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
            }}
          >
            Obelisk
          </h1>
          <h2
            style={{
              marginTop: "0px",
              alignSelf: "flex-end",
              lineHeight: "0px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
            }}
          >
            Labs
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
          Home.
        </h2>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "0.5em",
          }}
        >
          Work.
        </h2>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginRight: "0.5em",
          }}
        >
          About.
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
          Contact.
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
