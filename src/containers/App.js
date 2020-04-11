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
  
  render() {
    const { randomEpisode, isLoading} = this.props;
      return (
        <React.Fragment>
        <Nav/>
        <Carousel onClickLoadRand = {this.props.onClickLoadRand} >
          {isLoading ? 
              <CardLoader/> : 
              <ErrorBoundry>
                <CardList randomEpisode={ randomEpisode }/>
              </ErrorBoundry>
          }
        </Carousel>
        <Rank/>
        <Search/>
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        </React.Fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
