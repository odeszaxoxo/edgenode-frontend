import React, { Component } from 'react';
import './Container.scss';
import {LoginFormComponent} from "./LoginForm"
import {HeaderComponent} from "./Header";
import { Route } from "react-router-dom";
import {RegistrationComponent} from './RegistrationForm';
import { FooterComponent } from './Footer';
import {MainComponent} from '../containers/Main/Main'
import { UniversityInfoComponent } from '../containers/UniversityInfo';


export class ContainerComponent extends Component {
    
    render() {

        return (
            <div className="container" id="login__container">
                <div className="container__header">
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className="container__content-form">
                    <Route path='/main/recovery' component={LoginFormComponent}/>
                    <Route path='/main/auth' component={LoginFormComponent}/>
                    <Route path='/main/registration' component={RegistrationComponent}/>
                    <Route path='/main/university' component={UniversityInfoComponent}/>
                    <Route exact path='/main' component={MainComponent}/>
                </div>
            </div>
          );
    }
}