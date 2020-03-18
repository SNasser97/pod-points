import React from "react";
import Card from "../Card/Card";

const CardList = ({bestPodCasts}) => {
	const [pod] = bestPodCasts;

	if(pod.title !== "") {
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
			<h3 className="title fs--3">Click me below for a suprise episode...</h3>
		)
	}
	
}

export default CardList;