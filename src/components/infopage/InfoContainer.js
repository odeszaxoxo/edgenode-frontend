import React, { Component } from 'react';
import './InfoContainer.scss';
import {InfoHeaderComponent} from './InfoHeader';
import { FooterComponent } from '../Footer';
import {Accordeon} from './Accordeon';

const slides = [
    {
      id:"1",
      isOpened: false,
      content: 'Info'
    },
    {
      id:"2",
      isOpened: false,
      content: 'Info'
    },
    {
      id:"3",
      isOpened: false,
      content: 'Info'
    },
    {
      id:"4",
      isOpened: false,
      content: 'Info'
    }
  ];

export class InfoContainerComponent extends Component {
    
    render() {

        return (
            <div className="info-container">
                <div className="info-container__header">
                    <InfoHeaderComponent></InfoHeaderComponent>
                </div>
                <div className="info-container__content-form">
                    <h1 className="info-container__title">About</h1>
                    <div className="info__list-container">
                        <ul className="info-container__list">
                            <h1 className="info-container__list-text">Who we are?</h1>
                            <li className="info__list-item">EdgeNode is a multidisciplinary collective of researchers, entrepreneurs and developers, aimed at solving modern
challenges within the global educational setting. We position ourselves as those, who use the latest achievements
in technology and fundamental science to improve conditions for personal intellectual development.</li>
                            <li className="info__list-item">Our team has gathered around the idea of creating a search system, which would function as both an optimization tool
for personal development and as a bank for intellectual capital. Global education has become so diverse and at the
same time mutually dependant, that it became almost impossible for one person to get an adequate picture of itself
in the international academic setting, without sacrificing time that could be spent on actual learning and training.</li>
                            <li className="info__list-item">Users are our key suppliers of ideas on how to make our algorithms faster and more reliable. We do our best to collect
raw data from first sources and to associate with highly ranked institutions and experts, working in the areas of 
sociology, education, economics, neural networks and discrete mathematics.</li>
                            <h1 className="info-container__list-text">How we work?</h1>
                            <li className="info__list-item">Due to our necessity to constantly collect data and make it part of our databases, we try to approach every user
independantly. Once there is an academic achievement that you find is important to add to your profile, you can
describe it independantly from the standard forms. By doing so, you not only get a better picture of your trajectories,
but you also help EdgeNode to become more reliable.</li>
                            <li className="info__list-item">Due to our necessity to constantly collect data and make it part of our databases, we try to approach every user
independantly. Once there is an academic achievement that you find is important to add to your profile, you can
describe it independantly from the standard forms. By doing so, you not only get a better picture of your trajectories,
but you also help EdgeNode to become more reliable.</li>
                        </ul>
                    </div>
                    <div className="info-container__accordion-line"><i className="material-icons accordion-icon">list</i></div>
                    <div className="info-container__accordion">
                    <Accordeon slides={slides}></Accordeon>
                    </div>
                </div>
                <div className="info-container__footer">
                <FooterComponent></FooterComponent>
                </div>
            </div>
          );
    }
}
