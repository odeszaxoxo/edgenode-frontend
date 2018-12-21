import React from 'react'
import './SlideSmall.scss'

const SlideSmall = ({object, isSelected}) => {
    return (
    <div className={isSelected? "slide slide_selected":"slide"}>
    <div className="slide__content">{object}</div>
    </div>)
  }
  
  export default SlideSmall;