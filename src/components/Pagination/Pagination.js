import React from "react";

const Pagination = ({episodeResults, onSearchSubmit, totalResults, paginateResult}) => {

  // max offset/results available from API = 290
  // divide total search results by length of first offset
  const maxOffsetAvailable = () => {
    return Math.ceil(totalResults / episodeResults.length);
  }
  // push 10 from counter for api offset.
  const createPagButtons = () => {
    const resultOffset = [];
    let counter = 0;
    for(let i = 1; i < maxOffsetAvailable(); i++) {
      counter+=10;
      resultOffset.push(counter);
    }
    // offset for first 10 results
    resultOffset.unshift(0); 
    console.log(totalResults);
    console.log("before slice=>", resultOffset);
    // Api does not show results after 30 pages
    const pageNumber = [...resultOffset.slice(0,30)];
    console.log("after slice=>",pageNumber);
    return pageNumber.map((btnNum, index) => {
        return(
          <a href="#!" onClick={()=> paginateResult(btnNum)} key={index} className="btn btn--secondary pagination__btn">
            {index+1}
          </a>
        )
    })
  }
  
  // Only display/create pagination when results are fetched
  if(!episodeResults.length) {
    return null;
  } else {
    return (
      <div className="pagination">
       {
        createPagButtons()
       }  
      </div>
    );
  }
}

export default Pagination;