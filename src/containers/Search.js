import React, { Component } from 'react';
import SearchField from "../components/SearchField/SearchField";
import ResultList from "../components/ResultList/ResultList";
import Loader from "../components/Loader/Loader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import Pagination from "../components/Pagination/Pagination";

class Search extends Component {
  constructor() {
    super();
    this.state= {
      loadingResult:false,
      episodeResults: [],
      searchField: "",
      offset:0,
    }
  }

 resetOffset = () => {
    this.setState({offset: 0});
 }
 incrementOffset = () => {
    this.setState({offset: this.state.offset+10});
 }
 decrementOffset = () => {
    // make offset never go below - 10
    if(this.state.offset === 0) {
      this.setState({offset: 0});
    } else {
      this.setState({offset: this.state.offset-10});
    }
 }
 onSearchChange = (e) => {
    this.setState({searchField:e.target.value});
 }
 onSearchSubmit = () => {
  this.setState({loadingResult:true}, ()=> {
    const url = `https://listen-api.listennotes.com/api/v2/search?q=${this.state.searchField}&sort_by_date=0&scope=episode&offset=${this.state.offset}&language=Any language&len_min=0`
    fetch(url, {
      headers:{
          "Content-Type":"application/json",
          "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
        }
    })
    .then(resp=>resp.json())
    .then(data => {
      console.log("data results=>",data.results);
      console.log("data", data);
      this.setState({
        episodeResults: data.results, 
        loadingResult:false,
      })
    });
  console.log(url);
    
  })
}
  
  render() {
    const {episodeResults, loadingResult} = this.state;
    const {onSearchSubmit, onSearchChange} = this;
    return (
      <React.Fragment>
        <SearchField onSearchSubmit={ onSearchSubmit } onSearchChange={ onSearchChange }>
          {loadingResult ? <Loader/> : 
            <ErrorBoundry>
              <ResultList episodeResults={ episodeResults } />
              <Pagination onSearchSubmit={ onSearchSubmit } episodeResults={ episodeResults } incrementOffset={this.incrementOffset} decrementOffset={this.decrementOffset}/>
            </ErrorBoundry> 
          }
        </SearchField>
      </React.Fragment>
    );
  }
}

export default Search;
