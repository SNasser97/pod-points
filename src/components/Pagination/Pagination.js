import React from "react";

const Pagination = ({incrementOffset, decrementOffset, episodeResults, onSearchSubmit}) => {
  console.log(episodeResults.length);
  if(!episodeResults.length) {
    return null;
  } else {
    return (
      <div className="pagination">
           <button onClick={()=> {decrementOffset(); onSearchSubmit();}}>prev</button>
           <button onClick={()=> {incrementOffset(); onSearchSubmit();}}>next</button>
      </div>
    );
  }
}

export default Pagination;