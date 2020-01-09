import {
  FETCH_PROJECTS,
  CHANGE_VIEW_PROJECTS_BY_CATEGORY,
} from "../actions/types";

const initialState = {
  items: [],
  categories: [],
  viewProjects: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        items: action.payload.projects,
        viewProjects: action.payload.projects,
        categories: action.payload.categories,
      };

    case CHANGE_VIEW_PROJECTS_BY_CATEGORY:
      const newViewProjects = state.items.filter(
        item => item.category === action.payload
      );
      return {
        ...state,
        viewProjects: newViewProjects,
      };
    default:
      return state;
  }
}
