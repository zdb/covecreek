import React, { Component } from 'react';
import './TextSlider.scss'
import Radium, {StyleRoot} from 'radium';
import { merge, fadeOut, zoomIn } from 'react-animations';

const animation = merge(zoomIn, fadeOut);

// // Component for left arrow
// class CarouselLeftArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--left"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-left" />
//       </a>
//     );
//   }
// }

// // Component for right arrow
// class CarouselRightArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--right"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-right" />
//       </a>
//     );
//   }
// }

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator__active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <StyleRoot style={this.props.style}
      className={
        this.props.index == this.props.activeIndex
          ? "carousel__slide carousel__slide__active"
          : "carousel__slide"
      }>
      {/* <li
        style={this.props.style}
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide__active"
            : "carousel__slide"
        }
      > */}
        <p className="carousel-slide__content">{this.props.slide.content}</p>
      {/* </li> */}
      </StyleRoot>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    setInterval(()=>{
      this.goToNextSlide()
    }, 4000)

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    if(e){
      e.preventDefault();
    }

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {

const styles = {
  animation: {
    animation: 'x 3s',
    animationName: Radium.keyframes(animation, 'animation')
  }
}


    return (
      <div className="carousel">
        {/* <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} /> */}

        <div className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
              style={styles.animation}
            />
          )}
        </div>

        {/* <CarouselRightArrow onClick={e => this.goToNextSlide(e)} /> */}

        {/* <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul> */}
      </div>
    );
  }
}




class TextSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 1
    };

    this.slider = React.createRef();

  }

  render() {

    const slides = [
      { content: 'Elite Imaging' },
      { content: 'Custom Backend ' },
      { content: 'Unmatched Quality' },
      { content: 'Seemless Web Integration' },
      { content: 'VR Ready' }
    ];

    return (
      <div className='video-text-slider'>
        <Carousel slides={slides} />
      </div>
    );
  }
}

export default TextSlider;