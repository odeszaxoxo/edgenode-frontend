import React, { Component } from 'react';
import './Main.css';
import {FooterComponent} from './Footer';
import {ContainerComponent} from './Container';

export class MainComponent extends Component {
    
    render() {

        return (
            <div className="main">
                <ContainerComponent></ContainerComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}