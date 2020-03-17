import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import SearchField from "../components/SearchField/SearchField";
import ResultList from "../components/ResultList/ResultList";

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
      return (
        <React.Fragment>
        <Nav/>
        <Rank/>
        <Carousel>
            <CardList/>
        </Carousel>
        <SearchField>
            <ResultList/>
        </SearchField>
          {/*
            <SearchField/>
            <Leaderboard/>
            <Profile/>
          */}
        </React.Fragment>
      );
  }
  
}

export default App;
