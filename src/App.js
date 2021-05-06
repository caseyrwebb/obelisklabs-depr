import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeBody from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeBody} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
