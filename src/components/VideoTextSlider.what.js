import React from 'react';
import { Swipe, SwipeItem } from 'swipejs/react';
import 'swipejs/style.css';
import './videoTextSlider.scss'

import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';


class VideoTextSlider extends React.Component {
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
      <div className='video-text-slider-wrapper'>
        <Swipe className='video-text-slider'
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
          <SwipeItem className='video-text-slider-item'onClick={this.handleClick}>
            <div className='description'>Elite Imagining</div>
          </SwipeItem>
          <SwipeItem className='video-text-slider-item'onClick={this.handleClick}>
            <div className='description'>Custom Backend </div>
          </SwipeItem>
          <SwipeItem className='video-text-slider-item'onClick={this.handleClick}>
            <div className='description'>Unmatched Quality</div>
          </SwipeItem>
          <SwipeItem className='video-text-slider-item'onClick={this.handleClick}>
            <div className='description'>Seemless Web Integration</div>
          </SwipeItem>
          <SwipeItem className='video-text-slider-item'onClick={this.handleClick}>
            <div className='description'>VR Ready</div>
          </SwipeItem>

          

        </Swipe>
          
        {/* <div className="slider-prev" onClick={this.handlePrev.bind(this)}>
          <img src={arrowLeft}/>
        </div>
        <div className="slider-next" onClick={this.handleNext.bind(this)}>
          <img src={arrowRight}/>
        </div> */}
      </div>
    );
  }
}

export default VideoTextSlider;