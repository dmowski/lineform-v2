import React, { Component } from "react";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import Footer from "../components/Footer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />

        <div className="preview-grid">
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
