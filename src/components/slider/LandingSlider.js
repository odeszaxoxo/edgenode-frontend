import React, { Component } from 'react';
import './LandingSliderSmall.scss';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'


export class BigSliderComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {objects:["1","2","3","4"], currentIndex:0, translateValue:0}
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0){
            return this.setState({
                currentIndex: this.state.objects.length-1,
                translateValue: -(this.state.objects.length-1)*(this.slideWidth())
            })
        }
        
    
        this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
        }))
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
        const slide = document.querySelector('.slide')
        return slide? slide.clientWidth:0
    }
    
    
    render() {
        return (
            <div className="slider">
            <div className="slider__container" >
            <div className="slider__wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
            }}>
            {this.state.objects.map((object, i) =>(
                <Slide key={i} object={object} isSelected={this.state.currentIndex===i}/>
            ))}
            </div>
            </div>
            <div className="arrows">
                <LeftArrow 
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow 
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
            </div>
        );
    }
}

            