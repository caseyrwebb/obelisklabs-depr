import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BreakpointProvider } from "./styles/breakpoint";

const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1024px)",
  lg: "(max-width: 1280px)",
  xl: "(max-width: 1920px)", // we can check orientation also
};

ReactDOM.render(
  <React.StrictMode>
    <BreakpointProvider queries={queries}>
      <App />
    </BreakpointProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
