import React, { Component } from "react";
import StartScreen from "../components/StartScreen";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/projectActions";

export class MainPage extends Component {
  projectServise;

  async componentDidMount() {
    this.props.fetchProjects();
    // let projects = await this.projectServise.getProjects();
    /*let categories = await this.projectServise.getCategories();
    categories = categories.map(title => {
      return {
        title: title,
        clickHandler: e => {
          console.log("e", e);
        },
      };
    });*/
  }

  getProjectsTemplate() {
    return this.props.projects.map(project => (
      <Preview key={project.id} data={project} />
    ));
  }
  render() {
    // <Menu list={this.state.categories} />
    return (
      <React.Fragment>
        <StartScreen />
        <Menu />

        <div className="preview-grid">{this.getProjectsTemplate()}</div>
        <Partners />

        <Footer />
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

const mapStateToProp = state => {
  return {
    projects: state.project.items,
  };
};

export default connect(mapStateToProp, { fetchProjects })(MainPage);
