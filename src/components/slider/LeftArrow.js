import React from 'react';
import './LeftArrow.scss';

const LeftArrow = (props) => {
  return (
    <div className="arrow__back" onClick={props.goToPrevSlide}>
      <i className="material-icons arrow__icon">keyboard_arrow_left</i>
    </div>
  );
}

export default LeftArrow;

