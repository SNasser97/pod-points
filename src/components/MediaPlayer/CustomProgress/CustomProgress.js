import React, {Component} from "react";
import { withMediaProps } from 'react-media-player'

class CustomProgress extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.currentTime !== media.duration;
  }

  render() {
    const { className, style, media } = this.props;
    console.log(media); // props of media
    return (
      <React.Fragment>
      <progress
        className={className}
        style={style}
        max={media.duration}
        value={media.currentTime}
      />
      </React.Fragment>
    )
  }
}

export default withMediaProps(CustomProgress);