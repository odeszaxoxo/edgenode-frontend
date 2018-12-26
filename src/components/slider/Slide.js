import React,{Component} from 'react'
import './Slide.scss'

export class Slide extends Component {

  render () {
      return (
        <div onMouseEnter={this.props.onMouseEnterHandler} 
             onMouseLeave={this.props.onMouseLeaveHandler} 
             className={this.props.isSelected? "text-slide text-slide_selected":"text-slide"}
             style={{width:this.props.width}}>
        <div className="text-slide__content">{this.props.object}</div>
        </div>)
    }
  }
  

  
  export default Slide;