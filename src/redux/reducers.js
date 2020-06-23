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

// SIGNIN FORM
const initStateSignInUserField = { usernameField:'', }
export const getUsernameText = (state = initStateSignInUserField, {type, payload}) => {
  switch (type) {
    case CHANGE_SIGN_USERNAME_FIELD:
      return {...state, usernameField:payload}
    default:
      return state
  }
}
const initStateSignInPassField = { passwordField:'', }
export const getPasswordText = (state = initStateSignInPassField, {type,payload}) => {
  switch (type) {
    case CHANGE_SIGN_PW_FIELD:
      return {...state, passwordField: payload}
    default:
      return state
  }
}
// REG FORM
const initStateRegPassField = {passwordFieldReg:''}
export const getRegPasswordText = (state = initStateRegPassField, {type, payload}) => {
  switch (type) {
    case CHANGE_REG_PW_FIELD:
      return { ...state, passwordFieldReg: payload}
    default:
      return state
  }
}
const initStateRegUserField = {usernameFieldReg:''}
export const getRegUsernameText = (state = initStateRegUserField, { type, payload }) => {
  switch (type) {
    case CHANGE_REG_USERNAME_FIELD:
      return { ...state, usernameFieldReg: payload }
    default:
      return state
  }
}
const initStateRegEmailField = {emailFieldReg:''}
export const getRegEmailText = (state=initStateRegEmailField, {type,payload}) => {
  switch (type) {
    case CHANGE_REG_EMAIL_FIELD:
      return { ...state, emailFieldReg:payload}
    default:
      return state;
  }
}
// SIGN USER IN
const initStateUserSession = {
  user: {
    id:"",
    username:"",
    email:"",
    score:0,
    joined: "",
  },
  error: "",
  isLoggedIn:false,
}
export const userRegister = (state = initStateUserSession, {type, payload}) => {
  switch (type) {
    case USER_REG_PENDING:
      return {...state, isLoggedIn:false}
    case USER_REG_SUCCESS:
      return {
        ...state, 
        user: {
          id: payload.id,
          username: payload.username,
          email: payload.email,
          score: payload.score,
          joined: payload.joined,
        },
        isLoggedIn:true,
      }
    case USER_REG_FAILED:
      return {...state, error:payload, isLoggedIn:false}
    default:
      return state;
  }
}
export const userSignIn = (state = initStateUserSession, {type,payload}) => {
  switch(type) {
    case USER_SIGN_PENDING:
      return {...state, isLoggedIn:false}
    case USER_SIGN_SUCCESS:
      return {
        ...state,
        user: {
          id:payload.id,
          username:payload.username,
          email:payload.email,
          score: payload.score,
          joined: payload.joined,
        },
        isLoggedIn: true
      }
    case USER_SIGN_FAILED:
      return {...state, error:payload, isLoggedIn:false}
    default:
      return state;
  }
};

// UPDATE USER SCORE 
const initStateUser = {
  score:0,
  showReward: false
}
export const updateScore = (state=initStateUser, {type,payload}) => {
  switch(type) {
    case UPDATE_SCORE:
      return {...state, 
        score: state.score+payload,
        showReward: true,
      }
    case CLOSE_SCORE:
      return {...state, showReward:payload}
    default:
      return state;
  }
}

// PLAY CURRENT EPISODE
const initStatePlayEpisode = {
  currentEpisode:[],
}
export const playEpisode = (state = initStatePlayEpisode, {type,payload}) => {
  switch(type) {
    case PLAY_CURRENT_EPISODE:
      return { ...state, currentEpisode: payload};
    default:
      return state;
  }
}

// DISPLAY MEDIA PLAY ON BUTTON CLICK
const initStateMediaPlayer = {
  isShown: false,
}

export const showMediaPlayer = (state=initStateMediaPlayer, {type,payload}) => {
  switch(type) {
    case SHOW_PLAYER:
      return {...state, isShown:payload}
    default:
      return state;
  }
}

// SET QUERY STRING ON EPISODE RESULTS
const initStateSearch = {
  searchField:""
}

export const searchEpisodes = (state=initStateSearch, {type, payload}) => {
  switch(type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload }
    default:
      return state; // ""
  }
}


// GET SPECIFIED EPISODE RESULTS
const initStateEpisodes = {
  isLoading:false,
  episodeResults:[],
  totalResults:0,
  error:""
}

export const getEpisodes = (state=initStateEpisodes, {type, payload}) => {
  switch(type) {
    case REQUEST_EPISODE_PENDING:
      return {
        ...state,
        isLoading:true,
      }
    case REQUEST_EPISODE_SUCCESS:
      return {
        ...state,
        episodeResults: payload.results,
        totalResults: payload.total,
        isLoading:false
      }
    case REQUEST_EPISODE_FAILED:
      return {
        ...state,
        error: payload,
        isLoading:false
      }
    default:
      return state;
  }
}

// GET RANDOM EPISODE FROM API
const initStateRandomEp = {
  isLoading: false,
  randomEpisode: [
    {
      "id":"",
      "title":"",
      "name":"",
      "description":"",
      "length":"",
      "image":"",
      "src":""
    }
  ]
}

export const getRandomEpisode = (state=initStateRandomEp, {type, payload}) => {
  switch(type) {
    case REQUEST_RAND_EPISODE_PENDING:
      return {
        ...state,
        isLoading:true
      }
    case REQUEST_RAND_EPISODE_SUCCESS:
      return {
        ...state,
        randomEpisode:[{
          "id":payload.id,
          "title":payload.podcast_title,
          "name":payload.title,
          "description":payload.description,
          "length":payload.audio_length_sec,
          "image":payload.thumbnail,
          "src":payload.audio
        }],
        isLoading:false
      }
    case REQUEST_RAND_EPISODE_FAILED:
      return {
        ...state,
        error: payload,
        isLoading:false
      }
    default:
      return state;
  }
}

