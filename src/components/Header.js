import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header-wrapper">
                <img className="main-header-logo" src={logo}/>
                <a className="main-header-button">О системе</a>
                <a className="main-header-button">Контакты</a>
                <a className="main-header-button">
                <i className="material-icons">search</i>
                </a>
                <a className="main-header-button-login"><i className="material-icons" id="responsive-icon">exit_to_app</i>Войти</a>
            </div>
        </div>
    );
}