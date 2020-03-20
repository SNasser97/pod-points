import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import Carousel from "../components/Carousel/Carousel";
import CardList from "../components/CardList/CardList";
import SearchField from "../components/SearchField/SearchField";
import ResultList from "../components/ResultList/ResultList";
import CardLoader from "../components/CardLoader/CardLoader";
import Loader from "../components/Loader/Loader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";


class App extends Component {
  constructor() {
    super();
    
    this.state= {
      loading:false,
      podcast: [
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

 componentDidMount() {
  
 }
  loadRandomPod = () => {
    // const url = "http://localhost:3001/testRoute";
    const randompod = "https://listen-api.listennotes.com/api/v2/just_listen"
    
    this.setState({loading:true}, ()=> {
        fetch(randompod, {
        headers:{
          "Content-Type":"application/json",
          "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
        }
      })
      .then(resp=> resp.json())
      .then(data=>{
        console.log(data);
        // Delay response to display skeleten
          setTimeout(() => {
            let time = data.audio_length_sec;
            let hrs = Math.floor(time / 60 / 60);
            let mins = Math.floor(time / 60 ) - (hrs * 60);
              this.setState({podcast:[
                  {
                    "id":data.id,
                    "title":data.podcast_title,
                    "name":data.title,
                    "desc":data.description,
                    "length":mins,
                    "image":data.thumbnail
                  }
            ], loading:false})

          }, 4000)
      }).catch(err=>console.log("fetch err=>",err));
    })
  }
  
  render() {
    const {podcast,loading} = this.state;
    console.log(podcast);
      return (
        <React.Fragment>
        <Nav/>

        <Carousel loadRandomPod={this.loadRandomPod}>
          {loading ? <CardLoader/> :  <ErrorBoundry><CardList bestPodCasts={podcast}/></ErrorBoundry>}
        </Carousel>

        <Rank/>
        <SearchField>
            <ResultList/>
        </SearchField>
        {/*
          <Leaderboard/> // TODO
          <Profile/> // TODO
        */}
        </React.Fragment>
      );
  }
  
}

export default App;
