import React, { Component } from 'react';
import { connect } from "react-redux";

import SearchField from "../components/SearchField/SearchField";
import ResultList from "../components/ResultList/ResultList";
import Loader from "../components/Loader/Loader";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import Pagination from "../components/Pagination/Pagination";
import { setSearchField, requestEpisodes } from "../redux/actions";

const mapStateToProps = (state) => {
  const {searchEpisodes, getEpisodes} = state;
  return {
    searchField: searchEpisodes.searchField,
    episodesList:requestEpisodes.episodesList,
    total: getEpisodes.total,
    isLoading: requestEpisodes.isLoading,
    error: requestEpisodes.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => {
      dispatch(setSearchField(e.target.value))
    },
    onRequestEpisodes: (url, offset) => {
      dispatch(requestEpisodes(url,offset))
    }
  }
}

class Search extends Component {
  constructor() {
    super();
    this.state= {
      loadingResult:false,
      episodeResults: [],
      totalResults:0,
      // searchField: "",
      offset:0,
    }
  }
 
 // pass as prop to Paginate component which on click pass value from PageNum array
 paginateResult = (pageNum) => {
    const { searchField } = this.props;
    this.setState({offset:pageNum})
    // this.setState({loadingResult:true},  ()=> {
    //    this.callAPI(searchField, pageNum);
    // })
 
 }

 /* 
   WITHOUT REDUX

   onSearchChange = (e) => {
      this.setState({searchField:e.target.value});
   }

 */

 /*
   WITHOUT REDUX

   callAPI = async (urlSearch,urlOffset) => {
        const {offset} = this.state;
        const {searchField} = this.props;
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
 */

 // Display first page of result from query string
 onSearchSubmit = (url, Offset) => {
  // e.preventDefault();
  const { offset } = this.state;
  const { searchField } = this.props;
  this.props.onRequestEpisodes(this.props.searchField,this.props.offset);
  console.log(searchField);
  console.log(offset);
  console.log(this.props.episodesList);

   /*
      WITHOUT REDUX

      this.setState({offset:0}); // reset for 1st page results
      this.setState({loadingResult:true}, ()=> {
           this.callAPI(searchField, offset);
    })
  */

}
  
render() {
    const { onSearchChange, episodesList, total } = this.props; // from our redux
    const {episodeResults, loadingResult, totalResults} = this.state;
    const {onSearchSubmit, paginateResult} = this;
    return (
      <React.Fragment>
        <SearchField onSearchSubmit={ onSearchSubmit } onSearchChange={ onSearchChange }>
          {this.props.isLoading ? <Loader/> : 
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

// listen
export default connect(mapStateToProps, mapDispatchToProps)(Search);

// connect = () => {do stuff related to connect...} return (Search)