import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./videoThumb.scss"

class VideoThumb extends Component {
  constructor(props) {
      super(props);
      this.state = {
        width: '100%',
        height: '100%'
      }
    }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render () {
    return <div>
      <ReactPlayer
        ref={this.player}
        className='react-player'
        url={this.props.url}
        width={this.state.width}
        height={this.state.height}
        style={}
        playsinline
        playing
        loop
        muted
        controls={false}
        config={{}}
        
      />
    </div>
  }
}

export default VideoThumb
