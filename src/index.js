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
  userSignIn
} from "./redux/reducers";

import thunkMiddleWare from "redux-thunk"
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sass/main.scss';

const rootReducer = combineReducers({
  searchEpisodes, // same as searchEpisodes: searchEpisodes
  getEpisodes,
  getRandomEpisode,
  showMediaPlayer,
  playEpisode,
  updateScore,
  getUsernameText,
  getPasswordText,
  userSignIn,
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleWare, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
