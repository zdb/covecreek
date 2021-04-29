import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./videoBackground.scss"
import { PulseLoader } from 'react-spinners';

class BackgroundVideo extends Component {
  constructor(props) {
      super(props);
      this.state = {
        src: this.getSrc(this.props.url)
      }
  }

  setSrc(){
    const iframe = document.getElementById('vidBgIframe')
    if(iframe.src !== this.getSrc(this.props.url)){
      iframe.src = this.getSrc(this.props.url)
    }

    if(this.props.mobileUrl && (window.innerWidth < 760)){
      if(iframe.src !== this.getSrc(this.props.mobileUrl)){
        iframe.src = this.getSrc(this.props.mobileUrl)
      }
    }
  }

  updateDimensions() {
    this.setSrc();
    var vidBg = document.getElementById('vidBg');
    var vidContainer = document.getElementById('vidContainer');
    var vidBgIframe = document.getElementById('vidBgIframe');
    var videoRatio = 0.5625;
    var vidBgRatio = vidBg.scrollHeight / vidBg.scrollWidth;

    if (vidBgRatio < videoRatio){
      var width = vidBg.scrollWidth;
      var height = vidBg.scrollWidth * videoRatio;
    } else {
      var width = vidBg.scrollHeight / videoRatio;
      var height = vidBg.scrollHeight;
      
    }

    vidBgIframe.style.height = height + "px";
    vidBgIframe.style.width = width + "px";

    vidBgIframe.style.width = width + "px";
    vidBgIframe.style.position = "absolute";
    vidBgIframe.style.marginLeft = -width / 2 + "px";
    vidBgIframe.style.marginTop = -height / 2 + "px";
    vidBgIframe.style.left =  "50%";
    vidBgIframe.style.top = "50%";
    vidBgIframe.style.maxWidth = "none";
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
    this.setSrc();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  getSrc (url) {
    let isVimeo = url.match(/\/\/vimeo.com/)
    let id = url.match(/vimeo.com\/(\d+)/)
    if (isVimeo){
      let id = url.match(/vimeo.com\/(\d+)/)[1]
      return 'https://player.vimeo.com/video/'+id+'?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&loop=1&background=1'
    } else {
      return url
    }
  }
  
  render () {
    console.log(this.props.loadingBg);
    const loadingStyles = {
      background: 'url('+this.props.loadingBg+') no-repeat center',
      backgroundSize: 'cover'
    }

    return (
      <div id="vidBg" className={"videoBackground "+ this.props.className} style={{ width: this.props.width, height: this.props.height, ...this.props.style }}>
        { this.props.loadingBg ?
        <div className="vidBg__loading" style={loadingStyles}>
          <div className="loading-spinner">
            <PulseLoader
                sizeUnit={"px"}
                size={30}
                color={'#fff'}
              />
          </div>
        </div>
        : null }

        <div id="vidContainer">
          <iframe
            id="vidBgIframe" 
            src={this.getSrc(this.props.url)}
          />
        </div>
      </div>
    )
  }
}

export default BackgroundVideo
