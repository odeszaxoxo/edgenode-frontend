import React from 'react';
import './RightArrow.scss';

const RightArrow = (props) => {
  return (
    <div className="arrow__next" onClick={props.goToNextSlide}>
      <i className="material-icons arrow__icon">keyboard_arrow_right</i>
    </div>
  );
}

export default RightArrow;