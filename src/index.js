import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import { searchEpisodes, getEpisodes } from "./redux/reducers";
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './sass/main.scss';

const rootReducer = combineReducers({
  searchEpisodes:searchEpisodes,
  getEpisodes:getEpisodes
});
const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleWare,logger)
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
