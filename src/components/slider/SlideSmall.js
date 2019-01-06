import React from 'react'
import './SlideSmall.scss'
import {Link} from 'react-router-dom';

const SlideSmall = ({object, isSelected}) => {
    return (
    <div className={isSelected? "slide slide_selected":"slide"}>
      <Link to="/main/university" className="slide__link"><div className="slide__content">
        <div className="slide__text">
          <h1 className="slide__title">МГИК</h1>
          <p className="slide__text-content">Федеральное государственное бюджетное образовательное учреждение высшего образования в области культуры и искусства и подведомственное Министерству культуры Российской Федерации. </p>
        </div>
        <div className="slide__image-container">
          <img className="slide__image" src={object}/>
        </div>
      </div></Link>
    </div>)
  }
  
  export default SlideSmall;