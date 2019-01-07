import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/main"><img className="main-header__wrapper-logo" src={logo} alt=""/></Link>
               
                <Link to="/info" className="main-header__wrapper-button">О нас</Link>
                <Link to="/info" className="main-header__wrapper-button">Проекты</Link>
                <Link to="/info" className="main-header__wrapper-button">Регламент</Link>
                <Link to="/info" className="main-header__wrapper-button">Партнеры</Link>
                <a className="main-header__wrapper-button">
                <i className="material-icons">search</i>
                </a>
                <Link to="/main/auth" className="main-header__wrapper-button-login">Войти</Link>
            </div>
        </div>
    );
}
