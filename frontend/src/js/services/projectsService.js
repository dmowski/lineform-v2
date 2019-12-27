import baseService from "./baseService";
import axios from "axios";

export class ProjectsService {
  projects;
  dataUrl;

  constructor() {
    if (window.projectsService) {
      return window.projectsService;
    }
    window.projectsService = this;

    this.dataUrl = baseService.getAPIUrl() + "projects";
  }

  getProjectById(id) {
    return this.getProjects().find(item => item.id === id);
  }

  getCategories() {
    let listString = this.getProjects().map(item =>
      item.category.toUpperCase()
    );

    return listString;
  }

  async getProjects() {
    const resultOfRequest = await axios.get(this.dataUrl);
    this.projects = resultOfRequest.data;
    return this.projects;
  }
}
