import React from "react";

const Carousel = ({children}) => {
	return (
		<div className="carousel">
			<h2 className="title fs--1">Check out these podcasts</h2>
			{children}
			

			<button className="btn btn__full carousel__btn carousel__btn--prev">Prev</button>
			<button className="btn btn__full carousel__btn carousel__btn--next">Next</button>

		</div>
	);
}

export default Carousel;