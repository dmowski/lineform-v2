import React from "react";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import MainPage from "./pages/MainPage";
import UIKits from "./pages/UIKits";
import Projects from "./pages/Projects";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route path="/uikits" component={UIKits} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/services" component={Services} />
        </Router>
      </Provider>
    );
  }
}

export default App;
