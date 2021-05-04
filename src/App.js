import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeBody from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBody />
    </div>
  );
}

export default App;
