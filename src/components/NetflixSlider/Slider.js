import React, { useState, useEffect, Component } from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'

const Slider = ({ children, activeSlide }) => {

  useEffect(()=>{
    resizeContent();
    window.addEventListener("resize", resizeContent);
  });

  const resizeContent = () => {
    console.log('resized content');
    let wrapperHeight = document.querySelector('.slider-wrapper').clientHeight;
    let navHeight = 56;
    setContentHeight('calc(100vh - '+(wrapperHeight+navHeight)+'px)');
  }

  const [contentHeight, setContentHeight] = useState('90vh');
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));
  
  
  
  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      {currentSlide && <Content style={{height: contentHeight}} movie={currentSlide} onClose={handleClose} />}
      <SliderWrapper>
        <div
          className={cx('slider', { 'slider--open': currentSlide != null })}
        >
          <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
    </SliderContext.Provider>
  );
};

export default Slider;
