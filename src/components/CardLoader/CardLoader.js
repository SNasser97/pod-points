import React from "react";

const CardLoader = () => {
	return (
		<div className="lds-container">
			<h2 className="title fs--2">Grabbing you an episode...</h2>
			<div className="lds-container-skel">
				<div className="lds-container-skel--img fs--3">
					<p></p>
				</div>
				<div className="lds-container-skel--about fs--3">
					<p></p>
				</div>
				<div className="lds-container-skel--duration fs--3">
					<p></p>
				</div>
			</div>
		</div>
	)
}

export default CardLoader;