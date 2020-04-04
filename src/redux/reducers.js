import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField:""
}

// {type,payload} = action
export const searchEpisodes = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField:action.payload }
    default:
      return state; // ""
  }
}