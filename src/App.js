import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeBody from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import FetchPage from "./pages/FetchPage";
import HydroPage from "./pages/HydroPage";
import SplashPage from "./pages/SplashPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeBody} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work/fetch" component={FetchPage} />
          <Route exact path="/work/hydro" component={HydroPage} />
          <Route exact path="/work/splash" component={SplashPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
