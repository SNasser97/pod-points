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
  CLOSE_SCORE,
  USER_SIGN_SUCCESS,
  USER_SIGN_PENDING,
  USER_SIGN_FAILED,
  USER_REG_PENDING,
  USER_REG_SUCCESS,
  USER_REG_FAILED,
  CHANGE_SIGN_USERNAME_FIELD,
  CHANGE_SIGN_PW_FIELD,
  CHANGE_REG_USERNAME_FIELD,
  CHANGE_REG_PW_FIELD,
  CHANGE_REG_EMAIL_FIELD,
} from "./constants";

// set user reg input
export const setRegPassword = (text) => { return { type: CHANGE_REG_PW_FIELD, payload:text}}
export const setRegUsername = (text) => { return { type: CHANGE_REG_USERNAME_FIELD, payload:text}}
export const setRegEmail = (text) => {return { type: CHANGE_REG_EMAIL_FIELD, payload:text}}

export const register = (email, username, password) => async (dispatch) => {
  const url = "http://localhost:3000/register";
 
  dispatch({ type: USER_REG_PENDING});
  try {
    const respReg = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({email,username,password})
    });
    const respData = await respReg.json();
    dispatch({
      type: USER_REG_SUCCESS,
      payload: respData,
    });
  } catch (error) {
    dispatch({
      type: USER_REG_FAILED,
      payload:error
    });
  }
}

// USER SIGN FORM
export const setUsernameText = (text) => { return { type: CHANGE_SIGN_USERNAME_FIELD, payload: text } }
export const setPasswordText = (text) => { return { type: CHANGE_SIGN_PW_FIELD, payload: text } }

export const signIn = (username, password) => async (dispatch) =>{
  const url = "http://localhost:3000/sign_in";
  dispatch({type: USER_SIGN_PENDING});
  try {
    const respSign = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    });
    const respData = await respSign.json();
    dispatch({
      type: USER_SIGN_SUCCESS,
      payload: respData
    });
  } catch(error) {
    dispatch({
      type: USER_SIGN_FAILED,
      payload: error
    });
  }
}

// UPDATE USER SCORE
export const updateUserScore = () => {
  return {
    type: UPDATE_SCORE,
    payload: 100
  }
}

// ACTION FOR MODAL 
export const closeModal = () => {
  return {
    type: CLOSE_SCORE,
    payload: false
  }
}

// ACTION FOR EPISODES
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

// ACTION FOR HANDLING API REQ + SEARCH PARAMS
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
    setTimeout(() => { //! this can be removed, left in to show loader effect
      dispatch({
        type: REQUEST_RAND_EPISODE_SUCCESS,
        payload: respData
      })
    }, 1000);
    
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