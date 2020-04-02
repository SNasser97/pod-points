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
      totalResults:0,
      searchField: "",
      offset:0,
    }
  }
 
 // pass as prop to Paginate component which on click pass value from PageNum array
 paginateResult = (pageNum) => {
    const {searchField, offset} = this.state;
    this.setState({offset:pageNum})
    this.setState({loadingResult:true},  ()=> {
       this.callAPI(searchField, pageNum);
    })
 
 }

 // Get value of input field from user
 onSearchChange = (e) => {
    this.setState({searchField:e.target.value});
 }

 // Call api with provide query params
 callAPI = async (urlSearch,urlOffset) => {
      const {searchField, offset} = this.state;

      const url =  `https://listen-api.listennotes.com/api/v2/search?q=${searchField}&offset=${urlOffset ? offset : 0}&scope=episode&language=Any language&len_min=0`
      const resp =  await fetch(url, {
        headers:{
          "Content-Type":"application/json",
          "X-ListenAPI-Key":`${process.env.REACT_APP_API_KEY}`
        }
      })
      const respJSON =  await resp.json();
      this.setState({
        episodeResults:respJSON.results,
        totalResults:respJSON.total,
        loadingResult:false,
      });
 }

 // Display first page of result from query string
 onSearchSubmit = () => {
  const {searchField, offset} = this.state;
  this.setState({loadingResult:true}, ()=> {
       this.callAPI(searchField, offset);
  })
}
  
render() {
    const {episodeResults, loadingResult, totalResults, offset} = this.state;
    const {onSearchSubmit, onSearchChange, paginateResult} = this;
    return (
      <React.Fragment>
        <SearchField onSearchSubmit={ onSearchSubmit } onSearchChange={ onSearchChange }>
          {loadingResult ? <Loader/> : 
            <ErrorBoundry>
              <ResultList episodeResults={ episodeResults } />
              <Pagination totalResults={ totalResults } episodeResults={ episodeResults } paginateResult={paginateResult} />
            </ErrorBoundry> 
          }
        </SearchField>
      </React.Fragment>
    );
  }
}

export default Search;
