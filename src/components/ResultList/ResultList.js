import React from "react";
import Result from "../Result/Result";

const ResultList = ({ episodeResults }) => {
	return (
		<React.Fragment>
      {
        episodeResults.map((eps,i) => {
          return <Result 
            key={i}
            id={eps.id}
            title={eps.podcast_title_original} 
            name={eps.title_original} 
            desc={eps.description_original} 
            image={ eps.thumbnail } 
            length={ eps.audio_length_sec }
            /> 
        })
      }
		</React.Fragment>
	)
}

export default ResultList;