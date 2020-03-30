import React from "react";
import Legal from "../../assets/img/api-transparent.png";

const Carousel = ({children, loadRandomPod}) => {
	return (
		<div className="carousel">
			<h1 className="title fs--1">Listen and earn!</h1>
			{children}
			<img className="legal" src={Legal} alt="powered by listen notes" />
			<button onClick={ loadRandomPod } className="btn btn__full carousel__btn fs--3">Suprise Me</button>
			
		</div>
	);
}

export default Carousel;

			// <button className="btn btn__full carousel__btn carousel__btn--prev">Prev</button>
