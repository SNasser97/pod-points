import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_EPISODE_PENDING,
  REQUEST_EPISODE_SUCCESS,
  REQUEST_EPISODE_FAILED,
  SET_OFFSET,
  REQUEST_RAND_EPISODE_PENDING,
  REQUEST_RAND_EPISODE_SUCCESS,
  REQUEST_RAND_EPISODE_FAILED
} from "./constants";

export const setSearchField = (text) => {
  return {
     type: CHANGE_SEARCH_FIELD,
     payload: text
  }
}

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: offset
  }
}

export const requestRandomEpisode = () => (dispatch) => {
  const url = "https://listen-api.listennotes.com/api/v2/just_listen"; 
  dispatch({type: REQUEST_RAND_EPISODE_PENDING});
  fetch(url, {
    headers:{
      "Content-Type":"application/json",
      "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
    }
  })
  .then(resp => resp.json())
  .then(data => {
    dispatch({
      type: REQUEST_RAND_EPISODE_SUCCESS,
      payload: data
    })
  })
  .catch(error => {
    dispatch({
      type:REQUEST_RAND_EPISODE_FAILED,
      payload:error
    })
  })
}

export const requestEpisodes = (urlSearch, urlOffset) => (dispatch) => {
  
  const url =  `https://listen-api.listennotes.com/api/v2/search?q=${urlSearch}&offset=${urlOffset ? urlOffset : 0}&scope=episode&language=Any language&len_min=0`
  console.log("current url=>", url);
  dispatch({type: REQUEST_EPISODE_PENDING});
  fetch(url, {
     headers:{
      "Content-Type":"application/json",
      "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
    }
  })
  .then(resp=>resp.json())
  .then(data => {
      dispatch({
        type:REQUEST_EPISODE_SUCCESS,
        payload:data
      })
  }).catch(error => {
      dispatch({
        type:REQUEST_EPISODE_FAILED,
        payload: error
      })
  })
}