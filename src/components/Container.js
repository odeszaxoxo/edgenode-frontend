import React, { Component } from 'react';
import './Container.scss';
import {LoginFormComponent} from "./LoginForm"
import {HeaderComponent} from "./Header";
import { Route } from "react-router-dom";
import {RegistrationComponent} from './RegistrationForm';
import { FooterComponent } from './Footer';
import {MainComponent} from '../containers/Main/Main'


export class ContainerComponent extends Component {
    
    render() {

        return (
            <div className="container">
                <div className="container__header">
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className="container__content-form">
                <Route path='/recovery' component={LoginFormComponent}/>
                <Route path='/auth' component={LoginFormComponent}/>
                <Route path='/registration' component={RegistrationComponent}/>
                <Route exact path='/' component={MainComponent}/>
                </div>
                <div className="container__footer">
                <FooterComponent></FooterComponent>
                </div>
            </div>
          );
    }
}