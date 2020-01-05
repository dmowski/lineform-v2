import { FETCH_PROJECTS } from "./types";
import baseService from "../services/baseService";

export function fetchProjects() {
  return async function(dispatch) {
    const urlWithProjects = baseService.getProjectsUrl();
    const reqResult = await fetch(urlWithProjects);
    const projects = await reqResult.json();
    dispatch({
      type: FETCH_PROJECTS,
      payload: projects,
    });
  };
}
