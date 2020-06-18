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
  USER_SIGN_IN,
  USER_SIGN_PENDING,
  USER_SIGN_FAILED,
} from "./constants";

// SIGN USER IN
const initStateSignIn = {
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

export const userSignIn = (state=initStateSignIn, {type,payload}) => {
  switch(type) {
    case USER_SIGN_PENDING:
      return {...state}
    case USER_SIGN_IN:
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

