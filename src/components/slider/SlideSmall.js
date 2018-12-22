import React from 'react'
import './SlideSmall.scss'

const SlideSmall = ({object, isSelected}) => {
    return (
    <div className={isSelected? "slide slide_selected":"slide"}>
      <div className="slide__content">
        <div className="slide__text">
          <h1 className="slide__title">МГИК</h1>
          <p className="slide__text-content">Федеральное государственное бюджетное образовательное учреждение высшего образования в области культуры и искусства и подведомственное Министерству культуры Российской Федерации. </p>
        </div>
        <div className="slide__image-container">
          <img className="slide__image" src={object}/>
        </div>
      </div>
    </div>)
  }
  
  export default SlideSmall;