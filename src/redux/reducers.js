import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_EPISODE_PENDING,
  REQUEST_EPISODE_SUCCESS,
  REQUEST_EPISODE_FAILED,
  REQUEST_RAND_EPISODE_PENDING,
  REQUEST_RAND_EPISODE_SUCCESS,
  REQUEST_RAND_EPISODE_FAILED,
  SHOW_PLAYER
} from "./constants";



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

