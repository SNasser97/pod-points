import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { 
  searchEpisodes, 
  getEpisodes, 
  getRandomEpisode, 
  showMediaPlayer, 
  playEpisode,
  updateScore,
  getUsernameText,
  getPasswordText,
  getRegPasswordText,
  getRegUsernameText,
  getRegEmailText,
  getAllUsers,
  userSignIn,
  userRegister,
  userSignOut,
} from "./redux/reducers";

import thunkMiddleWare from "redux-thunk"
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sass/main.scss';



//! reducers part of app
const appReducer = combineReducers({
  searchEpisodes, // same as searchEpisodes: searchEpisodes
  getEpisodes,
  getRandomEpisode,
  showMediaPlayer,
  playEpisode,
  updateScore,
  getUsernameText,
  getPasswordText,
  getRegPasswordText,
  getRegUsernameText,
  getRegEmailText,
  getAllUsers,
  userSignIn,
  userRegister,
  userSignOut,
});

//! (1/2) - when the action "USER_LOG_OUT"  is dispatched, 
//! (2/2) - set state as undefined and use initState defined in each reducer.
const rootReducer = (state, action) => {
  if (action.type === "USER_LOG_OUT") {
    state = undefined;
  }
  // reset validation box
  if (action.type === "USER_SIGN_FAILED" || action.type === "USER_REG_FAILED") {
    state.userSignIn = undefined;
    state.userRegister = undefined;
  }
  return appReducer(state, action);
}

// This prevents users details being cleared when the browser page is reloaded.
//! save redux state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const stateString = JSON.stringify(state); // stringify state
    localStorage.setItem("user", stateString);
  } catch (e) {
    console.error(e)
  }
}
//! load item user from local storage
const loadFromLocalStorage = () => {
  try {
    const stateString = localStorage.getItem("user");
    if (stateString === null) {
      return undefined
    };
    return JSON.parse(stateString)
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

//! load local storage set to const and use in store.
const persistentState = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  persistentState,
  applyMiddleware(
    thunkMiddleWare, 
    //! uncomment logger during development
    // logger
  )
);

//! save current or new user to local storage
store.subscribe(() => {
  saveToLocalStorage(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
