import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./components/Country/Country/Country";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar component */}
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:countryCode">
          <Country />
        </Route>
      </Switch>

      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
