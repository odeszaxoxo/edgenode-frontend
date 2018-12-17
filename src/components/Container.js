import React, { Component } from 'react';
import './Container.scss';
import {LoginFormComponent} from "./LoginForm"
import {HeaderComponent} from "./Header";


export class ContainerComponent extends Component {
    
    render() {

        return (
            <div className="container">
                <div className="container__header">
                    <HeaderComponent></HeaderComponent>
                
                </div>
                <div className="container__login-form">
                    <LoginFormComponent></LoginFormComponent>
                </div>
            </div>
          );
    }
}