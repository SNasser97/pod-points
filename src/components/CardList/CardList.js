import React from "react";
import Card from "../Card/Card";


const CardList = ({ randomEpisode}) => {
	const [pod] = randomEpisode;

	// we check if podcast exists else display placeholder
	if(pod.id !== "") {
		return (
		<div className="card-container">
			<Card 
				key={pod.id}
				id={pod.id}
				name={pod.name} 
				title={pod.title} 
				description={pod.description} 
				length={pod.length} 
				image={pod.image}
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