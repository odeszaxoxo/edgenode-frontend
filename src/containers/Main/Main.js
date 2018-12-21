import React, { Component } from 'react';
import './Main.scss';
import {LandingHeaderComponent} from '../../components/LandingHeader'
import {LandingContentComponent} from '../../components/LandingContent'


export class MainComponent extends Component {
    
    render() {

        return (
            <div className="landing">
            <LandingHeaderComponent></LandingHeaderComponent>
            <LandingContentComponent></LandingContentComponent>
            </div>
        );
    }
}