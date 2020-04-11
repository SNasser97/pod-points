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
    episodeResults:getEpisodes.episodeResults,
    totalResults: getEpisodes.totalResults,
    isLoading: getEpisodes.isLoading,
    error: getEpisodes.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => {
      dispatch(setSearchField(e.target.value));
    },
    onSearchSubmit: (url, offset) => {
      dispatch(requestEpisodes(url, offset));
    }
  }
}

class Search extends Component { 

  
render() {
    const { // from our redux store
      onSearchChange, 
      onSearchSubmit, 
      searchField,
      episodeResults,
      totalResults,
      isLoading,
    } = this.props; 
    // TODO
    // const { paginateResult} = this;
    return (
      <React.Fragment>
        <SearchField 
          onSearchSubmit={ onSearchSubmit } 
          onSearchChange={ onSearchChange }
          searchField = { searchField }
        >
          { isLoading ? <Loader/> : 
            <ErrorBoundry>
              <ResultList episodeResults={ episodeResults } />

              <Pagination 
                onSearchSubmit={onSearchSubmit}
                totalResults={ totalResults } 
                episodeResults={ episodeResults } 
                searchField={searchField}
              />

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