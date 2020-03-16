import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";

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
          {/*
          
          <SearchField/>
          
          <Leaderboard/>
          <Profile/>
          {
          /*<Results>
            <CardList/>
          </Results>*/
          }
        </React.Fragment>
      );
  }
  
}

export default App;
