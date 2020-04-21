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
    return(
      <button
        type="button"
        className=""
        onClick={this._handlePlayPause}
      >
       {this.props.media.isPlaying ? <i className="far fa-4x fa-pause-circle" ></i>:<i className="far fa-4x fa-play-circle" ></i>}
      </button>
    )
  }
}
export default withMediaProps(CustomPlayPause)