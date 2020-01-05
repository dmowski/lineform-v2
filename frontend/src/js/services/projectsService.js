import urlManager from "./urlManager";
import axios from "axios";

export class ProjectsService {
  projects;
  dataUrl;

  constructor() {
    if (window.projectsService) {
      return window.projectsService;
    }
    window.projectsService = this;

    this.dataUrl = urlManager.getAPIUrl() + "projects";
  }

  async getProjectById(id) {
    const projects = await this.getProjects();
    return projects.find(item => item.id === id);
  }

  async getCategories() {
    const projects = await this.getProjects();
    let listString = projects.map(item => item.category.toUpperCase());
    const uniqueCategories = [...new Set(listString)];
    return uniqueCategories;
  }

  async getProjects() {
    const resultOfRequest = await axios.get(this.dataUrl);
    this.projects = resultOfRequest.data;
    return this.projects;
  }
}
