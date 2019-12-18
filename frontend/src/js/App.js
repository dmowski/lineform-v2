import React from "react";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import MainPage from "./pages/MainPage";
import UIKits from "./pages/UIKits";
import Projects from "./pages/Projects";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/uikits" component={UIKits} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Services} />
      </Router>
    );
  }
}

export default App;
