import React from 'react';
import './AccordeonSlide.scss';

export const AccordeonSlide = ({isOpened, children, onClick}) => {
  return(
    <div className="accordeon-slide">
      <div className="accordeon-slide__header" onClick={onClick}>
        Как поступить в вуз после 9 класса?
      </div>
      <div className={isOpened ? "accordeon-slide__body accordeon-slide__body_opened" : "accordeon-slide__body"}>
        {children}
      </div>
    </div>
  );
}