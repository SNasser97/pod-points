import React from "react";

const Carousel = ({children, loadRandomPod}) => {
	return (
		<div className="carousel">
			<h2 className="title fs--1">Listen and earn!</h2>
			{children}
			<button onClick={loadRandomPod} className="btn btn__full carousel__btn fs--3">Suprise Me</button>
			
		</div>
	);
}

export default Carousel;

			// <button className="btn btn__full carousel__btn carousel__btn--prev">Prev</button>
