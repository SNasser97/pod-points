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
import Leaderboard from "../components/Leaderboard/Leaderboard";

import { 
  requestRandomEpisode, 
  displayMediaPlayer, 
  playCurrentEpisode,
  updateUserScore,
  closeModal,
  requestAllUsers,
  logUserOut
} from "../redux/actions";

const mapStateToProps = (state) => {
  const { 
    getRandomEpisode, 
    showMediaPlayer, 
    playEpisode, 
    updateScore, 
    userSignIn,
    userRegister,
    getAllUsers,
   } = state // reducers
  return {
    isLoading: getRandomEpisode.isLoading,
    randomEpisode: getRandomEpisode.randomEpisode,
    isShown: showMediaPlayer.isShown,
    currentEpisode: playEpisode.currentEpisode,
    score: updateScore.score, //! updated score from BE
    reward: updateScore.reward, //! points awarded from BE
    showReward: updateScore.showReward,
    user: !userSignIn.user.id ? userRegister.user : userSignIn.user,
    isLoggedIn: userSignIn.isLoggedIn || userRegister.isLoggedIn,
    isLoadingAll: getAllUsers.isLoadingAll,
    allUsers: getAllUsers.allUsers,
    userLoginError: userSignIn.error,
    userRegError: userRegister.error,
    showLoginInvalid: userSignIn.showInvalid,
    showRegInvalid: userRegister.showInvalid,
  } 
}
const mapDispatchToProps = (dispatch) => { // dispatch the action
  return {  
    onClickLoadRand: () => dispatch(requestRandomEpisode()),
    onClickShowPlayer: () => dispatch(displayMediaPlayer()),
    onClickPlayCurrEpisode: (episode) => dispatch(playCurrentEpisode(episode)),
    onUpdateScore: (id) => dispatch(updateUserScore(id)),
    onClickCloseModal: () => dispatch(closeModal()),
    onLoadShowUsers: () => dispatch(requestAllUsers()),
    onClickLogOut: () => {
      localStorage.removeItem("user");
      dispatch(logUserOut())
    }
  }
}

class App extends Component {
  
  // constructor() {
  //   super();
  // }
  calcAudio  = (audioSeconds) => { // in ms
    let hours = Math.floor(audioSeconds / 3600);
    audioSeconds %= 3600; // get remainder of mins from hours 
    let mins = Math.floor(audioSeconds / 60);
    let secs = audioSeconds % 60; // get remainder of seconds from mins
    
    hours = hours ? `${hours}:` : "";
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
    return `${hours}${mins}:${secs}`
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
      onLoadShowUsers,
      onUpdateScore,
      showReward,
      user,
      score,
      reward,
      isLoggedIn,
      allUsers,
      showLoginInvalid,
      showRegInvalid,
      userLoginError,
      userRegError
    } = this.props; // redux store
    const { calcAudio } = this; // from App
    return (
      <Router>
        <Nav logout={this.props.onClickLogOut} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/sign_in">
            {/* todo: reset setInit state when logging out */}
            { isLoggedIn ? <Redirect to="/home" /> : <SignIn validLog={showLoginInvalid} errorLog={userLoginError}/>}
          </Route>
          <Route exact path="/register">
            {isLoggedIn ? <Redirect to="/home" /> : <Register validReg={showRegInvalid} errorReg={userRegError}/>}
          </Route>
          <Route path="/home">
            {showReward ? (
              <Modal
                onClickCloseModal={onClickCloseModal}
                reward={reward}
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

            <Rank user={user} score={score} refresh={onLoadShowUsers}/>
            
            <Search
              onClickPlayCurrEpisode={onClickPlayCurrEpisode}
              onClickShowPlayer={onClickShowPlayer}
              calcAudio={calcAudio}
            />
            {isShown ? (
              <MediaPlayer
                onUpdateScore={onUpdateScore}
                currentEpisode={currentEpisode}
                id = {user.id}
              />
            ) : null}
            
          </Route>
          <Route exact path='/leaderboard'>
            <Leaderboard user={user} allUsers={allUsers} refresh={onLoadShowUsers}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
