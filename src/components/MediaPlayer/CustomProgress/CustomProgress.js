import React, {Component} from "react";
import { withMediaProps } from 'react-media-player'

const obj = {
  total:0,
  points:10
}
let counter  = 0;
class CustomProgress extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.currentTime !== media.duration;
  }
  componentDidUpdate({ media }) {
    let halfTime = (media.duration / 2)  * 2;
    console.log("media props", media);
    console.log("half=>", Math.floor(halfTime));
    console.log("current=>", Math.floor(media.currentTime));
    console.log("obj total=>", obj.total);
    console.log("counter=>",counter);
    // counter = halfTime >= 1500 ? counter+=5 : counter+=1;
    counter++;
    if (Math.floor(counter) === Math.floor(halfTime)) {
      obj.total += obj.points;
    }
    
  }
  render() {
    const { className, style, media } = this.props;
    
    return (
      <progress
        className={className}
        style={style}
        max={media.duration}
        value={media.currentTime}
      />
    )
  }
}

export default withMediaProps(CustomProgress);