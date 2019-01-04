import React, { Component } from 'react';
import './Accordeon.scss';

import { AccordeonSlide } from './AccordeonSlide';

export class Accordeon extends Component {
  constructor(props) {
    super(props);
    this.state = {slides: props.slides};
  }

  slideClickHandler = (slide) => () => {
    console.log(slide);
    const slides = this.state.slides;
    const toggledSlide = slides.find(x => x === slide);

    toggledSlide.isOpened = !toggledSlide.isOpened;

    this.setState({slides});
  }

  render() {
    const slides = this.state.slides.map(slide => (<AccordeonSlide key={slide.id} onClick={this.slideClickHandler(slide)} isOpened={slide.isOpened}> {slide.content} </AccordeonSlide>))

    return(
      <div className="accordeon">
        {slides}
      </div>
    );
  }
}