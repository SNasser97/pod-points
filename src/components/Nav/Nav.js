import React from "react";
import Legal from "../../assets/img/api-transparent.png";

const Nav = () => {
	return (
		<header>
			<nav className="nav fs--3">
				<div className="nav__brand">
					<h3 className="nav__brand--name fs--2"> PodPoints <span role="img" aria-label="emoji microphone">🎤</span></h3>
				</div>
				
				<div className="nav__btn">
					<a href="#!" className="btn btn__full">Sign Up</a>
				</div>
				<div className="nav__btn">
					<a href="#!" className="btn btn__ghost">Log in</a>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
// <div className="nav__legal">
// 					<img className="nav__legal--logo" src={Legal} alt="powered by listen notes" />
// 				</div>