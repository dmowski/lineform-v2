import React, { Component } from "react";
import Menu from "../components/Menu";
import PreviewList from "../components/PreviewList";
import Footer from "../components/Footer";

export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <PreviewList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
