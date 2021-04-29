import React, { Component } from 'react';
import Slider from "./NetflixSlider"

class VideoSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
      <Slider activeSlide={this.props.videos[0]}>
          {this.props.videos.map(movie => (
            <Slider.Item movie={movie} key={movie.id}></Slider.Item>
          ))}
      </Slider>
      </div>
    );
  }
}

export default VideoSlider;