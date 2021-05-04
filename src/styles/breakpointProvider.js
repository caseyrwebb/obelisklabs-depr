import React, { useState, createContext, useContext } from "react";

const defaultValue = {};

const BreakpointContext = createContext(defaultValue);

const BreakpointProvider = ({ children, queries }) => {
  //State in which we maintain our matching query
  const [queryMatch, setQueryMatch] = useState({});

  //Our Logic to get matching query goes here

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
}
export { useBreakpoint, BreakpointProvider };
