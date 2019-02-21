import React, { Component } from 'react';
import './ProfileQualificationsPage.scss';
import { Link } from "react-router-dom";
import {ProfileQualificationsFormComponent} from './ProfileQualificationsForm'

export class ProfileQualificationsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            forms:[{ name: ""}]
        };
    }

    handleFormChange = idx => event => {
        const newForms = this.state.forms.map((form, sidx) => {
            if (idx !== sidx) return form;
            return {...form, name: event.target.value};
        });
        this.setState({fullForms: newForms});
    };
    
    handleAddForm = () =>{
        this.setState({forms: this.state.forms.concat([{name: ""}])});
    } 

    render() {

        return (
            <div className="qualifications-page">
                <button className="qualifications-page__button" onClick={this.handleAddForm}><i className="material-icons add-button-main">add_circle_outline</i></button>
                {this.state.forms.map((form, idx) => (
                    <ProfileQualificationsFormComponent key={idx}></ProfileQualificationsFormComponent>      
                ))}
            </div>
        );
    }
}