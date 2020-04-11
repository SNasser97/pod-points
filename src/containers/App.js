import React, { Component } from 'react';
import { connect } from "react-redux";

import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import CardLoader from "../components/CardLoader/CardLoader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
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
  formatAudio = (audioSeconds) => {
    let h = Math.floor(audioSeconds / 3600);
    audioSeconds %= 3600; // get remainder of mins from hours 
    let m = Math.floor(audioSeconds / 60);
    let s = audioSeconds % 60; // get remainder of seconds from mins
    m  = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    h = h ? `${h}:` : "";
    return `${h}${m}:${s}`
  }

  render() {
    const { randomEpisode, isLoading} = this.props;
    const { formatAudio} = this;

      return (
        <React.Fragment>
        <Nav/>
        <Carousel onClickLoadRand = {this.props.onClickLoadRand} >
          {isLoading ? 
              <CardLoader/> : 
              <ErrorBoundry>
                <CardList formatAudio={formatAudio} randomEpisode={ randomEpisode }/>
              </ErrorBoundry>
          }
        </Carousel>
        <Rank/>
        <Search formatAudio={formatAudio}/>
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        </React.Fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
