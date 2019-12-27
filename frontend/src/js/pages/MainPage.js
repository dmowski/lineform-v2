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
  };
  constructor() {
    super();
    this.projectServise = new ProjectsService();
  }

  async componentDidMount() {
    let projects = await this.projectServise.getProjects();
    this.setState({
      projects: projects,
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
        <Menu />

        <Menu />
        <div className="preview-grid">{this.getProjectsTemplate()}</div>
        <Partners />

        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;
