import React, { Component } from 'react';
import './Registration.scss';
import {FooterComponent} from '../../components/Footer';
import {HeaderComponent} from '../../components/Header'
import {RegistrationComponent} from '../../components/RegistrationForm'


export class RegistrationFormComponent extends Component {
    
    render() {

        return (
            <div className="main">
            <div className="registration-form-container">
                <div className="container__header">
                    <HeaderComponent></HeaderComponent>
                
                </div>
                <div className="container__registration-form">
                    <RegistrationComponent></RegistrationComponent>
                </div>
            </div>
            <FooterComponent></FooterComponent>
            </div>
        );
    }
}