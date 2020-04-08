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
  let { getRandomEpisode } = state // reducers
  return {
    loadingCard:getRandomEpisode.loadingCard,
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
    this.state= {
      // loadingCard:false,
      // randomEpisode: [
      //   {
      //     "id":"",
      //     "title":"",
      //     "name":"",
      //     "desc":"",
      //     "length":"",
      //     "image":""
      //   }
      // ]
    }
  }


loadRandomPod = () => { // onclick fetch random podcast
  // const randomPod = "https://listen-api.listennotes.com/api/v2/just_listen"
  
  // this.setState({loadingCard:true}, ()=> {
  //     fetch(randomPod, {
  //     headers:{
  //       "Content-Type":"application/json",
  //       "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
  //     }
  //   })
  //   .then(resp=> resp.json())
  //   .then(data=>{
  //       // Delay response to display skeleten
  //       setTimeout(() => {
  //         let time = data.audio_length_sec;
  //         let hrs = Math.floor(time / 60 / 60);
  //         let mins = Math.floor(time / 60 ) - (hrs * 60);
  //           this.setState({randomPodcast:[
  //               {
  //                 "id":data.id,
  //                 "title":data.podcast_title,
  //                 "name":data.title,
  //                 "desc":data.description,
  //                 "length":mins,
  //                 "image":data.thumbnail
  //               }
  //         ], loadingCard:false})
  //       }, 2000)
  //     }).catch(err=>console.log("fetch err=>",err));
  //   })
  }
  
  render() {
    const { randomEpisode, loadingCard} = this.props;
    // const { randomPodcast, loadingCard} = this.state;

    // const { loadRandomPod } = this;
    console.log("random prop load=>", loadingCard);
    console.log("random prop episode=>", randomEpisode);

      return (
        <React.Fragment>
        <Nav/>
        <Carousel 
          onClickLoadRand = {this.props.onClickLoadRand} 
          // loadRandomPod={ loadRandomPod }
        >
          {loadingCard ? 
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
// export default App;
