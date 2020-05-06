import React, {Component} from "react";
import { withMediaProps } from 'react-media-player'

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }
  render() {
    const {styles} = this.props;
    console.log("media props=>",this.props.media);
    return(
      <button
        type="button"
        className={styles.media_button}
        onClick={this._handlePlayPause}
      >
       {this.props.media.isPlaying ? 
        <i className="far fa-2x fa-pause-circle" ></i>:
        <i className="far fa-2x fa-play-circle" ></i>}
      </button>
    )
  }
}
export default withMediaProps(CustomPlayPause)