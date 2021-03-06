import React from "react";
import { 
	Link, 
	Switch, 
	Route 
} from "react-router-dom";

const Nav = ({ logout }) => {
	return (
		<header>
			<nav className="nav fs--3">
				<div className="nav__brand">
					<h3 className="nav__brand--name fs--2"> PodPoints<i className="fas fa-1x fa-microphone-alt"></i></h3>
				</div>
				<Switch>
					<Route path="/(home|leaderboard)">
							<div className="nav__btn">
								<Link to="/">
									<div href="#!" className="btn btn__ghost" onClick={() => logout()}>Sign out</div>
								</Link>
							</div>
					</Route>
					{/* show sign up and sign in buttons when not signed in */}
					<Route path="/">
						<div className="nav__btn">
							<Link to="/register">
								<div href="#!" className="btn btn__full">Sign Up</div>
							</Link>
						</div>
						<div className="nav__btn">
							<Link to="/sign_in">
								<div href="#!" className="btn btn__ghost">Log in</div>
							</Link>
						</div>
					</Route>
				</Switch>
			</nav>
		</header>
	);
}

export default Nav;
// <div className="nav__legal">
// 					<img className="nav__legal--logo" src={Legal} alt="powered by listen notes" />
// 				</div>