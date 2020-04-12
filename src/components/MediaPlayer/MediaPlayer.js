import React from "react";
import {Media, Player, controls} from "react-media-player";
import { connect } from "react-redux";

const {PlayPause, MuteUnmute} = controls;
const mapStateToProps = () => {
  return {
    
  }
}
const mapDispatchToProps = () => {
  return {

  }
}
const MediaPlayer = ({randomEpisode}) => {
  console.log(randomEpisode);
  const {src,image} = randomEpisode;
  return (
    <Media>
      <div className="media">
        <div className="media-player">
          <Player src={src} />
        </div>
        <div className="media-controls">
          <div><img src={image} alt="episode thumbnail"/></div>
          <PlayPause />
          <MuteUnmute />
        </div>
      </div>
    </Media>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(MediaPlayer);