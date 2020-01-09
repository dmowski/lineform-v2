import React, { Component } from "react";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchProjects,
  viewProjectsByCategory,
} from "../actions/projectActions";

export class PreviewList extends Component {
  async componentDidMount() {
    this.props.fetchProjects();
  }

  getProjectsTemplate() {
    return this.props.viewProjects.map(project => (
      <Preview key={project.id} data={project} />
    ));
  }

  convertCategoriesArrayToMenuFormat(categories = []) {
    return categories.map(title => {
      return {
        title: title,
        clickHandler: e => {
          const categoryTitle = e.detail;
          this.props.viewProjectsByCategory(categoryTitle);
        },
      };
    });
  }

  getActiveCategory() {
    const categories = [
      ...new Set(
        this.props.viewProjects.map(item => item.category.toUpperCase())
      ),
    ];

    if (categories.length === 1) {
      return categories[0];
    }
  }

  render() {
    const categoriesMenuList = this.convertCategoriesArrayToMenuFormat(
      this.props.categories
    );

    return (
      <React.Fragment>
        <Menu list={categoriesMenuList} activeItem={this.getActiveCategory()} />
        <div className="preview-grid">{this.getProjectsTemplate()}</div>
      </React.Fragment>
    );
  }
}

PreviewList.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  viewProjectsByCategory: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  viewProjects: PropTypes.array.isRequired,
};

const mapStateToProp = state => {
  return {
    projects: state.project.items,
    categories: state.project.categories,
    viewProjects: state.project.viewProjects,
  };
};

export default connect(mapStateToProp, {
  fetchProjects,
  viewProjectsByCategory,
})(PreviewList);
