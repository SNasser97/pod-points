import React from "react";

const Pagination = ({episodeResults}) => {
  return (
      <div>
        {
          episodeResults.map((item,pagNumber) => {
            return <button className="btn--primary" key={pagNumber}>{pagNumber}</button>
          })
        }
      </div>
  );
}

export default Pagination;