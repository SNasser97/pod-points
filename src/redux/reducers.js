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
  offset:0,
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

const initStateRandomEp = {
  loadingCard: false,
  randomEpisode: [
    {
      "id":"",
      "title":"",
      "name":"",
      "desc":"",
      "length":"",
      "image":""
    }
  ]
}

export const getRandomEpisode = (state=initStateRandomEp, {type, payload}) => {
  switch(type) {
    case REQUEST_RAND_EPISODE_PENDING:
      return {
        ...state,
        loadingCard:true,
      }
    case REQUEST_RAND_EPISODE_SUCCESS:
      return {
        ...state,
        randomEpisode:[{
          "id":payload.id,
          "title":payload.podcast_title,
          "name":payload.title,
          "desc":payload.description,
          "length":payload.audio_length_sec,
          "image":payload.thumbnail
        }],
        loadingCard:false
      }
    case REQUEST_RAND_EPISODE_FAILED:
      return {
        ...state,
        error: payload,
        loadingCard:false
      }
    default:
      return state;
  }
}