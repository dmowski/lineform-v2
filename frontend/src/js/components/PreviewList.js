import React, { Component } from "react";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/projectActions";

export class PreviewList extends Component {
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
        <Menu list={categoriesMenuList} />
        <div className="preview-grid">{this.getProjectsTemplate()}</div>
      </React.Fragment>
    );
  }
}

PreviewList.propTypes = {
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

export default connect(mapStateToProp, { fetchProjects })(PreviewList);
