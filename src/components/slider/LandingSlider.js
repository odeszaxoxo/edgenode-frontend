import React, { Component } from 'react';
import './LandingSlider.scss';
import Slide from './Slide'


export class BigSliderComponent extends Component {
    
    constructor(props) {
        super(props);
        setInterval(() => {
            if(!this.state.isMouseOver){
                this.goToNextSlide()
            }
        }, 3000);
        this.state = {objects:["1","2","3","4"], currentIndex:0, translateValue:0, isMouseOver:false}
    }

    goToNextSlide = () => {
        if(this.state.currentIndex===this.state.objects.length-1){
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex:prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () =>{
        const slide = document.querySelector('.text-slide');
        return slide? slide.clientWidth:0
    }

    onMouseEnterHandler = () => {
        this.setState({isMouseOver:true});
      }
    
    onMouseLeaveHandler = () => {
        this.setState({isMouseOver:false});
    }
    
    containerWidth = () =>{
        const container = document.querySelector('.text-slider__container');
        return container ? container.clientWidth : 0;
    }
    
    render() {
        return (
            <div className="text-slider">
                <div className="text-slider__container" >
                    <div className="text-slider__wrapper" style={{ transform: `translateX(${this.state.translateValue}px)`}}>
                        {this.state.objects.map((object, i) =>(
                            <Slide key={i}
                                object={object}
                                isSelected={this.state.currentIndex===i} 
                                onMouseEnterHandler={this.onMouseEnterHandler} 
                                onMouseLeaveHandler={this.onMouseLeaveHandler}
                                width={this.containerWidth()}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

            