import React from "react";
import test from "../../assets/img/test.png";

const Result = ({ id, title, name, desc, image, length, onClickShowPlayer, playCurrent, src, publisher}) => {
	const currEpisode = [{
		id,
		title,
		image,
		length,
		src
	}]
	return (
		<div className="results">
			<div className="results__pod">
				<div className="results__pod-details">
					<img src={image ? image: test} width="10" height="10" alt="podcast" className="results__pod-image"/>
					<h4 className="results__pod-name fs--4">
						{title.length > 150 ? title.substring(0,150)+"..." : title}
					</h4>
					<p className="results__pod-genre">
						{name.substring(0,150)+"..."}
					</p>
				</div>
				<div className="results__pod-details">
					
					<p className="results__pod-genre">
						{publisher}
					</p>
					{/*<p className="results__pod-author">
						Pod Author
					</p>*/}
					<p className="results__pod-length">
						{length}
					</p>
					<button onClick={() => {onClickShowPlayer(); playCurrent(currEpisode);}}className="btn btn__full results__pod-btn">
						<i className="fas fa-4x fa-podcast"></i>
					</button>
				</div>
				
			</div>
		</div>

	)
}

export default Result;