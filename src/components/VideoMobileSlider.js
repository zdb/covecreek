import React from 'react';
import Slider from "react-slick";
import { css, cx } from 'emotion'
import VimeoPopup from "../components/vimeoPopup"

import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={css`
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 50%;
      left: 0px;
      z-index: 99;
      display: block;
      width: 40px;
      height: 40px;
      padding: 10px;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
      background: rgba(2, 118, 196, 0.7);
      text-align: center;
  `}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <img 
        className={css`
          max-width: 100%;
          max-height: 100%;
        `}
        src={arrowLeft} 
      />
    </div>
  );
}

function SlideNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={css`
        font-size: 0;
        line-height: 0;
        position: absolute;
        top: 50%;
        right: 0px;
        z-index: 99;
        display: block;
        width: 40px;
        height: 40px;
        padding: 10px;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        cursor: pointer;
        color: transparent;
        border: none;
        outline: none;
        background: rgba(2, 118, 196, 0.7);
        text-align: center;  
      `}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <img 
        className={css`
         max-width: 100%;
         max-height: 100%;
       `}
        src={arrowRight} 
      />
    </div>
  );
}



class VideoMobileSlider extends React.Component {
  constructor(props){
    super(props);
    this.slider = React.createRef();
    this.vimeoPopup = React.createRef();
    this.state = {
      background: this.props.videos[0].mobileImage,
      description: this.props.videos[0].description,
    };
  }

  componentDidMount(){
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 150,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "25%",
      arrows: true,
      nextArrow: <SlideNextArrow />,
      prevArrow: <SlidePrevArrow />,
      beforeChange: (current, next) => this.setState({ 
        background: this.props.videos[next].mobileImage, 
        description: this.props.videos[next].description }),
    };
    return (
      <div className={this.props.className + ' ' + css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}>

        <div className={css`
        position: relative;
        padding-top: 90px;
        height: 100%;
        overflow:hidden;
      `}>
      <div 
        className={css`
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(0,0,0,0.6);
          width: 100%;
          height: 100%;
          background-size: cover;
          z-index: -1;
        `}
      ></div>
      <div 
        className={css`
          position: absolute;
          left: 0;
          top: 0;
          background-color: #395288;
          width: 100%;
          height: 100%;
          background-size: cover !important;
          background-position: center;
          background-repeat: no-repeat;
          -webkit-filter: blur(10px);
          -moz-filter: blur(10px);
          -o-filter: blur(10px);
          -ms-filter: blur(10px);
          filter: blur(10px);
          z-index: -2;
        `}
        style={{backgroundImage:'url('+this.state.background+')'}}
      ></div>

      <Slider 
        ref={this.slider} {...settings} 
        className={css`
          margin: auto;

          .button { 
            margin: 0; 
            margin-top: 0.5em;
          }

          .button span {
            font-size: 0.8em;
          }

          .slick-track {
            display: flex;
          }

          .slick-slide {
            height: auto;
            transform: scale(0.8);
          }

          .slick-slide > div {
            height: 100%;
          }

          .slick-current {
            transform: scale(1.1);
            padding-bottom: 1em;
          }

          .slick-dots {
            bottom: -75px;
          }
          .slick-dots li button:before {
            color: #fff;
          }
        `}
      >
        {this.props.videos.map(vid => {
          
          return (
          <div 
            key={vid.id}
            className={css`
              text-align: center;
              padding: 1em;
              height: 100%;
            `
          }>
            <img 
              className={css`
                display: inline-block !important;
                border-radius: 10px;
                box-shadow: rgba(0,0,0, 0.7) 0 0 5px;
                margin: 0.5em;
                
                @media only screen 
                and (min-device-width : 200px)  
                and (orientation : portrait) {
                  height: 100px;
                  margin-bottom: -1em;
                }
                
                @media only screen 
                and (min-device-width : 375px)  
                and (orientation : portrait) {
                  height: 150px;
                  margin-bottom: 0;
                }

                @media only screen 
                and (min-device-width : 375px) 
                and (max-device-width : 812px) 
                and (-webkit-device-pixel-ratio : 2)
                and (orientation : portrait) {
                  height: 280px;
                  margin-bottom: 0;
                  margin-top: 2em;
                }


                @media only screen 
                and (min-device-width : 375px) 
                and (max-device-width : 812px) 
                and (-webkit-device-pixel-ratio : 3)
                and (orientation : portrait) {
                  height: 240px;
                  margin-bottom: 0;
                }
              `}
              src={vid.mobileImage} 
            />
            <div 
              className={'video-title '+css`
                color: white;
                font-size: 1.35em;
                font-weight: 900;
                text-align: center;
              `}
            >{vid.title}</div>
            <VimeoPopup 
              ref={this.vimeoPopup}
              className={css`
                margin-top: auto !important;
              `}
              url={vid.url} 
              buttonText="Play Full Video" 
              buttonStyle="primary" 
            />
          </div>
          )
        }
        )}
      </Slider>

      {/* Description Block */}
      <div className={css`
      width: 100%;
      text-align: center;
      margin-top: auto;
      position: absolute;
      bottom: 5px;
    `}><div className={css`
    color: #fff;
    padding: 1em;
    margin: auto 1em;
    border: 2px solid rgba(255,255,255,0.5);
    display: inline-block;`}>
      {this.state.description}
    </div></div>
    {/* END Description Block */}


      </div></div>
    );
  }
}

export default VideoMobileSlider;
