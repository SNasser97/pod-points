import React from "react";

const Rank = ({user}) => {
	return (
		<div className="user">
			<div className="user__details">
				<h2 className="user__rank fs--1">
				  Hi, <span className="user__rank--name">{user.username}</span>
				</h2>
				<p className="user__info fs--3">
				  You have a total score of <span className="user__rank--score">{user.score}</span> points!
				</p>
				<div className="user__info">
					<a href="#!" className="btn btn__ghost user__btn">View leaderboard</a>
				</div>
			</div>
		</div>
	);
}

export default Rank;