import { FETCH_PROJECTS } from "../actions/types";

const initialState = {
  items: [],
  categories: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        items: action.payload.projects,
        categories: action.payload.categories,
      };

    default:
      return state;
  }
}
