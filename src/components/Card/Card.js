import React from "react";

const Card = ({id,title,description, length, name, image, onClickShowPlayer,src, playCurrent}) => {
		const currEpisode = [{
			id,
			title,
			length,
			src,
			image
		}]
		if(id !== "") {
			
			let regex = /(<([^>]+)>)/ig; // remove html elements from JSON description
			let descriptionNoHTML = description.replace(regex, ""); 
			return (	
				<div className="card">
					<div className="card--front">
						<div className="card__details">
							<h4 className="card__title fs--2">
								{title}
							</h4>
							<h5 className="card__title fs--3">
								{name}
							</h5>
						</div>
						<div className="card__desc">
							<img src={image} alt="thumbnail" className="card__image" height="150" width="150"/>
								<p className="card__info--length fs--4">
									{"Duration: "+ length}
								</p>
							<div className="card__info--round">
								<p>{descriptionNoHTML !== "" ? descriptionNoHTML.substring(0,150)+"..." : "Hmm..this podcast doesn't include a description..." }</p>
							</div>
						</div>
						<div className="card__btn">
							<button onClick={() => { onClickShowPlayer(); playCurrent(currEpisode)}} className="btn btn__full--secondary">
								<i className="fas fa-4x fa-podcast"></i>
							</button>
						</div>
					</div>
				</div>
			);
		}
		
}

export default Card;