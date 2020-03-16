import React from "react";

const Card = () => {
	return (
			<React.Fragment>
				<h2 className="title fs--3">Check out these podcasts</h2>
			<div className="card">

				<div className="card__details">
					<h4 className="card__title">
						Card Title
					</h4>
					<p className="card__info--genre">
						Pod Genre
					</p>
					<p className="card__info--length">
						Pod card__info--length
					</p>
				</div>
				<div className="card__btn">
					<button className="btn btn__full">Play</button>
				</div>
			</div>
		</React.Fragment>
	);	
}

export default Card;