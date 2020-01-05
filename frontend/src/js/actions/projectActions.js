import { FETCH_PROJECTS } from "./types";
import urlManager from "../services/urlManager";

export function fetchProjects() {
  return async function(dispatch) {
    const urlWithProjects = urlManager.getProjectsUrl();
    const reqResult = await fetch(urlWithProjects);
    const projects = await reqResult.json();
    dispatch({
      type: FETCH_PROJECTS,
      payload: projects,
    });
  };
}
