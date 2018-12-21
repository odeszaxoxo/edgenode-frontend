import React from 'react'
import './Slide.scss'

const Slide = ({object, isSelected}) => {
    return (
    <div className={isSelected? "slide slide_selected":"slide"}>
    <div className="slide__content">{object}</div>
    </div>)
  }
  
  export default Slide;