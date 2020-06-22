import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import CardLoader from "../components/CardLoader/CardLoader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import MediaPlayer from "../components/MediaPlayer/MediaPlayer";
import Modal from "../components/ModalScore/ModalScore";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Search from "./Search";
import Home from "../components/Home/Home";

import { 
  requestRandomEpisode, 
  displayMediaPlayer, 
  playCurrentEpisode,
  updateUserScore,
  closeModal,
} from "../redux/actions";

const mapStateToProps = (state) => {
  const { getRandomEpisode, showMediaPlayer, getEpisodes, playEpisode, updateScore, userSignIn } = state // reducers
  return {
    isLoading: getRandomEpisode.isLoading,
    randomEpisode: getRandomEpisode.randomEpisode,
    isShown: showMediaPlayer.isShown,
    // episodeResults: getEpisodes.episodeResults,
    currentEpisode: playEpisode.currentEpisode,
    score: updateScore.score,
    showReward: updateScore.showReward,
    user: userSignIn.user,
    isLoggedIn: userSignIn.isLoggedIn,
  } 
}
const mapDispatchToProps = (dispatch) => { // dispatch the action
  return {  
    onClickLoadRand: () => dispatch(requestRandomEpisode()),
    onClickShowPlayer: () => dispatch(displayMediaPlayer()),
    onClickPlayCurrEpisode: (episode) => dispatch(playCurrentEpisode(episode)),
    onUpdateScore: () => dispatch(updateUserScore()),
    onClickCloseModal: () => dispatch(closeModal())
  }
}

class App extends Component {
  
  constructor() {
    super();
  }
  
  calcAudio  = (audioSeconds) => { // in ms
    let hours = Math.floor(audioSeconds / 3600);
    audioSeconds %= 3600; // get remainder of mins from hours 
    let mins = Math.floor(audioSeconds / 60);
    let secs = audioSeconds % 60; // get remainder of seconds from mins
    
    // return () => {
    hours = hours ? `${hours}:` : "";
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
    return `${hours}${mins}:${secs}`
  // };
  }

  render() {
    const { 
      currentEpisode, 
      randomEpisode, 
      isLoading, 
      isShown, 
      onClickShowPlayer, 
      onClickLoadRand,
      onClickPlayCurrEpisode,
      onClickCloseModal,
      onUpdateScore,
      showReward,
      user,
      isLoggedIn,
    } = this.props; // redux store
    const { calcAudio } = this; // from App
    console.info(' in side app.js', user, isLoggedIn)

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/sign_in">
            {/* todo: reset setInit state when logging out */}
            { isLoggedIn ? <Redirect to="/home" /> : <SignIn />}
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/home">
            {showReward ? (
              <Modal
                onClickCloseModal={onClickCloseModal}
                points={updateUserScore().payload}
              />
            ) : null}
            <Carousel onClickLoadRand={onClickLoadRand}>
              {isLoading ? (
                <CardLoader />
              ) : (
                <ErrorBoundry>
                  <CardList
                    playCurrent={onClickPlayCurrEpisode}
                    onClickShowPlayer={onClickShowPlayer}
                    calcAudio={calcAudio}
                    randomEpisode={randomEpisode}
                  />
                </ErrorBoundry>
              )}
            </Carousel>
            <Rank />
            <Search
              onClickPlayCurrEpisode={onClickPlayCurrEpisode}
              onClickShowPlayer={onClickShowPlayer}
              calcAudio={calcAudio}
            />
            {/*
                  <Leaderboard/> // TODO
                  <Profile/> // TODO
                */}
            {isShown ? (
              <MediaPlayer
                onUpdateScore={onUpdateScore}
                currentEpisode={currentEpisode}
              />
            ) : null}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
