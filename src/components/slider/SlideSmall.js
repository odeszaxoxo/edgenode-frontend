import React from 'react'
import './SlideSmall.scss'
import {Link} from 'react-router-dom';

const SlideSmall = ({object, isSelected}) => {
    return (
    <div className={isSelected? "slide slide_selected":"slide"}>
      <Link to="/main/university" className="slide__link"><div className="slide__content">
        <div className="slide__text">
          <h1 className="slide__title">MSU</h1>
          <p className="slide__text-content">Lomonosov Moscow State University is the leading Russian research and educational centre, viz. space exploration and space technologies, biotechnologies, nanotechnologies and bionanosystems, strategic IT, cognitive science and research into humanitarian bases for national and global processes.</p>
        </div>
        <div className="slide__image-container">
          <img className="slide__image" alt="" src={object}/>
        </div>
      </div></Link>
    </div>)
  }
  
  export default SlideSmall;