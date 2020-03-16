import React from "react";

const Carousel = (props) => {
	return (
		<div className="carousel">
			{props.children}
		</div>
	);
}

export default Carousel;