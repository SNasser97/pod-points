import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_EPISODE_PENDING,
  REQUEST_EPISODE_SUCCESS,
  REQUEST_EPISODE_FAILED,
  REQUEST_RAND_EPISODE_PENDING,
  REQUEST_RAND_EPISODE_SUCCESS,
  REQUEST_RAND_EPISODE_FAILED,
  SHOW_PLAYER,
  PLAY_CURRENT_EPISODE,
  UPDATE_SCORE,
  CLOSE_SCORE
} from "./constants";

export const closeModal = () => {
  return {
    type: CLOSE_SCORE,
    payload: false
  }
}

export const updateUserScore = () => {
  return {
    type: UPDATE_SCORE,
    payload: 100
  }
}

export const playCurrentEpisode = (episode) => {
  return {
    type: PLAY_CURRENT_EPISODE,
    payload: episode
  }
}

export const displayMediaPlayer = () => {
  return {
    type: SHOW_PLAYER,
    payload: true
  }
}
export const setSearchField = (text) => {
  return {
     type: CHANGE_SEARCH_FIELD,
     payload: text
  }
}

export const requestRandomEpisode = () => async (dispatch) => {
  // Fetch from backend
  const SERVER_URL_RANDOM = "http://localhost:3000/random_episode";
  dispatch({type: REQUEST_RAND_EPISODE_PENDING}); 
  try {
    const resp = await fetch(SERVER_URL_RANDOM);
    const respData = await resp.json();
    dispatch({
      type: REQUEST_RAND_EPISODE_SUCCESS,
      payload: respData
    })
  } catch(error) {
    dispatch({
      type:REQUEST_RAND_EPISODE_FAILED,
      payload:error
    })
  }
}

export const requestEpisodes = (urlSearch, urlOffset) => async (dispatch) => {
  const SERVER_URL_EPISODE='http://localhost:3000/episodes';
  const urlParams = {
    urlSearch,
    urlOffset
  };

  /*
    1. POST user query from clicking 'search'
    2. Pass urlObj to body 
    3. Express makes GET request to external API (listennotes)
    4. Returns response
  */
  dispatch({ type: REQUEST_EPISODE_PENDING });
  try {
    const resp = await fetch(SERVER_URL_EPISODE, {
      method:'post',
       headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(urlParams)
    })
    const respData = await resp.json();
    dispatch({
        type:REQUEST_EPISODE_SUCCESS,
        payload:respData
      })
  } catch(error) {
     dispatch({
        type:REQUEST_EPISODE_FAILED,
        payload: error
      })
  }
}