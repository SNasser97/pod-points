import React, { Component } from "react";
import {Media, Player, controls, withMediaProps} from "react-media-player";
import styles from "./Media.module.scss";
import CustomPlayPause from './CustomPlayPause/CustomPlayPause';
import CustomProgress from './CustomProgress/CustomProgress';
// dev purposes
import sampleAudio from "../../assets/audio/sample_audio.mp3"; 
const {CurrentTime, Duration} = controls;

const MediaPlayer = ({ randomEpisode, currentEpisode }) => {
  
  console.table(currentEpisode);
  const [episode] = currentEpisode ? currentEpisode : randomEpisode; // randomEp[0].props
  console.log("episode arr=>", episode.src);
     
     return (
      <Media>
        <div className="media">
          <div className="media-player">
             {<Player src={episode.src} />}
          </div>
          <div className="media-details">
            <div className="media-img">
               <img src={episode.image} height="12rem" width="12rem" alt={episode.title ? episode.title : "episode thumbnail"}/>
            </div>
            <p className="media-details-name">
               {episode.title.length > 40 ? episode.title.substr(0, 40) + "..." : episode.title}
            </p>
          </div>
          <div className="media-controls">
            <CustomProgress className={styles.media_duration_bar}/>
            <CurrentTime className={`fs--4 ${styles.media_time} ${styles.media_time__current}`}/>
            <CustomPlayPause styles={styles}/>
             {episode.src ? null : <p>could not play</p>}
            <Duration className={`fs--4 ${styles.media_time} ${styles.media_time__duration}`}/>
          </div>
        </div>
      </Media>
    )
  }

export default MediaPlayer;
