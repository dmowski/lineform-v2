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
  }

  getProjectsTemplate() {
    return this.props.projects.map(project => (
      <Preview key={project.id} data={project} />
    ));
  }

  convertCategoriesArrayToMenuFormat(categories = []) {
    return categories.map(title => {
      return {
        title: title,
        clickHandler: e => {
          console.log("e", e);
        },
      };
    });
  }

  render() {
    const categoriesMenuList = this.convertCategoriesArrayToMenuFormat(
      this.props.categories
    );

    return (
      <React.Fragment>
        <StartScreen />
        <Menu />
        <Menu list={categoriesMenuList} />
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
  categories: PropTypes.array.isRequired,
};

const mapStateToProp = state => {
  return {
    projects: state.project.items,
    categories: state.project.categories,
  };
};

export default connect(mapStateToProp, { fetchProjects })(MainPage);
