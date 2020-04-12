import React from "react";
import {Media, Player, controls, utils} from "react-media-player";
// import { connect } from "react-redux";
import test from "../../assets/img/test.png";
import style from "./Media.module.scss";

const {PlayPause, MuteUnmute, Progress, CurrentTime} = controls;
// const mapStateToProps = () => {
//   return {
    
//   }
// }
// const mapDispatchToProps = () => {
//   return {

//   }
// }
const MediaPlayer = ({randomEpisode}) => {
  const [pod] = randomEpisode; // randomEp[0].props
  return (
    <Media>
      <div className="media">
        <div className="media-player">
          <Player src={pod.src} />
        </div>
        <div className="media-details">
          <div className="media-img">
            <img src={test} alt="episode thumbnail"/>
          </div>
          <p className="media-details-name">
            {pod.name ? pod.name : "Episode name"}
          </p>
        </div>
        <div className="media-controls">
          <PlayPause className={style.media_button} ></PlayPause>
          <i className="far fa-4x fa-play-circle" ></i>
          <MuteUnmute  className={style.media_button}></MuteUnmute>
          <i className="fas fa-2x fa-volume-up"></i>
          <Progress  className={style.media_progress}/>
          <CurrentTime/>
        </div>
      </div>
    </Media>
  )
}

export default MediaPlayer;