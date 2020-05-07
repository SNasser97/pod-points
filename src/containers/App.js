import React, { Component } from 'react';
import { connect } from "react-redux";

import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import CardLoader from "../components/CardLoader/CardLoader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import MediaPlayer from "../components/MediaPlayer/MediaPlayer";
import Modal from "../components/ModalScore/ModalScore";
import Search from "./Search";
import { 
  requestRandomEpisode, 
  displayMediaPlayer, 
  playCurrentEpisode,
  updateUserScore,
  closeModal
} from "../redux/actions";

const mapStateToProps = (state) => {
  const { getRandomEpisode, showMediaPlayer, getEpisodes, playEpisode, updateScore } = state // reducers
  return {
    isLoading: getRandomEpisode.isLoading,
    randomEpisode: getRandomEpisode.randomEpisode,
    isShown: showMediaPlayer.isShown,
    episodeResults: getEpisodes.episodeResults,
    currentEpisode: playEpisode.currentEpisode,
    score: updateScore.score,
    showReward: updateScore.showReward,
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
  
  calcAudio  = (audioSeconds) => { // in ms
    let hours = Math.floor(audioSeconds / 3600);
    audioSeconds %= 3600; // get remainder of mins from hours 
    let mins = Math.floor(audioSeconds / 60);
    let secs = audioSeconds % 60; // get remainder of seconds from mins
    
    return () => {
      hours = hours ? `${hours}:` : "";
      mins = mins < 10 ? `0${mins}` : mins;
      secs = secs < 10 ? `0${secs}` : secs;
      return `${hours}${mins}:${secs}`
    };
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
      score,
      showReward
    } = this.props; // redux store
    const { calcAudio } = this; // from App
    return (
        <React.Fragment>
        <Nav/>
        {showReward ? <Modal onClickCloseModal={onClickCloseModal} points={updateUserScore().payload} /> : null}
        <Carousel onClickLoadRand = {onClickLoadRand} >
          {isLoading ? 
              <CardLoader/> : 
              <ErrorBoundry>
                <CardList 
                  playCurrent={onClickPlayCurrEpisode} 
                  onClickShowPlayer={onClickShowPlayer} 
                  calcAudio={calcAudio} 
                  randomEpisode={ randomEpisode }
                />
              </ErrorBoundry>
          }
        </Carousel>
        <Rank/>
        <Search 
          onClickPlayCurrEpisode={onClickPlayCurrEpisode} 
          onClickShowPlayer={onClickShowPlayer} 
          calcAudio={calcAudio}
        />
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        {!isShown ? <MediaPlayer score={score} onUpdateScore={ onUpdateScore } currentEpisode={currentEpisode} /> : null}
        </React.Fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
