import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import CardLoader from "../components/CardLoader/CardLoader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();
    this.state= {
      loadingCard:false,
      randomPodcast: [
        {
          "id":"",
          "title":"",
          "name":"",
          "desc":"",
          "length":"",
          "image":""
        }
      ]
    }
  }


loadRandomPod = () => { // onclick fetch random podcast
  const randomPod = "https://listen-api.listennotes.com/api/v2/just_listen"
  
  this.setState({loadingCard:true}, ()=> {
      fetch(randomPod, {
      headers:{
        "Content-Type":"application/json",
        "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(resp=> resp.json())
    .then(data=>{
        // Delay response to display skeleten
        setTimeout(() => {
          let time = data.audio_length_sec;
          let hrs = Math.floor(time / 60 / 60);
          let mins = Math.floor(time / 60 ) - (hrs * 60);
            this.setState({randomPodcast:[
                {
                  "id":data.id,
                  "title":data.podcast_title,
                  "name":data.title,
                  "desc":data.description,
                  "length":mins,
                  "image":data.thumbnail
                }
          ], loadingCard:false})
        }, 2000)
      }).catch(err=>console.log("fetch err=>",err));
    })
  }
  
  render() {
    const { randomPodcast, loadingCard} = this.state;
    const { loadRandomPod } = this;
    // console.log("NOT RANDOM=>", episodeResults)
    // console.log("IS RANDOM=>", randomPodcast)

      return (
        <React.Fragment>
        <Nav/>
        <Carousel loadRandomPod={ loadRandomPod }>
          {loadingCard ? <CardLoader/> : <ErrorBoundry><CardList bestPodCasts={ randomPodcast }/></ErrorBoundry>}
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

export default App;
