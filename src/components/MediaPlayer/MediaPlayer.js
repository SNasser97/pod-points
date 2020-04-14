import React from "react";
import {Media, Player, controls} from "react-media-player";
import test from "../../assets/img/test.png";
import styles from "./Media.module.scss";

const { PlayPause, CurrentTime, Progress, Duration} = controls;
 
const MediaPlayer = ({randomEpisode}) => {
  
  const [episode] = randomEpisode; // randomEp[0].props

  return (
    <Media>
      <div className="media">
        <div className="media-player">
          <Player src={episode.src} />
        </div>
        <div className="media-details">
          <div className="media-img">
            <img src={episode.image} height="12rem" width="12rem" alt={episode.title ? episode.title : "episode thumbnail"}/>
          </div>
          <p className="media-details-name">
            {episode.title ? episode.title : "Episode name"}
          </p>
        </div>
        <div className="media-controls">
          <Progress className={styles.media_duration_bar}/>
          <CurrentTime className={`fs--4 ${styles.media_time} ${styles.media_time__current}`}/>
          <PlayPause className={`far fa-2x fa-play-circle ${styles.media_button}`}></PlayPause>
          <Duration className={`fs--4 ${styles.media_time} ${styles.media_time__duration}`}/>
        </div>
      </div>
    </Media>
  )
}

export default MediaPlayer;

// <i className="far fa-4x fa-play-circle" ></i>
// <i className="fas fa-2x fa-volume-up"></i>