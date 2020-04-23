import React, { Component } from "react";
import {Media, Player, controls, withMediaProps} from "react-media-player";
import test from "../../assets/img/test.png";
import styles from "./Media.module.scss";
import CustomPlayPause from './CustomPlayPause/CustomPlayPause';
import CustomProgress from './CustomProgress/CustomProgress';
// dev purposes
import sampleAudio from "../../assets/audio/sample_audio.mp3"; 
const {CurrentTime, Progress, Duration} = controls;

const MediaPlayer = ({ randomEpisode, episodeResults }) => {
 
     const [episode] = randomEpisode; // randomEp[0].props

     console.log("mediap_eplist=>",episodeResults);
     return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={episode.src ? episode.src : sampleAudio} />
          </div>
          <div className="media-details">
            <div className="media-img">
              <img src={episode.image ? episode.image: test} height="12rem" width="12rem" alt={episode.title ? episode.title : "episode thumbnail"}/>
            </div>
            <p className="media-details-name">
              {episode.title.length > 40 ? episode.title.substr(0,40)+"..." : episode.title}
            </p>
          </div>
          <div className="media-controls">
            <CustomProgress className={styles.media_duration_bar}/>
            <CurrentTime className={`fs--4 ${styles.media_time} ${styles.media_time__current}`}/>
            <CustomPlayPause styles={styles}/>
            <Duration className={`fs--4 ${styles.media_time} ${styles.media_time__duration}`}/>
          </div>
        </div>
      </Media>
    )
  }

export default MediaPlayer;
