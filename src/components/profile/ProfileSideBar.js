import React, { Component } from 'react';
import './ProfileSideBar.scss';
import { Link } from "react-router-dom";
import placeholder from '../../assets/profile-placeholder.png';

export class ProfileSideBarComponent extends Component {

    render() {

        return (
                <div className="sidebar-form">
                    <div className="sidebar-form__image">
                        <img src={placeholder} className="sidebar-form__image-placeholder" alt=""></img>
                    </div>
                    <div className="sidebar-form__button-container">
                        <Link to='/profile/main'><button className="sidebar-form__button">PROFILE</button></Link>
                        <Link to='/profile/qualifications'><button className="sidebar-form__button">QUALIFICATIONS</button></Link>
                        <Link to='/profile/roadmaps'><button className="sidebar-form__button">ROADMAPS</button></Link>
                        <Link to='/profile/stats'><button className="sidebar-form__button">STATS</button></Link>
                        <Link to='/profile/settings'><button className="sidebar-form__button">SETTINGS</button></Link>
                    </div>
                    <div className="sidebar-form__logout">
                        <button className="sidebar-form__logout-button">LOG OUT</button>
                    </div>
                </div>
        );
    }
}