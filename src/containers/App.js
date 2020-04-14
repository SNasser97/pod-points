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
import { requestRandomEpisode } from "../redux/actions";

const mapStateToProps = (state) => {
  const { getRandomEpisode } = state // reducers
  return {
    isLoading:getRandomEpisode.isLoading,
    randomEpisode: getRandomEpisode.randomEpisode
  }
}
const mapDispatchToProps = (dispatch) => { // dispatch the action
  return {  
    onClickLoadRand: () => dispatch(requestRandomEpisode())
  }
}

class App extends Component {
  constructor() {
    super();
  }
  
  formatAudio = (hours,mins,secs) => {
    let h = hours ? `${hours}:` : "";
    let m = mins < 10 ? `0${mins}` : mins;
    let s = secs < 10 ? `0${secs}` : secs;
    return `${h}${m}:${s}`
  }
  
  calcAudio  = (audioSeconds) => {
    let hours = Math.floor(audioSeconds / 3600);
    audioSeconds %= 3600; // get remainder of mins from hours 
    let mins = Math.floor(audioSeconds / 60);
    let secs = audioSeconds % 60; // get remainder of seconds from mins
    
    return this.formatAudio(hours,mins,secs);
  }
  

  render() {
    const { randomEpisode, isLoading} = this.props;
    const { calcAudio } = this;
    console.log("episode length=>",calcAudio(this.props.randomEpisode[0].length)); // display current time of episode    
      return (
        <React.Fragment>
        <Nav/>
        <Carousel onClickLoadRand = {this.props.onClickLoadRand} >
          {isLoading ? 
              <CardLoader/> : 
              <ErrorBoundry>
                <CardList calcAudio={calcAudio} randomEpisode={ randomEpisode }/>
              </ErrorBoundry>
          }
        </Carousel>
        <Rank/>
        <Search calcAudio={calcAudio}/>
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        <MediaPlayer randomEpisode={randomEpisode}/>
        </React.Fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
