import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './ResponsivePlayer.scss'
import VimeoPlayer from 'react-player/lib/players/Vimeo'

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <VimeoPlayer
          className='react-player'
          url='https://vimeo.com/305837704/d7fe54305c'
          playing
          controls
          style={{width: "11100px", height: "1100px"}}
        />
      </div>
    )
  }
}

export default ResponsivePlayer