import React from "react";
import Card from "../Card/Card";
// import { playCurrentEpisode } from "../../redux/actions";
// import { playCurrentEpisode } from "../../redux/actions";

const CardList = ({ randomEpisode, calcAudio, onClickShowPlayer, playCurrent}) => {
	
	const [episode] = randomEpisode;
	// we check if episodecast exists else display placeholder
	if(episode.id !== "") {
		return (
		<div className="card-container">
			<Card 
				key={episode.id}
				id={episode.id}
				name={episode.name} 
				title={episode.title} 
				description={episode.description} 
				length={calcAudio(episode.length)} 
				image={episode.image}
				src={episode.src}
				playCurrent={playCurrent}
				onClickShowPlayer={onClickShowPlayer}
			/>
			
		</div>	
		);
	} else {
		return(
			<h3 className="title fs--3">Nothing here...or is there? <span className="fs--2" role="img" aria-label="emoji-think">🤔</span></h3>
		)
	}
	
}

export default CardList;