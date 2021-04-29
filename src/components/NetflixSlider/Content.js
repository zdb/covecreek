import React, { useState, useEffect, Component } from 'react';
// import IconCross from './Icons/IconCross';
import './Content.scss';
import VimeoPopup from "../../components/vimeoPopup"
import BackgroundVideo from "../../components/videoBackground"
import { PulseLoader } from 'react-spinners';

const Content = ({ movie, onClose, style}) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
  <div className="content" style={style}>
    <div className="content__background">
      <div className="content__background__shadow" />
      { movie.disableVideo ?
      null :
      <BackgroundVideo width='100%' height='100%' url={movie.bgUrl} style={{right:0, marginLeft: 'auto'}} />
      }
      <div
        className="content__background__image"
        style={{ 'backgroundImage': `url(${movie.imageBg})` }}
      >
      { movie.disableVideo ?
        null :
        <div className='video-loading'>
          <PulseLoader
            sizeUnit={"px"}
            size={30}
            color={'#fff'}
          />
        </div>
      }
      </div>
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          <div className='content__description__container'>
            {movie.description}
          </div>
        </div>
        <VimeoPopup url={movie.url} buttonText="Play Full Video" buttonStyle="primary" />
      </div>
      {/* <button className="content__close" onClick={onClose}>
        <IconCross />
      </button> */}
    </div>
  </div>
)};

export default Content;
