import React, { Component } from "react";
import StartScreen from "../components/StartScreen";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import { ProjectsService } from "../services/projectsService";

export class MainPage extends Component {
  projectServise;
  state = {
    projects: [],
    mainRoute: [
      {
        title: "Проекты",
        href: "/projects",
      },
      {
        title: "Услуги",
        href: "/services",
      },
      {
        title: "О нас",
        href: "/about",
      },
      {
        title: "Контакты",
        href: "/contacts",
      },
      {
        title: "UIkits",
        href: "/uikits",
      },
    ],
  };
  constructor() {
    super();
    this.projectServise = new ProjectsService();
  }

  async componentDidMount() {
    let projects = await this.projectServise.getProjects();
    let categories = await this.projectServise.getCategories();
    categories = categories.map(title => {
      return {
        title: title,
      };
    });
    this.setState({
      projects: projects,
      categories: categories,
    });
  }

  getProjectsTemplate() {
    return this.state.projects.map(project => (
      <Preview key={project.id} data={project} />
    ));
  }
  render() {
    return (
      <React.Fragment>
        <StartScreen />
        <Menu list={this.state.mainRoute} />

        <Menu list={this.state.categories} />
        <div className="preview-grid">{this.getProjectsTemplate()}</div>
        <Partners />

        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;
