import React from 'react';
import { Swipe, SwipeItem } from 'swipejs/react';
import 'swipejs/style.css';
import './servicesSlider.scss'

import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

import imgCaptureCamera from '../images/servicesSlider/capture_camera.png'
import imgCaptureDrone from '../images/servicesSlider/capture_drone.png'
import imgCaptureTero from '../images/servicesSlider/capture_tero.png'
import imgComputer from '../images/servicesSlider/computer.png'
import imgCustomRigs from '../images/servicesSlider/custom_rigs.png'
import imgHighQualityCapture from '../images/servicesSlider/high_quality_capture.png'
import imgMatterport from '../images/servicesSlider/matterport.png'


class ServicesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.onTransactionEnd = this.onTransactionEnd.bind(this);
    this.swipe = React.createRef();

  }

  onTransactionEnd(index, elem) {
    // Your own logic
  }

  handleCallback(index, elem) {
    // Your own logic
  }

  handleClick(e) {
    // Your own logic
  }
  
  handleNext(e) {
    this.swipe.current.next();
  }

  handlePrev(e) {
    this.swipe.current.prev();
  }

  render() {
    return (
      <div className='services-slider-wrapper'>
        <Swipe className='services-slider'
               ref={this.swipe}
               startSlide={0}
               speed={1000}
               auto={3000}
               draggable={true}
               continuous={true}
               autoRestart={true}
               disableScroll={false}
               stopPropagation={false}
               callback={this.handleCallback}
               transitionEnd={this.onTransactionEnd}>
          <SwipeItem className='services-slider-item'onClick={this.handleClick}>
            <img src={imgCaptureDrone} />
            <div className='description'>360 Drone VR Video</div>
          </SwipeItem>
          <SwipeItem className='services-slider-item'onClick={this.handleClick}>
            <img src={imgCaptureTero} />
            <div className='description'>Elite Image Capture</div>
          </SwipeItem>
          <SwipeItem className='services-slider-item'onClick={this.handleClick}>
            <img src={imgCustomRigs} />
            <div className='description'>Custom Rigs</div>
          </SwipeItem>
          <SwipeItem className='services-slider-item'onClick={this.handleClick}>
            <img src={imgHighQualityCapture} />
            <div className='description'>High Quality Capture</div>
          </SwipeItem>
        </Swipe>
          
        <div className="slider-prev" onClick={this.handlePrev.bind(this)}>
          <img src={arrowLeft}/>
        </div>
        <div className="slider-next" onClick={this.handleNext.bind(this)}>
          <img src={arrowRight}/>
        </div>
      </div>
    );
  }
}

export default ServicesSlider;