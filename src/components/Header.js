import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/main"><img className="main-header__wrapper-logo" src={logo} alt=""/></Link>
               
                <Link to="/info" className="main-header__wrapper-button">About</Link>
                <Link to="/info" className="main-header__wrapper-button">Projects</Link>
                <Link to="/info" className="main-header__wrapper-button">Legal</Link>
                <Link to="/info" className="main-header__wrapper-button">Partnership</Link>
                <a className="main-header__wrapper-button">
                <i className="material-icons">search</i>
                </a>
                <Link to="/main/auth" className="main-header__wrapper-button-login">Login</Link>
            </div>
        </div>
    );
}
