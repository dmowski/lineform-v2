import { FETCH_PROJECTS, CHANGE_VIEW_PROJECTS_BY_CATEGORY } from "./types";
import urlManager from "../services/urlManager";

export function fetchProjects() {
  return async function(dispatch) {
    const urlWithProjects = urlManager.getProjectsUrl();
    const reqResult = await fetch(urlWithProjects);
    const projects = await reqResult.json();

    const categories = [
      ...new Set(projects.map(item => item.category.toUpperCase())),
    ];

    dispatch({
      type: FETCH_PROJECTS,
      payload: { projects, categories },
    });
  };
}

export function viewProjectsByCategory(categoryTitle) {
  return async function(dispatch) {
    dispatch({
      type: CHANGE_VIEW_PROJECTS_BY_CATEGORY,
      payload: categoryTitle,
    });
  };
}
