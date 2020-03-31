import React from "react";
import Result from "../Result/Result";

const ResultList = ({ episodeResults }) => {
    const calcTime = (secs) => {
      let time = secs;
      let hrs = Math.floor(time / 60 / 60);
      let mins = Math.floor(time / 60 ) - (hrs * 60);
      return `${mins}:00`;
    }
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
            length={ calcTime(eps.audio_length_sec) }
            /> 
        })
      }
		</React.Fragment>
	)
}

export default ResultList;

// test values
// <Result name="adsadsaddsd" title="How I became the Podcast champion" />
    // <Result name="The lorem ipsum of our time is when they decided to do this to me" title="How I became the Podcast champion" />