import React from "react";

const Card = () => {
	return (
				<div className="card">
					<div className="card--front">
						<div className="card__details">
						<h4 className="card__title fs--2">
							Card Title
						</h4>
						
						</div>
						<div className="card__desc">
							<p className="card__info--genre">
								Pod Genre
							</p>
							<p className="card__info--length">
								Pod card__info--length
							</p>
							<p className="card__info--desc">
								About podcast here....
							</p>
						</div>
						<div className="card__btn">
							<button className="btn btn__full">Play</button>
						</div>
					</div>
					<div className="card--back">
							
					</div>
				</div>
	);	
}

export default Card;