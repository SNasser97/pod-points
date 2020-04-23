import React, { Component } from 'react';
import { connect } from "react-redux";

import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import CardLoader from "../components/CardLoader/CardLoader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import MediaPlayer from "../components/MediaPlayer/MediaPlayer";

import Search from "./Search";
import { requestRandomEpisode, displayMediaPlayer } from "../redux/actions";

const mapStateToProps = (state) => {
  const { getRandomEpisode, showMediaPlayer } = state // reducers
  return {
    isLoading:getRandomEpisode.isLoading,
    randomEpisode: getRandomEpisode.randomEpisode,
    isShown: showMediaPlayer.isShown
  } 
}
const mapDispatchToProps = (dispatch) => { // dispatch the action
  return {  
    onClickLoadRand: () => dispatch(requestRandomEpisode()),
    onClickLoadPlayer: () => dispatch(displayMediaPlayer())
  }
}

class App extends Component {
  constructor() {
    super();
  }
  
  calcAudio  = (audioSeconds) => {
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
    const { randomEpisode, isLoading, isShown, onClickLoadPlayer, onClickLoadRand} = this.props;
    const { calcAudio } = this;
    console.log("episode length=>",calcAudio(randomEpisode[0].length)()); // display current time of episode    
      return (
        <React.Fragment>
        <Nav/>
        <Carousel onClickLoadRand = {onClickLoadRand} >
          {isLoading ? 
              <CardLoader/> : 
              <ErrorBoundry>
                <CardList onClickLoadPlayer={onClickLoadPlayer} calcAudio={calcAudio} randomEpisode={ randomEpisode }/>
              </ErrorBoundry>
          }
        </Carousel>
        <Rank/>
        <Search calcAudio={calcAudio}/>
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        {isShown ? <MediaPlayer randomEpisode={randomEpisode}/> : null}
        </React.Fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
