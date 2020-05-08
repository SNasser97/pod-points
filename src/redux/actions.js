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
  const url = "https://listen-api.listennotes.com/api/v2/just_listen"; 
  
  dispatch({type: REQUEST_RAND_EPISODE_PENDING}); // do pending outside catch block
  try {
    const resp = await fetch(url, {
      headers:{
        "Content-Type":"application/json",
        "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
      }
    })
    const respData = await resp.json();
    // display skel-loader 3 seconds
    setTimeout(()=> dispatch({
      type: REQUEST_RAND_EPISODE_SUCCESS,
      payload: respData
    }), 3000);
  } catch(error) {
    dispatch({
      type:REQUEST_RAND_EPISODE_FAILED,
      payload:error
    })
  }
}

export const requestEpisodes = (urlSearch, urlOffset) => async (dispatch) => {
  const url =  `https://listen-api.listennotes.com/api/v2/search?q=${urlSearch}&offset=${urlOffset ? urlOffset : 0}&scope=episode&language=Any language&len_min=0`
  
  dispatch({type: REQUEST_EPISODE_PENDING});
  try {
    const resp = await fetch(url, {
       headers:{
        "Content-Type":"application/json",
        "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
      }
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