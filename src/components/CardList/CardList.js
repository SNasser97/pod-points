import React from "react";
import Card from "../Card/Card";


const CardList = ({bestPodCasts}) => {
	const [pod] = bestPodCasts;

	if(pod.id !== "") {
		return (
		<div className="card-container">
			<Card 
				key={pod.id} 
				name={pod.name} 
				title={pod.title} 
				desc={pod.desc} 
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